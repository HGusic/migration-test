const walk = [
  {
    n: "1",
    title: "On-prem collectors, not CloudWatch agent",
    say: "Transponders are not EC2. A Python collector on the lab jump host scrapes shelves every 30–60 seconds — SNMP or the platform API — and batches a small metric set: oper, utilization, optical power, FEC, heartbeat.",
  },
  {
    n: "2",
    title: "Identity: AssumeRole, no long-lived keys",
    say: "The collector assumes an IAM role through STS. PutMetricData and PutObject are scoped to the Transponder/* CloudWatch namespace and one S3 prefix. If someone copies the role, they still cannot write into some other team's metrics.",
  },
  {
    n: "3",
    title: "Private path into the VPC",
    say: "Lab network hits us over Site-to-Site VPN. Traffic never aims at the public CloudWatch endpoint. VPC interface endpoints for execute-api, monitoring, s3, sts, logs, secretsmanager. That was the IAM/networking pain: endpoint policies.",
  },
  {
    n: "4",
    title: "Ingest is buffered on purpose",
    say: "Private HTTP API Gateway in front, SQS behind it, DLQ on the side. A collector retry storm should not take down Lambda. Lambda validates, drops illegal dimensions, then fans out.",
  },
  {
    n: "5",
    title: "Two stores, two jobs",
    say: "CloudWatch Metrics for the dashboard and alarms — two-week high-res, small metric set with dimensions. DynamoDB for latest health per shelf so a tile is a GetItem, not a CloudWatch scan. Optional: Lambda also PutObject a JSON dump to S3 under a product prefix for debugging — plain S3, not a data lake.",
  },
  {
    n: "6",
    title: "Alarms a human can trust",
    say: "Composite alarms. Missing heartbeat matters more than a flapping laser. Optical-power alarms have hysteresis so the lab warmup does not page anyone.",
  },
  {
    n: "7",
    title: "CloudFormation is the product",
    say: "Nested stacks: iam, network, ingest, observe. Parameters are ProductName, Namespace, HeartbeatSeconds. Transponder software and platform launched the same stack. A dashboard nobody else can reproduce is a demo.",
  },
];

type Variant = "hot" | "dim" | "plain";

function Box({
  x,
  y,
  w = 200,
  h = 68,
  n,
  title,
  sub,
  variant = "plain",
}: {
  x: number;
  y: number;
  w?: number;
  h?: number;
  n?: string;
  title: string;
  sub: string;
  variant?: Variant;
}) {
  const stroke =
    variant === "hot"
      ? "#6a7d2c"
      : variant === "dim"
        ? "#4a4538"
        : "#3a422c";
  const fill =
    variant === "hot"
      ? "#161c10"
      : variant === "dim"
        ? "#14140f"
        : "#191e14";
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        rx="10"
        fill={fill}
        stroke={stroke}
        strokeWidth="1.4"
        strokeDasharray={variant === "dim" ? "5 4" : undefined}
      />
      {n ? (
        <g>
          <circle
            cx={x + w - 14}
            cy={y + 14}
            r="8"
            fill="#12180f"
            stroke="#8aa33a"
          />
          <text
            x={x + w - 14}
            y={y + 17.5}
            textAnchor="middle"
            fill="#d6f26a"
            fontSize="9"
            fontFamily="IBM Plex Mono, ui-monospace, monospace"
          >
            {n}
          </text>
        </g>
      ) : null}
      <text
        x={x + 12}
        y={y + 24}
        fill="#f3efe4"
        fontSize="13"
        fontFamily="IBM Plex Sans, system-ui, sans-serif"
        fontWeight="600"
      >
        {title}
      </text>
      <text
        x={x + 12}
        y={y + 44}
        fill="#9a9688"
        fontSize="11"
        fontFamily="IBM Plex Sans, system-ui, sans-serif"
      >
        {sub}
      </text>
    </g>
  );
}

function Arrow({
  d,
  label,
  lx,
  ly,
  dashed,
}: {
  d: string;
  label?: string;
  lx?: number;
  ly?: number;
  dashed?: boolean;
}) {
  return (
    <g>
      <path
        d={d}
        fill="none"
        stroke={dashed ? "#8aa33a" : "#d6f26a"}
        strokeWidth="1.7"
        strokeDasharray={dashed ? "5 4" : undefined}
        markerEnd="url(#arch-head)"
      />
      {label && lx != null && ly != null ? (
        <text
          x={lx}
          y={ly}
          fill="#c6d47a"
          fontSize="10"
          fontFamily="IBM Plex Mono, ui-monospace, monospace"
        >
          {label}
        </text>
      ) : null}
    </g>
  );
}

export default function AwsArchitecture() {
  return (
    <section className="section arch-section">
      <div className="section-title">
        <h3>The architecture you walk</h3>
      </div>
      <div className="arch-talk">
        <span className="arch-talk-label">Say this, then draw</span>
        <p>
          Shelves are not EC2, so a CloudWatch agent was the wrong tool. A
          Python collector on the lab jump host scrapes every 30–60 seconds,
          assumes an IAM role, and comes in over VPN to a private API.
        </p>
        <p>
          Messages land in SQS — that wakes Lambda. Lambda can take a small
          batch, validate it, and fan out to CloudWatch Metrics for the live
          tile, DynamoDB for latest health per shelf, and optionally S3 for a
          JSON debug dump. CloudWatch alarms fire in the dashboard: missing
          heartbeat matters more than a flapping laser.
        </p>
        <p>
          Nested CloudFormation stands the same stack up for other teams. A
          dashboard nobody else can reproduce is a demo.
        </p>
        <p className="arch-talk-dont">
          Do not say: “Lambda runs every 10 seconds” or “once the SQS buffer is
          big enough.” Trigger = messages arrived. Batch size is optional
          efficiency, not a fill-threshold.
        </p>
      </div>

      <p className="lede" style={{ fontSize: 16 }}>
        Lime arrows are the metric path. Dashed arrows are identity or
        control-plane. No Firehose, no Athena — only services you can defend.
      </p>

      <div className="arch-svg-wrap">
        <svg
          className="arch-svg"
          viewBox="0 0 1280 620"
          role="img"
          aria-label="Transponder monitoring data flow on AWS"
        >
          <defs>
            <marker
              id="arch-head"
              markerWidth="8"
              markerHeight="8"
              refX="7"
              refY="4"
              orient="auto"
            >
              <path d="M0,0 L8,4 L0,8 Z" fill="#d6f26a" />
            </marker>
          </defs>

          <text
            x="16"
            y="22"
            fill="#d6f26a"
            fontSize="11"
            fontFamily="IBM Plex Mono, ui-monospace, monospace"
            letterSpacing="1.6"
          >
            ON-PREM / LAB
          </text>
          <text
            x="268"
            y="22"
            fill="#d6f26a"
            fontSize="11"
            fontFamily="IBM Plex Mono, ui-monospace, monospace"
            letterSpacing="1.6"
          >
            AWS us-east-1 · VPC 10.20.0.0/16 · private subnets · Site-to-Site VPN
          </text>

          <rect
            x="258"
            y="32"
            width="1006"
            height="540"
            rx="16"
            fill="#12180f"
            stroke="#3d4a1e"
            strokeDasharray="6 5"
          />

          <Box
            x={16}
            y={48}
            n="1"
            title="Transponder shelves"
            sub="oper · util · power · FEC · heartbeat"
          />
          <Box
            x={16}
            y={176}
            n="1"
            title="Lab collector"
            sub="Python batcher. Not a CW agent."
          />
          <Box
            x={16}
            y={360}
            variant="dim"
            title="IAM role · no static keys"
            sub="AssumeRole. Scoped Transponder/*"
          />

          <Box
            x={280}
            y={176}
            n="4"
            title="API Gateway"
            sub="Private HTTP API · via VPCE"
          />
          <Box
            x={530}
            y={176}
            n="4"
            title="SQS"
            sub="Buffer collector bursts"
          />
          <Box
            x={780}
            y={176}
            n="4"
            title="Lambda ingest"
            sub="Validate · flatten dims · fan-out"
          />
          <Box
            x={530}
            y={286}
            w={200}
            h={52}
            variant="dim"
            title="SQS DLQ"
            sub="Poison messages stop here"
          />

          <Box
            x={280}
            y={380}
            n="5"
            variant="hot"
            title="CloudWatch Metrics"
            sub="Small set + dimensions · 2-week"
          />
          <Box
            x={530}
            y={380}
            n="5"
            variant="hot"
            title="DynamoDB"
            sub="Latest health / shelf · GetItem"
          />
          <Box
            x={780}
            y={380}
            n="5"
            variant="dim"
            title="S3 dumps (optional)"
            sub="Lambda PutObject · debug JSON"
          />

          <Box
            x={1054}
            y={176}
            n="6"
            title="CW Dashboard"
            sub="Health · util · heartbeat"
          />
          <Box
            x={1054}
            y={286}
            n="6"
            title="CW Alarms"
            sub="Hysteresis. Heartbeat > flap."
          />

          <Box
            x={280}
            y={500}
            n="7"
            w={450}
            variant="dim"
            title="Nested CloudFormation"
            sub="iam → network → ingest → observe   ·   CloudTrail · KMS · Secrets Manager"
          />

          <Arrow
            d="M116,116 L116,170"
            label="SNMP / platform API · 30–60s"
            lx={124}
            ly={150}
          />
          <Arrow
            d="M116,244 L116,354"
            label="AssumeRole via STS"
            lx={124}
            ly={310}
            dashed
          />
          <Arrow
            d="M216,210 L274,210"
            label="VPN + VPCE"
            lx={218}
            ly={202}
          />
          <Arrow d="M480,210 L524,210" label="PUT batch" lx={486} ly={202} />
          <Arrow d="M730,210 L774,210" label="poll" lx={738} ly={202} />
          <Arrow
            d="M630,244 L630,280"
            label="poison"
            lx={638}
            ly={268}
            dashed
          />
          <Arrow d="M880,244 L880,330" label="fan-out" lx={888} ly={292} />
          <Arrow d="M880,330 L380,330 L380,374" label="metrics" lx={400} ly={324} />
          <Arrow d="M880,330 L630,330 L630,374" label="latest" lx={640} ly={324} />
          <Arrow d="M880,330 L880,374" label="optional" lx={888} ly={358} />
          <Arrow
            d="M480,400 L1048,210 L1054,210"
            label="read tile"
            lx={820}
            ly={200}
          />
          <Arrow
            d="M480,430 L1048,320 L1054,320"
            label="alarm eval"
            lx={820}
            ly={310}
          />
        </svg>
      </div>

      <h4 style={{ marginTop: 22 }}>Walk it in this order</h4>
      <div className="card">
        {walk.map((step) => (
          <div className="q" key={step.n}>
            <dt>
              {step.n}. {step.title}
            </dt>
            <dd>{step.say}</dd>
          </div>
        ))}
      </div>

      <div className="grid-2" style={{ marginTop: 14 }}>
        <div className="card">
          <h4>If they ask “why so many boxes?”</h4>
          <p>
            SQS is the shock absorber so a collector burst does not throttle
            you. DynamoDB is so the dashboard does not scan CloudWatch.
            Optional S3 dumps are for debugging a bad payload — not a warehouse.
          </p>
        </div>
        <div className="card">
          <h4>If they ask what you personally owned</h4>
          <p>
            Collector contract, Lambda enrich, metric namespace and dimensions,
            alarm hysteresis, the nested CFn and the IAM/VPCE fight. I did not
            build a multi-account landing zone and I did not run a 24/7 NOC.
          </p>
        </div>
      </div>

      <div className="script" style={{ marginTop: 14 }}>
        {`If I draw this on a whiteboard I draw the arrows first:

shelves → collector → (VPN + STS + VPCE) → API Gateway → SQS → Lambda
                                                              ↘ CloudWatch → dashboard
                                                              ↘ CloudWatch → alarms
                                                              ↘ DynamoDB (latest health)
                                                              ↘ S3 (optional JSON dumps)

The design calls I will defend: no public CW endpoint, no metric-name-per-serial, heartbeat alarm over flapping power.`}
      </div>
    </section>
  );
}
