export const tsIntro = {
  title: "Postgres + Timescale — sound senior",
  lede: "The JD names PostgreSQL and time-series databases. Profound’s product is event data: prompts, citations, crawler hits, visibility scores, millions of rows a day, then a CMO dashboard that must stay fast. You have not owned Timescale in production. Do not claim you have. Learn the machinery below so you can design out loud and map it to the AWS monitoring work you actually did.",
};

export const honesty = `I have not run Timescale as the system of record. What I have owned is a telemetry path — ingest, store, roll up, alert — on AWS for hardware health. If I were putting Profound’s citation stream on disk I would use Postgres + Timescale: hypertable on event time, compress and drop raw chunks on a policy, continuous aggregates for the hourly/daily tiles an exec actually looks at, and ordinary Postgres tables for tenants, brands, and prompt sets so I can still JOIN.`;

export const whyProfound = [
  {
    title: "The write path is append-heavy",
    body: "Every model response is an event: time, tenant, brand, engine, prompt, mentioned?, sentiment, citation URLs. That is the textbook Timescale workload. You almost never UPDATE yesterday’s row. You INSERT and you roll up.",
  },
  {
    title: "The read path is buckets + latest",
    body: "Dashboards ask 'share of voice by engine, last 7 days, daily buckets' and 'current visibility for this prompt set.' Those are time_bucket queries and last-point-per-series queries — not random OLTP.",
  },
  {
    title: "Customers still live in relational Postgres",
    body: "SSO users, workspaces, brand lists, RBAC, SOC 2 audit tables. Timescale’s pitch versus Influx is: it is still Postgres. JOIN the event hypertable to brands. Use RLS. Use the same backups, the same ORM, the same replica.",
  },
  {
    title: "FDE work is often the warehouse handoff",
    body: "JD: pipelines into BI tools and data warehouses. Hot store = Timescale. Cold / board reporting = Snowflake or BigQuery via COPY, logical replication, or a nightly rollup export. Say that split out loud.",
  },
];

export const concepts = [
  {
    name: "Hypertable + chunks",
    say: "A hypertable looks like one table. Underneath, Timescale partitions it into chunks, usually by time interval (default often ~7 days). Queries with a time predicate only open the chunks that overlap. Dropping old data is DROP TABLE on a chunk, not a million-row DELETE.",
    trap: "Chunk interval is a real design choice. Too small → planner/catalog bloat (thousands of chunks). Too large → ugly compression, slow drops, fat indexes. Size chunks so a typical dashboard window hits a handful, and a retention drop removes whole chunks.",
  },
  {
    name: "create_hypertable",
    say: "You create a normal Postgres table, then SELECT create_hypertable('citation_events', by_range('time')) — older docs use create_hypertable('citation_events', 'time'). After that, INSERT/SELECT stay ordinary SQL. The app does not speak a new language.",
    trap: "Primary keys and UNIQUE constraints must include the partitioning column (time). You cannot have UNIQUE (event_id) alone on a hypertable. Use (time, event_id) or a composite that includes time. Interviewers love this gotcha.",
  },
  {
    name: "Space partitioning (multi-tenant)",
    say: "You can partition by time and hash a second dimension — tenant_id or brand_id. That keeps one customer’s firehose from living in the exact same chunks as everyone else’s and can help prune when every query is tenant-scoped.",
    trap: "Do not hash-partition on a high-cardinality junk column (raw prompt text, URL). You will explode chunk count. Space partition only on a low-ish cardinality key you always filter on, like tenant_id. Many teams skip space partitioning until they feel the pain.",
  },
  {
    name: "Compression / columnstore",
    say: "Recent chunks stay row-oriented so ingest stays fast. Older chunks compress into a columnar form (Timescale now markets this as hypercore / columnstore). You pick compress_segmentby (columns you filter on — tenant_id, engine) and compress_orderby (usually time DESC). Then add_compression_policy('citation_events', INTERVAL '7 days').",
    trap: "Compressed chunks hate UPDATEs and DELETEs — Timescale has to decompress. Design as append-only. If a client sends a late correction, INSERT a new event or write corrections to a small rowstore table and resolve at query time. Do not UPDATE six-month-old facts.",
  },
  {
    name: "Retention policies",
    say: "add_retention_policy('citation_events', INTERVAL '90 days') drops whole raw chunks. Keep the rollups longer. Classic pattern: raw 14–90 days, hourly continuous agg 1 year, daily forever. That is how you quote cost to a customer who wants 'all history' on a POC.",
    trap: "Retention on the raw table does not drop continuous aggregates. Set those policies separately. And never put the only copy of a number the CMO reports to the board in a table you will drop.",
  },
  {
    name: "Continuous aggregates",
    say: "Incremental materialized views. CREATE MATERIALIZED VIEW sov_hourly WITH (timescaledb.continuous) AS SELECT time_bucket('1 hour', time) AS bucket, tenant_id, brand_id, engine, count(*) FILTER (WHERE mentioned) AS hits, count(*) AS prompts FROM citation_events GROUP BY 1,2,3,4. Then add_continuous_aggregate_policy with a start_offset and end_offset so it refreshes closed buckets.",
    trap: "end_offset is usually a bit behind now (e.g. 1 hour) so you do not refresh a bucket still being written. materialized_only = false (real-time aggregate) unions the materialized past with raw recent rows — slightly slower, no 'dashboard is an hour stale' complaint. Hierarchical caggs: daily built on hourly, not on raw.",
  },
  {
    name: "time_bucket, gapfill, locf",
    say: "time_bucket('1 day', time) is GROUP BY date_trunc but aligned and cheaper on hypertables. Sparse series (a brand not mentioned that hour) disappear from GROUP BY. time_bucket_gapfill plus locf (last observation carried forward) or interpolate fills the holes so a chart does not lie.",
    trap: "Bucket timezone. Store timestamptz, bucket in UTC, convert for the customer’s locale at the edge. If you bucket in America/New_York inside the cagg, DST will hurt you once and you will not enjoy debugging it on a client call.",
  },
  {
    name: "Indexes that actually matter",
    say: "Default time index plus one composite that matches the access path: (tenant_id, time DESC) or (tenant_id, engine, time DESC). That is 'this customer, last 7 days.' Covering INCLUDE columns if the tile only needs a few fields.",
    trap: "An index per JSON key will die on ingest. Cardinality of 'prompt text' as an indexed dimension is how time-series databases catch fire. Normalize prompts to prompt_id. Put raw text in a side table or JSONB, not in the segmentby list.",
  },
];

export const vsOthers = [
  {
    vs: "Vanilla Postgres partitioning",
    line: "You can RANGE-partition yourself. You then own chunk creation, compression, drop jobs, and incremental rollups. Timescale is that operations layer. Say: 'I would use native partitioning for a simple 2-year audit table. I would not hand-roll caggs and compression for a citation firehose.'",
  },
  {
    vs: "InfluxDB / Prometheus",
    line: "Great for infra metrics. Weak when the app needs JOINs, transactions, RLS, ORMs, and a customer table sitting next to events. Profound is a product database, not a Grafana sidecar. Prometheus pull model is also the wrong shape for 'we just scraped ChatGPT.'",
  },
  {
    vs: "ClickHouse",
    line: "Faster scan monster for analytics-only. Worse at mixed app + events, point updates, and 'the Next.js app talks to one database.' If a customer already has CH, FDE might export into it. I would not pick CH as Profound’s primary app store unless someone has a very large, read-heavy reason.",
  },
  {
    vs: "Timestream / CloudWatch",
    line: "This is your honest past. Fine for ops telemetry. Awkward as the source of truth for product features, tenant-scoped SQL, and customer warehouse sync. Bridge sentence: 'I used CloudWatch/Timestream for hardware health. For an application time-series with JOINs I want Postgres + Timescale.'",
  },
  {
    vs: "Snowflake / BigQuery / Redshift",
    line: "Warehouse. Batch, BI, data science, 18-month board packs. Not the 200ms tile behind a React dashboard. FDE move: Timescale (or PG) as hot store, scheduled COPY or Fivetran-style sync of daily caggs into the customer’s warehouse. That sentence is in the JD.",
  },
];

export const schemaTalk = `citation_events (
  time         timestamptz not null,
  tenant_id    uuid        not null,
  brand_id     uuid        not null,
  engine       text        not null,  -- chatgpt | perplexity | gemini ...
  prompt_id    uuid        not null,  -- FK to prompts, NOT the raw string
  mentioned    boolean     not null,
  sentiment    smallint,              -- -1 / 0 / 1
  citation_url text,
  extra        jsonb
);
-- PK / unique includes time
-- hypertable on time
-- optional space partition on tenant_id
-- compress segmentby tenant_id, engine
-- index (tenant_id, time DESC)

brands, tenants, prompt_sets  -- ordinary Postgres tables
sov_hourly, sov_daily         -- continuous aggregates
`;

export const queries = [
  {
    title: "Share of voice, 7 days, by engine",
    code: `SELECT engine,
       count(*) FILTER (WHERE mentioned)::float
         / count(*) AS share
FROM citation_events
WHERE tenant_id = $1
  AND time >= now() - interval '7 days'
GROUP BY engine
ORDER BY share DESC;

-- Production version hits sov_hourly, not raw.`,
  },
  {
    title: "Daily series for a chart (gapfill)",
    code: `SELECT time_bucket_gapfill('1 day', time) AS day,
       locf(count(*) FILTER (WHERE mentioned)) AS mentions
FROM citation_events
WHERE tenant_id = $1
  AND brand_id = $2
  AND time >= now() - interval '30 days'
  AND time < now()
GROUP BY 1
ORDER BY 1;`,
  },
  {
    title: "Latest point per brand (the hard one)",
    code: `-- Naive DISTINCT ON works, but watch the plan.
SELECT DISTINCT ON (brand_id) brand_id, time, mentioned
FROM citation_events
WHERE tenant_id = $1
  AND time >= now() - interval '2 days'
ORDER BY brand_id, time DESC;

-- Senior add-on: this is a skip-scan / last-point problem.
-- If it is a hot tile, store latest in a small rowstore
-- table updated on ingest, or use a very tight cagg.`,
  },
];

export const productionTraps = [
  {
    name: "Cardinality explosion",
    body: "Every unique prompt string, URL, or user-agent as a 'tag' creates series explosion — the Influx failure mode. Dimensions you GROUP BY must be bounded: tenant, brand, engine, prompt_id, region. Raw text lives in JSONB or a dimension table.",
  },
  {
    name: "Late-arriving data vs compressed chunks",
    body: "A backfill of last month’s ChatGPT pulls will land in already-compressed ranges. That is expensive. Either decompress (rare, surgical), write to a staging hypertable and reprocess, or keep a longer uncompressed window during a migration. Call this out in a POC plan.",
  },
  {
    name: "Serverless Next.js + PG connections",
    body: "Vercel/Lambda × a connection per request will knock over Postgres. PgBouncer in transaction mode, a small pool, no session-level SET/advisory-locks unless you know they break transaction pooling. This is a very FDE sentence.",
  },
  {
    name: "Idempotent ingest",
    body: "Scrapers retry. Use ON CONFLICT (time, event_id) DO NOTHING, or a deterministic event_id (hash of tenant + engine + prompt + response time). Without this you double-count share of voice and a CMO will notice.",
  },
  {
    name: "COPY for POCs, not row-by-row",
    body: "Customer sends a 2M-row historical CSV. psycopg/COPY or COPY FROM STDIN. Multi-row INSERT batches of 1–5k if you must stay in the app. Never insert one citation per HTTP handler without a queue.",
  },
  {
    name: "RLS for enterprise tenants",
    body: "Row Level Security on tenant_id so a missed WHERE cannot leak Walmart’s prompts to another workspace. SET LOCAL app.tenant_id = ... per request. Timescale hypertables honor RLS. Banks will ask. You have FIPS language for this conversation.",
  },
  {
    name: "EXPLAIN (ANALYZE, BUFFERS)",
    body: "If a tile is slow, first question: did it prune chunks? Look for a time filter on the hypertable, not a wrapped expression on time (that kills pruning). date_trunc(time) in WHERE is a classic self-own; use time >= ? AND time < ?.",
  },
  {
    name: "JSONB is a staging area, not a schema",
    body: "extra JSONB + GIN is fine for a new engine field you do not want to migrate yet. The columns you filter and aggregate every time (engine, mentioned, tenant_id) must be real columns. 'We stored the whole OpenAI payload as JSON' is how dashboards go to 8 seconds.",
  },
];

export const pgExtras = [
  {
    name: "BRIN instead of Timescale, in a pinch",
    body: "On vanilla Postgres, a BRIN index on time is the poor-man’s chunk prune for append-only tables physically ordered by time. Say this if they ask 'what if we do not have Timescale.' Then say you still want caggs/compression before the table hits hundreds of millions of rows.",
  },
  {
    name: "Logical replication / publications",
    body: "Publish the daily cagg out to a warehouse or a customer-owned Postgres. FDE integration pattern: we do not give the customer SELECT on prod. We replicate or export the rollup they paid for.",
  },
  {
    name: "Isolation for a report snapshot",
    body: "Repeatable read (or a temp snapshot table) so a board PDF does not see half of an ingest batch. Most web requests stay read committed. Know the difference; do not lecture.",
  },
  {
    name: "Partial indexes",
    body: "CREATE INDEX ... ON citation_events (tenant_id, time DESC) WHERE mentioned. The 'show me only hits' path is smaller. Partial indexes are a Postgres flex that still applies on hypertables.",
  },
  {
    name: "Advisory locks for one-writer jobs",
    body: "pg_try_advisory_lock around a backfill or cagg rebuild so two FDE laptops do not run the same migration. Session-level — remember PgBouncer transaction mode will fight you. Use a job table instead if you are pooled.",
  },
];

export const questions = [
  {
    q: "Why Timescale instead of a regular Postgres table?",
    a: "Insert volume and time-scoped reads. Chunk exclusion, cheap retention, compression on cold data, and continuous aggregates so the dashboard does not scan 400 million raw citation rows. I still keep tenants/brands as regular tables and JOIN.",
  },
  {
    q: "How would you model AI citation events?",
    a: "Hypertable on timestamptz. Dimensions: tenant_id, brand_id, engine, prompt_id. Facts: mentioned, sentiment, citation_url. JSONB for leftovers. Unique (time, event_id). Compress after 7d segmented by tenant_id, engine. Hourly cagg for tiles. Raw retention 90d unless the contract says otherwise.",
  },
  {
    q: "A customer wants 3 years of raw prompts queryable in the app. What do you tell them?",
    a: "That is a cost and latency conversation, not a yes. Offer: raw 90 days in Timescale, daily rollups for 3 years, cold raw in S3/Parquet or their warehouse. If they truly need raw ad-hoc, that is a warehouse workspace, not the product tile. This is FDE: protect the core, give them a path.",
  },
  {
    q: "Why must UNIQUE include time?",
    a: "Chunks are separate tables. A unique index cannot enforce uniqueness across chunks unless the partition key is in the constraint — otherwise two chunks could each accept the same event_id. So UNIQUE (event_id) is illegal; UNIQUE (time, event_id) is the pattern. Deterministic event_ids still need a consistent timestamp.",
  },
  {
    q: "Dashboard is slow. Walk the debug.",
    a: "1) Is there a sargable time predicate? 2) EXPLAIN — are we opening 200 chunks? 3) Are we hitting raw instead of the cagg? 4) Is segmentby aligned with the WHERE? 5) Connection pile-up vs query time? 6) Are we grouping on a high-cardinality JSON field?",
  },
  {
    q: "How do continuous aggregates stay correct when data arrives late?",
    a: "The refresh policy re-materializes a window (start_offset → end_offset). Late data inside that window gets picked up on the next refresh. Data older than start_offset will not — you call refresh_continuous_aggregate for a surgical range after a backfill. This is the answer that sounds like you have operated one.",
  },
  {
    q: "Real-time aggregate vs materialized_only?",
    a: "materialized_only = true: fast, stale by the end_offset. False: union materialized historical + raw recent, slightly more work, charts include the last hour. Exec tiles often want real-time. Heavy analytical exports can stay materialized_only.",
  },
  {
    q: "How would you isolate Fortune 500 tenants?",
    a: "tenant_id on every event, always in the WHERE, composite index starting with tenant_id, RLS as a belt, optional space partitioning on tenant_id if one whale dominates. Never a shared 'global' table without a tenant constraint. Same instinct as FIPS: define the boundary.",
  },
  {
    q: "Ingest is falling behind. What knobs?",
    a: "Batch inserts or COPY, drop extra indexes, delay compression (uncompressed ingest is faster), more workers, queue (SQS/Kafka) in front of writers, check for per-row triggers, check if ON CONFLICT is fighting you. Do not add more app servers that each open 20 PG connections.",
  },
  {
    q: "Have you used Timescale?",
    a: "No production ownership. Then immediately the honesty script: telemetry background, how you would design this, policies you would set, what you would not do (update compressed data, index raw prompt text). Offer to spin a local Timescale and load a fake citation CSV as a take-home signal if they care.",
  },
];

export const soundBite = [
  {
    drop: "Yeah, I know Postgres, SELECT and JOIN.",
    say: "I would put citation events on a Timescale hypertable, roll them into hourly continuous aggregates, and keep brand/tenant as regular Postgres so the app can JOIN and apply RLS.",
  },
  {
    drop: "We would just store everything in JSON and query it.",
    say: "JSONB for evolving payload fields. Anything we filter or aggregate — time, tenant, engine, mentioned — is a real column. Otherwise the tile will sequential-scan.",
  },
  {
    drop: "Timescale is like Mongo but for time.",
    say: "Timescale is Postgres. Same SQL, same users, same backups. It adds time partitioning, compression, retention jobs, and incremental rollups.",
  },
  {
    drop: "We should keep raw events forever in the app DB.",
    say: "Raw in a short window, rollups for the life of the contract, warehouse or object storage for forensic raw. Forever-raw in the serving DB is how you buy a very large invoice.",
  },
];

export const drill = `-- 8-minute talking drill. Draw this, then write the cagg.

-- 1. Fact table → hypertable
SELECT create_hypertable('citation_events', by_range('time'));

-- 2. Compression
ALTER TABLE citation_events SET (
  timescaledb.compress,
  timescaledb.compress_orderby = 'time DESC',
  timescaledb.compress_segmentby = 'tenant_id, engine'
);
SELECT add_compression_policy('citation_events', INTERVAL '7 days');
SELECT add_retention_policy('citation_events', INTERVAL '90 days');

-- 3. Rollup the CMO actually reads
CREATE MATERIALIZED VIEW sov_hourly
WITH (timescaledb.continuous) AS
SELECT
  time_bucket('1 hour', time) AS bucket,
  tenant_id,
  brand_id,
  engine,
  count(*) FILTER (WHERE mentioned) AS mentions,
  count(*) AS prompts
FROM citation_events
GROUP BY 1, 2, 3, 4;

SELECT add_continuous_aggregate_policy('sov_hourly',
  start_offset => INTERVAL '3 days',
  end_offset   => INTERVAL '1 hour',
  schedule_interval => INTERVAL '1 hour');
`;

export const lockIn = [
  {
    fact: "Say these words out loud, once",
    examples: [
      "Hypertable, chunk, compression policy, retention policy, continuous aggregate, time_bucket, UNIQUE must include time. Again, faster.",
    ],
  },
  {
    fact: "Draw citation_events + brands + sov_hourly in 60 seconds",
    examples: [
      "Three boxes. citation_events(time, tenant_id, brand_id, engine, prompt_id, mentioned) — hypertable. brands(tenant_id, brand_id, name) — normal table. sov_hourly(bucket, tenant_id, brand_id, engine, mentions, prompts) — continuous aggregate. Arrow: events roll up into sov_hourly. JOIN brands for the CMO name.",
    ],
  },
  {
    fact: "Have you used Timescale?",
    examples: [
      "Not as the system of record. I have owned a telemetry path — ingest, store, roll up, alert — on AWS for hardware health. For Profound's citation stream I would use a hypertable on event time, compress after a week, drop raw at 90 days, and put hourly share-of-voice on a continuous aggregate. Brands stay ordinary Postgres so I can JOIN and apply RLS.",
    ],
  },
  {
    fact: "One sentence back to AWS monitoring",
    examples: [
      "Same four stages: collect from the box, store cheaply, roll up what a human actually looks at, alert on the lie. CloudWatch was the store then. Timescale is the store I would pick for product events I need to JOIN.",
    ],
  },
  {
    fact: "If the 10-minute exercise is data-shaped",
    examples: [
      "First I write WHERE time >= now() - interval '7 days' AND tenant_id = $1, then GROUP BY engine. Then I say: in production this is a continuous aggregate, not a raw scan. Then I handle empty brand. I do not start by designing Kafka.",
    ],
  },
];
