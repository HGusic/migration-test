export const role = {
  title: "Member of Technical Staff, Forward Deployed",
  company: "Profound",
  locations: ["New York, NY", "San Francisco, CA"],
  comp: "$175k–$260k base + equity",
  posting:
    "https://www.tryprofound.com/careers/b076c997-0ba3-4d3c-9dc9-ad0b3ed49b05",
  callShape: [
    {
      t: "0–2",
      what: "Rapport. Recruiter or hiring-side intro. Do not dump your resume yet.",
    },
    {
      t: "2–6",
      what: "Tell me about yourself + why Profound / why FDE / NYC or SF. This is the first filter.",
    },
    {
      t: "6–18",
      what: "Resume walk. They will pick 2–3 bullets. They will poke at scope, customers, and metrics.",
    },
    {
      t: "18–20",
      what: "One sharp question from you. Save the rest for after coding if time dies.",
    },
    {
      t: "20–30",
      what: "Screen-share coding in your IDE. Not LeetCode. Practical. Narrate. Ship something that runs.",
    },
  ],
};

export const companyCards = [
  {
    title: "What they sell",
    body: "Profound is the marketing platform for AI search. Brands use it to see, measure, and influence how ChatGPT, Perplexity, Gemini, Claude, Copilot, Grok, and Google AI Overviews talk about them. The category name is AEO — Answer Engine Optimization — the SEO of the zero-click world.",
  },
  {
    title: "Why it exists",
    body: "Search is no longer ten blue links. People ask an answer engine and take the recommendation. If Walmart or Ramp is not in that answer, they lose the customer before a website visit happens. Profound turns that black box into a dashboard, then into agents that write and publish the content that wins citations.",
  },
  {
    title: "Company facts to sound current",
    body: "Founded mid-2024 in New York by CEO James Cadwallader and CTO Dylan Babbs (ex Uber Maps). Legal entity: Cooper Square Technologies. $96M Series C in Feb 2026 led by Lightspeed at a $1B valuation. Backers also include Sequoia, Kleiner Perkins, Khosla / LSVP. Job post: 0→$1B in 18 months, revenue 100x last year, 15% of the Fortune 500 (Walmart, Wayfair, U.S. Bank, Ramp, MongoDB, Figma). On-site NYC or SF. Visa sponsorship available.",
  },
];

export const products = [
  {
    name: "Prompt Volumes",
    point:
      "Demand data: what millions of people actually ask AI. Used to pick which prompts a brand should win.",
  },
  {
    name: "Answer Engine Insights",
    point:
      "Visibility, share of voice, sentiment, citations, competitor gaps across engines and regions.",
  },
  {
    name: "Agent Analytics",
    point:
      "How ChatGPT / Gemini / Claude / Perplexity crawl a site. Server-log based, not a JS snippet. Technical SEO for AI crawlers.",
  },
  {
    name: "Agents",
    point:
      "Workflows that research, draft, and publish AEO content into a CMS. Drag-and-drop builder plus templates. Human-in-the-loop.",
  },
  {
    name: "Aim / Shopping",
    point:
      "Prioritize weekly work. Shopping tracks product tiles and merchant relationships inside ChatGPT Shopping.",
  },
];

export const fdeJob = [
  "You are not support and not a solutions consultant who only decks. You write production TypeScript / Python / Next.js.",
  "You sit with Fortune 500 teams, hear a messy need, and turn it into an integration, pipeline, dashboard, or POC.",
  "You debug across their infra and Profound’s. You present to CTOs and also to marketers who do not want to hear about Kafka.",
  "You feed patterns back to Product so the tenth customer does not need a one-off.",
  "The money motion: a sharp POC can unlock a multi-million contract. Speed plus taste plus trust.",
];

export const vocab = [
  ["AEO / GEO", "Answer / Generative Engine Optimization. Citations and sentiment inside AI answers, not blue-link rank."],
  ["Share of voice", "How often the brand appears vs competitors for a prompt set."],
  ["Citation", "The URL an answer engine names as a source. This is the new backlink."],
  ["Prompt set", "The questions a brand cares about: category, comparison, branded, commercial."],
  ["AI crawler", "Bots (GPTBot, ClaudeBot, PerplexityBot) that fetch pages used as training or retrieval sources."],
  ["Closed loop", "See a gap in AEI → Agent writes content → publish → AEI shows whether citations moved."],
  ["Forward deployed", "Engineer embedded with the customer. Own the outcome, not a ticket queue."],
  ["Hypertable / cagg", "Timescale: time-partitioned events table + incremental rollup the dashboard reads. See the Postgres practice page."],
];

export const match = {
  strong: [
    "4 years on production systems at a large enterprise vendor (Fujitsu). That is closer to FDE than a CRUD startup.",
    "Integrations as a habit: Bitbucket, Confluence, Jira, Jenkins, GitLab, Robot, AWS, CloudFormation.",
    "POC → adoption motion with Windsurf / MCP. That is the FDE loop: prove it, then make it reusable.",
    "Enterprise constraints: FIPS, HIT, hardware memory, control-plane reliability. You already speak security and scale.",
    "You have stood in front of senior stakeholders (Head of Global Development reviews) and shipped on a calendar.",
    "Python + AWS + REST + CI/CD are on the JD. You have those for real.",
    "Customer-adjacent product work: operational status used in AT&T / Uber deployments of the Transponder product.",
  ],
  weak: [
    "TypeScript, React, Next.js are listed as strong requirements. Your resume says JavaScript. Treat this as the #1 technical risk on a 10-minute screen-share.",
    "PostgreSQL and time-series databases are named. Do not claim Timescale production. Use the Postgres / Timescale practice page: hypertables, compression, caggs, UNIQUE-must-include-time, then map it to the AWS telemetry work.",
    "Direct F500 customer-facing ownership is thinner than the JD. Do not pretend you ran the AT&T account. Translate: you built the thing the account needed.",
    "AEO / marketing domain is new. Fluency tomorrow comes from this page, not from faking a CMO past.",
    "On-site NYC or SF. You are in McKinney, TX. Have a one-sentence relocation answer. No waffle.",
    "Rust is a plus only. Do not volunteer it.",
  ],
};

export const scripts = {
  aboutYou: `I'm a software engineer with about four years at Fujitsu on production optical-transport software — the kind of systems where a bad release is a customer-facing outage, not a visual bug.

Two threads in my work. First, I ship platform software under enterprise constraints: CI/CD, compliance, hardware limits, operational visibility. Second, over the last year and a half I went deep on AI-assisted engineering — POCs, MCP integrations, agentic workflows — and pushed those into real tools our teams already used: Jira, Confluence, Bitbucket, Jenkins.

I'm interested in Profound's FDE role because it's the customer-facing version of what I already like doing: sit with a hard problem, write the integration, and own whether it actually works. I'm ready to be in the NYC or SF office.`,

  whyProfound: `AI search is eating the discovery layer that SEO used to own. Profound is one of the few companies that already has Fortune 500 distribution, a real product loop — measure, then act with Agents — and the capital to stay category-defining. I don't want to watch that shift from a telecom backlog. I want to be in the room where Walmart or Ramp decides whether the platform is in their stack, and I want to be the person who makes the integration true.`,

  whyFde: `I like writing production code, but I get more energy when the code is attached to a named customer outcome. At Fujitsu the closest version of that was features that shipped into carrier deployments, plus internal platforms I had to get other teams to actually adopt. FDE is that job with the volume turned up: enterprise integrations, POCs, exec conversations, then feeding the pattern back to product. That's the seat I want, not a pure backend lane and not a solutions role that doesn't ship.`,

  relocate: `Default — pick NYC unless you truly want SF:

I'm based in McKinney now and I'm relocating for this role. NYC is my preference — the FDE book of business is Fortune 500 and finance-heavy, and I want to be in that office. I can start on-site. I am not asking for remote.

SF version if that is where the team sits:

I'm based in McKinney now and I'm relocating on-site. SF is fine if that's the team I join — I care more about sitting with the FDEs than which coast. I can start on-site. I am not asking for remote.`,

  leaving: `Use one. Do not mix them on the call.

A — cycle ended, then a targeted search (cleanest if the role actually ended):
The SDE III role wrapped in June 2026 when the Transponder / platform cycle I was on closed out. I used July to finish the AWS Solutions Architect Associate and look specifically at customer-facing AI platform roles. Profound is that search, not a spray of applications.

B — you chose to leave (only if you resigned):
I left because I want closer proximity to customers and to AI product work than a network-equipment org can offer. Fujitsu was a strong production education. The next seat I want is FDE — code plus a named customer outcome.

C — if they ask "why a gap?":
There isn't a fuzzy gap. I left in June, sat the AWS cert in July, and I have been interviewing for this shape of role. I built a React/TypeScript prep desk this week because the JD asks for that stack and I will not fake four years of Next.js.

Never: trash Fujitsu. Never: "I was bored." Never: "seeking new challenges."`,

  tsGap: `I won't oversell this. My production languages have been Python, C++, and JavaScript. I have not been a Next.js owner on a customer-facing web app. I am ramping TypeScript and React deliberately — including building tools in this stack — and I learn frameworks fast. What I already have is the harder FDE muscle: production judgment, integrations, enterprise constraints, and explaining tradeoffs to non-engineers. For a ten-minute exercise I will write clean, typed, running code and say what I would harden next.`,
};

export const questionsToAsk = [
  {
    q: "What does a successful first 90 days look like for an FDE on a Fortune 500 account?",
    why: "Shows you think in outcomes, not onboarding perks. Example spoken: 'I want to know what \"this person is working\" means — a live integration, a POC that converted, a reusable pattern. What does that look like here at day 90?'",
  },
  {
    q: "When a client needs something that is not in the product yet, how do you decide one-off integration vs productizing it?",
    why: "The actual FDE tension. Example spoken: 'At Fujitsu I kept hitting the same quality gate on every train, so I templated it. Here, when Walmart wants a custom warehouse sync, what is the rule for ship-the-one-off vs this-becomes-a-connector?'",
  },
  {
    q: "What does the 10-minute exercise usually look like, and what do you weight — correctness, communication, or product sense?",
    why: "Only before they explain it. Example spoken: 'I want to show up with the right editor — is it usually a small data transform, a UI slice, or an API glue problem?' If they already described it, do not ask this.",
  },
  {
    q: "How split is the role between writing product code, being on-site/on-call with customers, and internal enablement?",
    why: "Example spoken: 'I like writing production code and I like the customer room. What does a normal week look like — three client calls and a PR, or mostly core product with the occasional onsite?'",
  },
  {
    q: "Which integration patterns keep showing up — warehouses, CDNs, CMS, SSO, prompt data into BI?",
    why: "Lets you map AWS / pipelines. Example spoken: 'If I walked into a bank tomorrow, is the first ask usually SSO + Snowflake, or CMS publish from Agents, or crawler logs into Agent Analytics? I want to know which integration I should already have a picture for.'",
  },
];

export const codingPrep = {
  likely: [
    "Transform messy JSON (prompt → engine → citation) into a clean structure and print or render it.",
    "Small TypeScript or Python function: merge two client configs, dedupe, handle missing fields.",
    "Tiny React UI: filter a list of brand mentions by engine or sentiment. They said share your IDE — a running page beats a perfect algorithm.",
    "A thin REST client: fetch, retry once, map errors into something a non-engineer could read.",
    "A data rollup: given events, compute share of voice per brand. Hash maps, not graphs.",
  ],
  rules: [
    "Clarify the user and the output first. 45 seconds. 'Is this a CLI, a function, or a component? What's the failure case?'",
    "Pick the language you are fastest in unless they specify TS. Python is allowed by the JD. If they hint UI, use TS/React.",
    "Talk while you type. Name the types. Write the happy path. Then one edge case.",
    "Do not chase an elegant architecture. A function that runs in 8 minutes beats a half-built class hierarchy.",
    "Leave a 60-second recap: what you shipped, what you would add for enterprise (auth, pagination, tests, idempotency).",
  ],
  drill: `// 8-minute drill. Practice out loud tonight.

type Citation = {
  engine: "chatgpt" | "perplexity" | "gemini" | "claude";
  brand: string;
  url: string;
  sentiment: "pos" | "neu" | "neg";
};

type Row = { brand: string; mentions: number; share: number };

export function shareOfVoice(rows: Citation[]): Row[] {
  const counts = new Map<string, number>();
  for (const row of rows) {
    counts.set(row.brand, (counts.get(row.brand) ?? 0) + 1);
  }
  const total = rows.length || 1;
  return [...counts.entries()]
    .map(([brand, mentions]) => ({
      brand,
      mentions,
      share: mentions / total,
    }))
    .sort((a, b) => b.mentions - a.mentions);
}

// Then add: filter by engine, ignore empty brand, group by engine.
// Narrate: "FDE version of this becomes a dashboard tile for a CMO."`,
  pythonDrill: `# Same drill in Python if you freeze in TS.

from collections import Counter

def share_of_voice(rows):
    brands = [r["brand"] for r in rows if r.get("brand")]
    total = len(brands) or 1
    return [
        {"brand": brand, "mentions": n, "share": n / total}
        for brand, n in Counter(brands).most_common()
    ]`,
};

export const nightBefore = [
  {
    fact: "Leave story + relocate — one sentence each, out loud",
    examples: [
      "Leave: 'The Transponder cycle closed in June. I finished AWS SAA in July and I am looking at customer-facing AI platform roles.' Relocate: 'McKinney now, NYC on-site, not asking for remote.'",
    ],
  },
  {
    fact: "Pick TWO A-stories. Do not recite all eight.",
    examples: [
      "A-story 1: Windsurf / MCP — POC to real toolchain, FDE-shaped. A-story 2: AT&T/Uber ops-status — customer-visible feature, logos handled carefully. Backup: AWS monitoring if they go cloud, or FIPS if they go enterprise security.",
    ],
  },
  {
    fact: "Every metric — honest scope or drop it",
    examples: [
      "10 engineers = contributors on the workstream, I was tech lead. 1M LOC = representation surface including generated, not my commits. Company-wide = two or three teams. 30% = HIT on Transponder trains, or drop it. Doubled = ~40 to ~85 Robot cases on my suite. System-wide = shelf/port, not the planet.",
    ],
  },
  {
    fact: "IDE + share-screen ready",
    examples: [
      "Empty ~/interview/soe.ts and ~/interview/soe.py already open in Cursor. Notifications off. Share the editor window, not the whole desktop. No OS updates.",
    ],
  },
  {
    fact: "Run the share-of-voice drill twice, narrating, 8 minutes",
    examples: [
      "Out loud: 'I'm grouping by brand, ignoring empty, sorting by mentions. FDE version is a CMO tile. Next I would filter by engine and persist a daily rollup.' Then add the filter. Stop.",
    ],
  },
  {
    fact: "Product names once more",
    examples: [
      "Prompt Volumes = what people ask. Answer Engine Insights = how AI talks about the brand. Agent Analytics = how bots crawl you. Agents = write/publish the content. Aim / Shopping = prioritize, then ChatGPT product tiles.",
    ],
  },
  {
    fact: "Three questions, water, camera, resume closed",
    examples: [
      "Ask: 90-day success on an F500 account. Ask: one-off vs productize. Ask: warehouse / CMS / SSO patterns you keep seeing. Do not ask what the coding exercise is after they already explained it.",
    ],
  },
];

export const competitors =
  "Category: Goodie, Bluefish, Peec, Otterly, Daydream. Scrunch was acquired by Sitecore in June 2026. Incumbent SEO suites (Semrush, Ahrefs) are bolting on AI visibility. Profound's pitch is enterprise completeness plus Agents that close the loop, plus F500 logos. If asked 'why not Semrush,' say: monitoring is not the product; the product is becoming the system of action for how a brand shows up in answers, with enterprise security (SOC 2, SSO, RBAC) and people who will integrate it into the customer's warehouse and CMS.";
