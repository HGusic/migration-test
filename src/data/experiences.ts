export type Stretch = {
  claim: string;
  probe: string;
  safer: string;
};

export type Qa = {
  q: string;
  a: string;
};

export type Experience = {
  slug: string;
  num: string;
  short: string;
  nav: string;
  role: string;
  dates: string;
  resume: string;
  likelyStretch: Stretch[];
  realCore: string[];
  fde: { need: string; angle: string }[];
  talk90: string;
  talkDeep: string;
  ifPressed: string;
  questions: Qa[];
  swap: { drop: string; say: string }[];
  lockIn: { fact: string; examples: string[] }[];
};

export const experiences: Experience[] = [
  {
    slug: "ai-mcp-adoption",
    num: "01",
    short: "AI POCs, Windsurf, MCP",
    nav: "Windsurf / MCP adoption",
    role: "Fujitsu · SDE III",
    dates: "Jan 2025 – Jun 2026",
    resume:
      "Advanced AI research and development through targeted POCs, driving company-wide adoption of the Windsurf Skills Tool, Agentic Coding, and MCP integrations across Bitbucket, Confluence, Jira, and Jenkins CI/CD pipelines.",
    likelyStretch: [
      {
        claim: "Company-wide adoption",
        probe: "How many teams, who mandated it, what did adoption mean, and what was your authority?",
        safer:
          "I ran POCs, then built the integrations and how-to that Transponder software, platform, and CI actually used — call it a couple of teams, not a corporate mandate.",
      },
      {
        claim: "Advanced AI research and development",
        probe: "This sounds like a research lab. What was the hypothesis, the eval, the paper, the model?",
        safer:
          "Applied R&D: can agentic coding and MCP servers reduce toil in our existing SDLC? The output was working integrations and a repeatable workflow, not a published model.",
      },
      {
        claim: "MCP integrations across four systems",
        probe: "Did you write four MCP servers, wrap existing ones, or configure Windsurf skills?",
        safer:
          "Be exact. Example: 'I configured Atlassian MCP for Jira and Confluence. I wrote a thin Jenkins MCP for logs and last-build. Bitbucket was configured, not written.'",
      },
    ],
    realCore: [
      "You took a new AI coding stack and made it useful inside a conservative enterprise toolchain.",
      "You thought in integrations, not demos: the value was Jira / Confluence / Bitbucket / Jenkins, not a chat window.",
      "You had to sell other engineers on changing how they work. That is FDE change-management.",
      "You can talk about tools, permissions, secrets, and CI — the unsexy parts that make POCs survive.",
    ],
    fde: [
      {
        need: "Lead enterprise POCs that unlock contracts",
        angle:
          "Same motion: small proof, then wire it into the customer's real systems so it is not a slide.",
      },
      {
        need: "Build reusable integration patterns",
        angle:
          "MCP + skills is a reusable pattern. Profound will want the same for CMS, warehouses, SSO, CDNs.",
      },
      {
        need: "Translate AI capability for non-research stakeholders",
        angle:
          "You already explained agentic coding to platform and CI people. FDE version is CMOs and client CTOs.",
      },
      {
        need: "Contribute field insight back to product",
        angle:
          "What broke in Jira/Jenkins wiring is the kind of note Profound Product wants from FDEs after week two.",
      },
    ],
    talk90: `Last year I ran a set of POCs on agentic coding — specifically Windsurf skills and MCP — because our teams were drowning in context-switching across Jira, Confluence, Bitbucket, and Jenkins.

The question wasn't "is the model smart." It was "can an engineer, from the IDE, pull a ticket, the runbook, the failing job, and the right repo without four browser tabs."

I built and configured the MCP connections, wrote the skills so the agent used our house conventions, and walked teams through it. Adoption happened because it saved time on real work, not because I declared it company-wide.

That's the FDE muscle I want to use at Profound: take a platform capability and make it true inside a customer's existing stack.`,
    talkDeep: `Start with the pain: Fujitsu platform work lives across ticket systems, wikis, repos, and CI. An AI IDE that cannot see those systems just hallucinates from the open file.

I treated MCP as an integration problem. For each system I asked: auth model, what data is safe to expose, what's a useful tool vs a dangerous one (you do not let an agent re-trigger prod jobs casually), and how we keep an audit trail.

I used short POCs — one workflow each, like "explain this failed Jenkins job using the Confluence runbook" — then packaged what worked as skills other people could copy.

If they ask what I learned about agents: tool design matters more than the model. Bad tool schemas make confident wrong actions. Same lesson Profound Agents will hit when they publish to a customer's CMS.`,
    ifPressed: `If they say "company-wide is a big word": agree. "Fair — I mean it spread beyond my team into the groups I enabled. I can tell you exactly who used it and for what. I was not the CIO rolling out a standard."

If they ask for a metric you don't have: "I didn't instrument a formal adoption dashboard. What I watched was people copying the skill folder and asking for Jenkins log access. I would instrument it if I did this again."`,
    questions: [
      {
        q: "Walk me through one MCP server you actually built.",
        a: "Example: Jira tools were get_issue, search, add_comment. Auth was a scoped bot token, one project. Failure I hit: Confluence storage is HTML / ADF, not markdown, so the agent summarized garbage until I stripped macros. Jenkins: crumb tokens and I refused trigger rights. If you only configured a community server, say that and talk about the skill allowlist. Do not invent a server you didn't write.",
      },
      {
        q: "How did you keep the agent from doing something unsafe in Jenkins?",
        a: "This is a gift. Talk allowlists, read-only tools first, environment scoping, human approval for deploys, and logging. FDE interviewers love safety around automation.",
      },
      {
        q: "Why Windsurf vs Cursor vs Copilot?",
        a: "Don't trash tools. Example: 'We standardized on Windsurf because skills + MCP were the path I could actually ship to other teams. I also use Cursor. The interesting part is the workflow, not the logo.' Your resume lists all three — power user is fine, 'I drove adoption of all of them' is not.",
      },
      {
        q: "What would you build in week one for a Profound customer who wants Agents hooked to Confluence and Jira?",
        a: "Map their auth (SSO, least privilege), start read-only: fetch a content brief from Jira, pull brand voice from Confluence, draft in Agents, human approve, then write-back. Don't start with auto-publish.",
      },
      {
        q: "This sounds like you just installed a coding assistant.",
        a: "Separate the layers: (1) IDE assistant, (2) skills that encode our process, (3) MCP that connects systems of record, (4) enablement so other teams could copy it. The last three are the job.",
      },
    ],
    swap: [
      {
        drop: "I drove company-wide adoption of AI.",
        say: "I ran POCs and integrations that teams outside mine started using because they were useful.",
      },
      {
        drop: "I did AI research.",
        say: "I did applied POCs on agentic workflows and MCP integrations in our SDLC.",
      },
      {
        drop: "I built MCP for Bitbucket, Confluence, Jira, and Jenkins.",
        say: "I connected those four. I wrote Jenkins logs MCP. I configured Jira, Confluence, and Bitbucket. Let me be specific.",
      },
    ],
    lockIn: [
      {
        fact: "Which MCP pieces did you author vs configure?",
        examples: [
          "I configured the official Atlassian MCP for Jira and Confluence — get_issue, search, add_comment, get_page. I wrote a thin Jenkins MCP myself: list_jobs, get_last_build, get_console. Bitbucket was configured, not written — list PRs and get diff. I will not say I 'built MCP for four systems' if three were config.",
          "If you wrote none: I did not write MCP servers from scratch. I wired Windsurf skills to existing servers, set the tool allowlist, and wrote the prompts so the agent used our ticket and repo conventions.",
        ],
      },
      {
        fact: "How many teams, roughly, actually used it weekly?",
        examples: [
          "Transponder software, platform, and the CI group — call it 15–20 people, not Fujitsu-the-company. I know it stuck because they kept asking for Jenkins log access and copying the skill folder, not because I had an adoption dashboard.",
          "If smaller: my team of six plus two people on the adjacent platform squad. That is not company-wide. It is 'it escaped the POC.'",
        ],
      },
      {
        fact: "One concrete before/after workflow",
        examples: [
          "Before: a red Jenkins job meant open Jenkins, hunt the console, open the Confluence runbook, open the Jira ticket, then guess. After: from the IDE the agent pulled the last failed console, the runbook section, and the ticket acceptance criteria in one shot. The win was context, not 'the model wrote the fix.'",
          "Before: a PR review started blind. After: the skill pulled the Jira AC and the last HIT failure linked on the ticket so the review actually knew what 'done' meant.",
        ],
      },
      {
        fact: "One security or permission issue you had to solve",
        examples: [
          "Jenkins crumbs and job-trigger rights. I refused to give the agent buildWithParameters on prod trains. Read-only logs first. If someone wanted 'just rerun the job,' that stayed a human click.",
          "Atlassian tokens in the IDE. We scoped a bot user to one Jira project and Confluence space instead of a personal admin token sitting in a Windsurf config.",
        ],
      },
      {
        fact: "Who you had to convince",
        examples: [
          "My manager, who wanted a written POC, and the platform lead, who did not want secrets in an AI IDE. I showed a read-only demo on a failed job, then the allowlist. Adoption followed the demo, not a mandate.",
          "If security was in the room: I had to explain MCP is just an HTTP tool boundary. We treated it like any other service account — least privilege, audit the prompts later.",
        ],
      },
    ],
  },
  {
    slug: "transponder-dds",
    num: "02",
    short: "Transponder scale, team of 10, 1M LOC",
    nav: "Transponder / 1M LOC",
    role: "Fujitsu · SDE III",
    dates: "Jan 2025 – Jun 2026",
    resume:
      "Scaled Transponder product topologies by leading a team of 10 engineers in eliminating hardware memory constraints through OpenSlice’s Distributed Data System, leveraging Windsurf and advanced prompt engineering to modernize and refactor over 1 million lines of platform data representations.",
    likelyStretch: [
      {
        claim: "Leading a team of 10",
        probe: "Were you their manager? Tech lead? Coordinator? One of three leads?",
        safer:
          "I was the technical lead on this workstream. About 10 engineers touched it. I owned the target data model, the on-box vs DDS split, and reviews. I did not do hire-fire. If you were one of several leads, say so.",
      },
      {
        claim: "Over 1 million lines",
        probe: "Did you personally rewrite a million lines? Is that generated code, vendor code, copies of schemas?",
        safer:
          "The platform data representations we had to modernize spanned on the order of a million lines, including generated and legacy forms. I led the approach and personally owned the schema + the modules on the hot path. Windsurf accelerated mechanical rewrites. I am not claiming I hand-typed a million lines.",
      },
      {
        claim: "Eliminating hardware memory constraints",
        probe: "What was the limit, what was the before/after RSS, did it actually ship?",
        safer:
          "Devices ran out of memory as topologies grew because too much of the model lived on-box. We moved topology inventory and historical PM into OpenSlice DDS so the box kept live oper / control state. Result: the lab topologies that used to OOM could load. I will not invent a GB figure.",
      },
      {
        claim: "Advanced prompt engineering",
        probe: "This can sound like buzzword stuffing next to a systems story.",
        safer:
          "Mention it as a tactic, not the hero. 'We used Windsurf to mechanically migrate repetitive data representations once the new schema was designed.' Design first, prompts second.",
      },
    ],
    realCore: [
      "A real systems problem: scale of topology vs memory on network hardware.",
      "A real architecture move: local vs distributed state (OpenSlice DDS).",
      "You coordinated multiple engineers on a dangerous refactor.",
      "You used AI to speed a large mechanical change — that is current, not embarrassing, if the design was yours.",
    ],
    fde: [
      {
        need: "Architect for enterprise-scale data volumes",
        angle:
          "You already made a locality vs consistency vs memory call. Profound clients will have huge prompt/citation corpora. Same instinct: what must be hot, what can be derived, what is too big to copy.",
      },
      {
        need: "Modernize messy customer systems without boiling the ocean",
        angle:
          "A million-line data model is the emotional equivalent of a customer's 12-year warehouse. You sequence the migration.",
      },
      {
        need: "Lead client engineering conversations",
        angle:
          "Explain DDS the way you would explain a warehouse sync to a client architect: what moves, what stays, what breaks if the link drops.",
      },
    ],
    talk90: `Transponder topologies were growing faster than the on-box memory model. We were hitting hardware limits — not a cloud knobs problem, an actual device constraint.

I led the technical workstream to stop treating all platform data representations as if they had to live in local memory. We used OpenSlice's Distributed Data System so the box kept what it needed for the live path and the rest of the model could live off the tight memory budget.

About ten engineers touched the work. I owned the approach and the risky data-model changes. We used Windsurf to grind through the mechanical representation updates once the design was set — the volume of those representations is on the order of a million lines, which is why a manual rewrite was not realistic.

The FDE version of this is: a customer has more data than their current integration pattern can hold, and you redesign what is computed, stored, and synced.`,
    talkDeep: `Frame it as a data-locality problem.

On-box: time-critical operational state, what forwarding / control needs in the moment.
Distributed: bulky topology / inventory / representation data that was drowning RAM.

Risks you should be ready to name: consistency if a node misses an update, startup hydration, schema migration, rollback if a representation is wrong, test strategy for a change that large.

Your role: I want you to say 'I designed / I proposed / I reviewed' only for the parts that are true. 'I used Windsurf to apply the mechanical edits after we froze the schema' is a strong, modern, honest sentence.

If they don't know OpenSlice: 'Think of it as a distributed in-memory / data fabric for the platform so we are not stuffing the entire model into each device's RAM.'`,
    ifPressed: `On 'team of 10': "I was not the people manager of ten direct reports. I was the technical lead. Headcount that executed against the plan was about ten."

On '1 million lines': "That's the size of the representation surface, not my personal commit count. Happy to talk about the modules I owned and how we kept the refactor from breaking control."

On Windsurf: "AI did not invent the architecture. It made a tedious, high-volume transformation tractable after humans designed the target."`,
    questions: [
      {
        q: "What is OpenSlice DDS, in one minute?",
        a: "Distributed data layer used in the platform so nodes share state instead of each holding a full copy. You care about what is published, who subscribes, durability, and what happens on partition. If your actual use was thinner, stay thinner.",
      },
      {
        q: "How did you know memory was the constraint?",
        a: "Have the evidence: OOM, crash dumps, top/RSS, a topology size that failed, a lab reproduction. 'We thought it was memory' is weak. 'We watched RSS grow with topology size and hit the platform ceiling at X' is strong.",
      },
      {
        q: "How do you refactor a huge surface without a flag day?",
        a: "Strangler, dual-write, compatibility shims, module-by-module, contract tests. Pick what you actually did. This maps cleanly to migrating a customer off a brittle integration.",
      },
      {
        q: "Did AI introduce bugs in the rewrite?",
        a: "Yes is a better answer than no, if true. Talk review, compile, golden tests, and a case where the model renamed something incorrectly. Shows judgment.",
      },
      {
        q: "Why should a marketing-platform company care about optical transponders?",
        a: "They shouldn't, except as proof you have done scale, data modeling, and multi-person delivery under a hard constraint. Then pivot to citations / event volume / warehouse sync.",
      },
    ],
    swap: [
      {
        drop: "I led a team of 10 engineers.",
        say: "I was technical lead on a workstream that about 10 engineers contributed to. I owned the data model and the on-box vs DDS split.",
      },
      {
        drop: "I refactored 1 million lines.",
        say: "We modernized a representation surface on the order of a million lines. I led the design and the modules I owned; AI helped with mechanical edits.",
      },
      {
        drop: "I eliminated memory constraints.",
        say: "We removed the specific on-box memory ceiling that was blocking larger topologies, by moving inventory and historical PM into DDS.",
      },
    ],
    lockIn: [
      {
        fact: "Your exact role vs the other 9 people",
        examples: [
          "I was technical lead, not the people manager. About ten engineers touched it: a few on DDS plumbing, a few on the representation / codegen surface, others on test and platform. I owned the target data model, the what-stays-on-box decision, and reviews of the risky modules. I did not write every file and I did not do their perf reviews.",
          "If you were one of two leads: I owned the data-representation side. Another lead owned the DDS runtime. We split at the publish/subscribe contract.",
        ],
      },
      {
        fact: "Which state moved off-box, which stayed",
        examples: [
          "Stayed on-box: live operational state the control loop needs — current interface admin/oper, what is actually carrying traffic. Moved into OpenSlice DDS: bulky topology inventory, historical PM, catalogs of interfaces that were not in the hot path. If the fabric blipped, the box still forwarded; it just could not answer a huge inventory query from RAM.",
          "Shorter: we stopped stuffing the entire topology model into each device's control-process heap. Hot path local, inventory distributed.",
        ],
      },
      {
        fact: "A number you can defend — or no number",
        examples: [
          "The honest number I will use: the control process was hitting the platform memory ceiling on large topologies, and after the split we could load the topologies that used to OOM in lab. I will not invent a gigabyte figure I cannot show.",
          "If you remember a figure: we were seeing the control process in the multi-GB range on big topologies and we needed that headroom back. The 'million lines' is the size of the representation surface, including generated code — not my personal commit count.",
          "If no number survives: I will drop the metric and say we removed a hard on-box ceiling that was blocking larger topologies.",
        ],
      },
      {
        fact: "One migration / rollback story",
        examples: [
          "We did not flag-day it. Dual-read: serve from the local cache if DDS was empty, publish into DDS in the background, then cut readers over module by module. Rollback was 'read local again' plus the previous image — not a heroic data rewrite on the box.",
          "One ugly one: a representation version mismatch meant a subscriber ignored an update. We pinned a schema version on the topic and added a contract test so Windsurf could not silently rename a field.",
        ],
      },
      {
        fact: "How you validated the Windsurf edits",
        examples: [
          "Windsurf did the mechanical serializer / representation updates after we froze the schema. Humans designed the target. Validation was compile, the existing platform suite, plus a handful of golden topology files. The model once renamed a field and the contract test failed — that is why I will not say 'AI refactored a million lines unsupervised.'",
        ],
      },
    ],
  },
  {
    slug: "att-uber-ops",
    num: "03",
    short: "AT&T / Uber operational status",
    nav: "AT&T · Uber ops status",
    role: "Fujitsu · SDE III",
    dates: "Jan 2025 – Jun 2026",
    resume:
      "Improved customer insight into traffic-carrying capacity and network utilization through successful transponder deployments with AT&T and Uber by architecting a real-time operational-status feature for all supported fiber-optic transport interfaces.",
    likelyStretch: [
      {
        claim: "Deployments with AT&T and Uber",
        probe: "Did you sit with AT&T? Own the account? Fly to the site? Or did the product you work on get deployed there?",
        safer:
          "AT&T and Uber were customers of the Transponder product. I built the operational-status feature that shipped in those releases / trains. I was not the account owner and I did not run the customer engagement.",
      },
      {
        claim: "Architecting",
        probe: "Did you write the design, or implement against someone else's design?",
        safer:
          "Use architect only if you chose the data model, update path, and interface coverage. Otherwise: 'I designed the common status model and implemented the OTN / ZR / 400GE adapters. Another engineer took the leftover 100GE family.'",
      },
      {
        claim: "All supported fiber-optic transport interfaces",
        probe: "List them. If you cannot, 'all' will collapse.",
        safer:
          "Name the families you actually covered (e.g. OTN / Ethernet / specific SKUs). If a colleague did two interface types, say the split.",
      },
      {
        claim: "Real-time",
        probe: "Polling interval? Push? Streaming? How stale can it be?",
        safer:
          "Define it. Example: 'Operators saw status within about 5–15 seconds on the NMS / CLI path. It is operationally real-time, not a hard real-time control loop.'",
      },
    ],
    realCore: [
      "You built a customer-visible reliability / capacity feature, not an internal-only refactor.",
      "You had to model status across heterogeneous interfaces — a real abstraction problem.",
      "This is your best 'named logo' bullet. Treat the logos as context, not as personal relationships.",
      "Capacity and utilization are executive-friendly metrics. Practice saying them in business language.",
    ],
    fde: [
      {
        need: "Custom dashboards and reporting for executive stakeholders",
        angle:
          "Ops status is a dashboard problem: what does a NOC or a VP need to see, and what is noise.",
      },
      {
        need: "Debug issues spanning client infra and Profound",
        angle:
          "Status features die on bad telemetry, clock skew, and interface-specific quirks. You have that scar tissue.",
      },
      {
        need: "Talk to C-suite without drowning them",
        angle:
          "AT&T/Uber here means: the feature existed because customers needed to see traffic-carrying capacity. Profound analog: a CMO needs share of voice, not a crawler log.",
      },
      {
        need: "Enterprise proofs of concept",
        angle:
          "If this feature unblocked or de-risked a deployment, say that in one sentence. That is the POC → contract motion.",
      },
    ],
    talk90: `Carriers and large customers do not just want a transponder that works. They want to see, live, whether the thing is carrying traffic and how hard the network is being used.

I built a real-time operational-status feature across the fiber-optic interface types we support so operators could see capacity and utilization instead of inferring it from scattered alarms.

That feature shipped in Transponder releases that went to customers including AT&T and Uber. I want to be precise: I owned the feature, not the customer relationship.

The Profound version is the same shape — a Walmart or U.S. Bank stakeholder needs one trustworthy operational picture, and you are the person who makes the data honest.`,
    talkDeep: `Walk the data path: where status originates (firmware, driver, control plane), how you normalize it across interface types, where you store / stream it, who consumes it (CLI, NMS, UI), and how you avoid false greens.

Talk one ugly case: an interface that reports up while it cannot carry traffic. That is the 'visibility lie' problem. Profound has the same failure mode if a brand looks visible on one engine and you hide the ones where it is absent.

If you talked to field engineers or a customer engineer even once, say so. If you never did, do not invent a workshop. 'Product and account team brought the requirement; I translated it into the status model' is respectable.`,
    ifPressed: `If they lean on AT&T/Uber like you were embedded there: "I should be careful with that wording. Those are product customers. My contribution was the operational-status capability in the software that went out on those deployments."

If they ask who architected it and it was shared: "I owned the common status model and the OTN/ZR path. A teammate owned leftover Ethernet families. I can draw the boundary."`,
    questions: [
      {
        q: "What did 'operational status' actually include?",
        a: "Example: admin vs oper, traffic-carrying yes/no, client and line utilization, optical power, FEC / pre-FEC BER, alarms. 'Status' alone is mush. Name five fields and stop.",
      },
      {
        q: "How did you handle interfaces with different native models?",
        a: "Adapter per family, a common schema, unknown/degraded states instead of pretending every NIC looks like Ethernet. This is how you talk about normalizing citation data across engines too.",
      },
      {
        q: "Did you work with AT&T or Uber engineers?",
        a: "Truth only. If no: 'Not directly. Requirements came through product / account / field.' If you joined a bridge call, say that and what you learned. Do not upgrade a mailing list into a customer workshop.",
      },
      {
        q: "What does real-time mean here?",
        a: "Interval, push vs poll, backpressure, what you do when a collector dies. Then: 'For an exec dashboard I would rather be 15 seconds late and correct than instant and wrong.'",
      },
      {
        q: "Tell me about a time the status was wrong in the field.",
        a: "Example: after a protection switch, oper stayed green while the payload was not mapped — stale cache on that family. Fix: invalidate on switch events + a Robot case. FDE is mostly this story on someone else's infrastructure.",
      },
    ],
    swap: [
      {
        drop: "I deployed Transponder with AT&T and Uber.",
        say: "I built the operational-status feature used in Transponder deployments to customers including AT&T and Uber.",
      },
      {
        drop: "I was customer-facing with AT&T.",
        say: "I was customer-adjacent. I built what the account needed. I did not own the account.",
      },
      {
        drop: "I architected real-time status for all interfaces.",
        say: "I designed and implemented the status path for the interface families I can name, with a shared model.",
      },
    ],
    lockIn: [
      {
        fact: "Exact customer contact you actually had — none is allowed",
        examples: [
          "None. AT&T and Uber were Transponder customers. Requirements came through product and the account / field team. I built the feature. I did not fly to a NOC and I did not own the relationship.",
          "If you sat a bridge: I joined one customer-bridge as the software owner while field talked. I answered what the status fields meant and when they refresh. I still would not say 'I deployed with AT&T.'",
        ],
      },
      {
        fact: "The status fields and refresh path",
        examples: [
          "Fields I will name: admin vs oper state, whether the interface is traffic-carrying, client/line utilization, optical power, FEC / pre-FEC BER, and alarms. Path: firmware / driver counters → control-plane normalizer → a status object per interface → NMS / CLI / whatever the operator already used. Refresh was on the order of seconds, not a hard real-time control loop.",
          "Shorter: operators needed 'is it up, is it carrying, how hard is it working' without inferring from a pile of alarms. I normalized that across interface types.",
        ],
      },
      {
        fact: "Which interface families you personally covered",
        examples: [
          "I owned the shared status model and the OTN / 400ZR / 400GE paths. Older 100GE / leftover families were another engineer on the same design. I will not say 'all supported interfaces' if I cannot list the leftover ones.",
          "If you did the model only: I designed the common status schema. Per-family adapters were split across the team. I reviewed them. I implemented the OTN path.",
        ],
      },
      {
        fact: "One field bug",
        examples: [
          "Oper showed up after a protection switch while the payload was not actually mapped — a false green. Root cause was a stale cached oper state on that interface family. Fix: invalidate on switch events, add a Robot case for 'oper up only if the client is mapped.' That is the visibility-lie problem.",
          "Alternative: utilization sat at zero because we read the wrong counter on a new ZR variant. Lab caught it; we added the mapping and a sanity check that utilization is not silently zero when octets are incrementing.",
        ],
      },
      {
        fact: "Unblocked a deployment, or just shipped on those trains?",
        examples: [
          "It shipped in the Transponder releases those customers took. I will not claim I personally unlocked the AT&T contract. I will claim operators could see capacity and utilization instead of inferring it — that was the requirement product brought.",
          "If it really unblocked something: field said they would not turn up more wavelengths without live utilization. The feature de-risked that turn-up. Still not 'I closed AT&T.'",
        ],
      },
    ],
  },
  {
    slug: "aws-monitoring",
    num: "04",
    short: "AWS monitoring + CloudFormation",
    nav: "AWS monitoring",
    role: "Fujitsu · SDE III",
    dates: "Jan 2025 – Jun 2026",
    resume:
      "Built a scalable, production-grade AWS monitoring platform that delivered real-time visibility into Transponder hardware health and resource utilization. Developed reusable CloudFormation templates to enable rapid, consistent infrastructure deployment across multiple engineering teams.",
    likelyStretch: [
      {
        claim: "Platform",
        probe: "Is this CloudWatch plus a dashboard, or a multi-tenant internal product?",
        safer:
          "Describe the actual pieces: metrics in, storage, alerts, UI, IAM. If it is 'CloudWatch + custom exporters + CFn + a dashboard,' say that. Platform is fine if other teams self-served on your templates.",
      },
      {
        claim: "Production-grade / scalable",
        probe: "Scale numbers, SLOs, on-call, multi-account?",
        safer:
          "Give the real envelope. Example: one region, CloudWatch, 30–60s scrapes, retention of two weeks on high-res, Transponder lab + the teams on that stack. Drop 'scalable' if you cannot say vs what.",
      },
      {
        claim: "Multiple engineering teams",
        probe: "How many, did they really use the templates, or did you hope they would?",
        safer:
          "Name the teams or the count. 'I published templates; two teams adopted them' is better than 'enabled the organization.'",
      },
    ],
    realCore: [
      "You have AWS in production, which the JD explicitly prefers.",
      "You did IaC (CloudFormation). That is how FDEs stand up client-shaped environments repeatably.",
      "Hardware health + utilization is time-series thinking even if you didn't write 'Timescale' on the resume.",
      "Reusable templates = the JD line about reusable components for common integration patterns.",
    ],
    fde: [
      {
        need: "Comfort with cloud platforms, AWS preferred",
        angle:
          "This is your cleanest JD checkbox. Speak IAM, VPC, least privilege, and why CFn vs clicking the console.",
      },
      {
        need: "Data pipelines into BI / warehouses",
        angle:
          "Monitoring platforms are pipelines: collect, transform, store, alert, display. Same bones as pushing AEI data into a customer's Snowflake.",
      },
      {
        need: "Enterprise security requirements",
        angle:
          "Talk accounts, IAM roles, no long-lived keys, who can see hardware telemetry. Profound is SOC 2; customers will ask.",
      },
    ],
    talk90: `We needed a real picture of Transponder hardware health, not SSH-and-hope. These boxes are not EC2, so a CloudWatch agent was the wrong tool.

I built a collector on the lab side that scrapes every 30–60 seconds, assumes a role, and comes in over VPN to a private API. Lambda fans out to CloudWatch for the live tile and DynamoDB for latest-per-shelf. Optionally it dumps a JSON payload to S3 for debugging. Alarms go to SNS — missing heartbeat matters more than a flapping laser.

The CloudFormation is nested so platform could launch the same stack. A dashboard nobody else can reproduce is a demo.`,
    talkDeep: `Walk the diagram on this page, left to right.

Shelves are not EC2, so no CloudWatch agent. A Python collector on the lab jump host scrapes every 30–60 seconds and assumes an IAM role. VPN into a private VPC. Private HTTP API → SQS + DLQ → Lambda. Lambda fans out to CloudWatch Metrics for the live tile and DynamoDB for latest-per-shelf. Optional S3 PutObject for raw JSON dumps when we need to debug a bad payload. Alarms are composite: missing heartbeat beats a flapping laser. Nested CloudFormation: iam, network, ingest, observe.

SAA in July 2026 is vocabulary, not a substitute for this story. Well-Architected mapping if they ask: operational excellence = alarms + IaC, security = no long-lived keys + VPCE + KMS, cost = dimensions not metric-name-per-serial, reliability = SQS/DLQ, performance = DDB GetItem for the tile.

CFn because that was the org standard. I also know Terraform. This project was CloudFormation.`,
    ifPressed: `If 'platform' feels big: "It was an internal monitoring stack other teams could deploy from templates. It was not a billed multi-tenant SaaS."

If they ask scale and you don't have QPS: "I can tell you what we monitored — Transponder hardware health for the lab and the teams on that stack, on a 30–60 second scrape. I did not publish a public SLO sheet."`,
    questions: [
      {
        q: "What's in the CloudFormation templates?",
        a: "Walk the nested stacks on the diagram: iam (collector role, Lambda role, scoped PutMetricData / PutObject), network (VPC, subnets, VPN, interface endpoints), ingest (private HTTP API, SQS+DLQ, Lambda, DDB, optional S3 dumps), observe (dashboard, composite alarms, SNS). Parameters: ProductName, Namespace, HeartbeatSeconds. I started from AWS samples and hardened the IAM prefix and alarm hysteresis.",
      },
      {
        q: "How did you authenticate devices or collectors to AWS?",
        a: "Example: an on-prem / lab collector assumed an IAM role and talked to CloudWatch through a VPC interface endpoint so we were not shipping long-lived keys to the public endpoint. If yours was a locked IAM user on a box, say that — same idea, worse hygiene, and you can say what you would do next.",
      },
      {
        q: "Postgres or time-series?",
        a: "Example: I used CloudWatch, not Timescale. If I needed long-horizon analytics I would roll up into Postgres or a warehouse. For Profound's citation firehose I would reach for a hypertable + caggs — I have not owned that in production, I can design it.",
      },
      {
        q: "Tell me about a noisy alarm you had to fix.",
        a: "Example: a flapping optical power alarm that fired every time a lab laser blinked. We added hysteresis and a missing-heartbeat alarm that mattered more than the noisy one. Shows production taste.",
      },
      {
        q: "Why not just CloudWatch agent on everything?",
        a: "Example: the hardware is not an EC2 fleet. We needed a custom health model (shelf / interface / FEC) and a path that did not require installing a CloudWatch agent on a transponder. Cardinality and cost were the other reasons — we publish a small metric set with dimensions, not one metric name per serial number.",
      },
    ],
    swap: [
      {
        drop: "I built a scalable AWS monitoring platform.",
        say: "I built the AWS monitoring stack we used for Transponder health, and I made it reproducible with CloudFormation.",
      },
      {
        drop: "I enabled every engineering team.",
        say: "I wrote reusable templates. Transponder software and platform used them to stand up the same infra.",
      },
    ],
    lockIn: [
      {
        fact: "Exact AWS services in the path",
        examples: [
          "Commit to the diagram: lab collector → VPN → private APIGW → SQS → Lambda → CloudWatch + DynamoDB latest (+ optional S3 dumps). Alarms to SNS. Nested CFn. That is the stack I will draw. I will not add Firehose, Athena, or EKS on the whiteboard.",
        ],
      },
      {
        fact: "What 'real-time' meant (interval)",
        examples: [
          "Thirty to sixty second scrapes. Operators saw a stale-but-honest tile, not millisecond telemetry. I will say 'near real time' if they press, and I will not compare it to a trading feed.",
          "If slower: five-minute CloudWatch period. Fine for hardware health. I would not call that real-time in a Profound dashboard conversation without saying so.",
        ],
      },
      {
        fact: "How many teams launched the stack",
        examples: [
          "Two: Transponder software and platform. I published the templates. A third team asked for the folder. That is 'reusable,' not 'the company.'",
          "If only yours: my team ran it. I wrote CloudFormation so we were not clicking the console. I will not say multiple teams if nobody else launched it.",
        ],
      },
      {
        fact: "One IAM or networking pain",
        examples: [
          "We did not want long-lived keys on a box talking to the public CloudWatch endpoint. I moved the path onto a VPC interface endpoint and an IAM role the collector assumed. Pain was the endpoint policy and figuring out which service names we actually needed.",
          "Alternative: first template left CloudWatch PutMetricData too open. A teammate could publish under any namespace. I scoped the resource to our metric prefix.",
        ],
      },
      {
        fact: "One cost or cardinality lesson",
        examples: [
          "I almost made serial-number-plus-interface a unique metric name. That explodes cost and kills the dashboard. Dimensions on a small metric set — product, shelf, interface type — not a new metric per device.",
          "Retention: high-res raw in CloudWatch for two weeks, then we stopped paying to stare at it. The template defaulted a sane retention so the next team did not leave everything on 15 months.",
        ],
      },
    ],
  },
  {
    slug: "fips-140-3",
    num: "05",
    short: "FIPS 140-3, led 4 engineers",
    nav: "FIPS 140-3",
    role: "Fujitsu · SDE II",
    dates: "Aug 2022 – Jan 2025",
    resume:
      "Advanced FIPS 140-3 certification readiness for Fujitsu flagship products working with platform, hardware, open-source, and government compliance teams, and directly led 4 engineers to architect compliant cyber security capabilities across platform and control-plane layers.",
    likelyStretch: [
      {
        claim: "Certification readiness",
        probe: "Did you get certified, or prep? FIPS 140-3 is a lab process. What was the artifact?",
        safer:
          "We were driving readiness: crypto module boundary, approved algorithms, key handling, documentation, closing gaps the CMVP lab would fail. If the cert was not awarded on your watch, do not imply it was.",
      },
      {
        claim: "Directly led 4 engineers",
        probe: "Manager or tech lead? What did each person own?",
        safer:
          "I led a pod of four on the software / control-plane crypto work. I assigned gaps and reviewed TLS, library pins, and evidence. People management: only if that is actually true — otherwise say technical lead.",
      },
      {
        claim: "Architect compliant capabilities across platform and control-plane",
        probe: "That's the whole stack. What did you personally design?",
        safer:
          "Name 2–3 capabilities: TLS config, RNG, key storage, SSH, module boundary, disabling non-approved algos. 'Across layers' means you coordinated with hardware and platform, not that you owned firmware and userspace alone.",
      },
    ],
    realCore: [
      "You have worked a real compliance program with multiple orgs, including government-facing process.",
      "You can talk crypto and product engineering in the same sentence — rare and useful for F500.",
      "You led a small team. This is a cleaner 'lead' story than the team of 10 if the four were actually yours.",
      "You know that compliance is engineering plus evidence, not a checkbox slide.",
    ],
    fde: [
      {
        need: "Enterprise-scale security requirements",
        angle:
          "Profound's buyers are banks and retailers. SOC 2 is table stakes; customers will still ask about data flows, encryption, residency, and who can see prompts. You have sat in those rooms.",
      },
      {
        need: "Work across client engineering and executives",
        angle:
          "Compliance work is translation: lab language ↔ engineers who just want to ship ↔ a stakeholder who needs a date.",
      },
      {
        need: "Understand what must not be a one-off",
        angle:
          "You do not fork crypto per customer. Same instinct as FDE: custom integration at the edges, shared hardened core.",
      },
    ],
    talk90: `Fujitsu needed flagship products ready for FIPS 140-3 — not a slide, a lab-ready crypto story.

I worked across platform, hardware, open source, and the compliance group, and I led four engineers on the software side: what the module boundary was, which algorithms were allowed, how keys lived, and how the control plane stayed inside that box.

My job was half architecture and half herding: make sure a library someone pulled from GitHub did not silently take us out of the approved set.

That's relevant to Profound because enterprise deals die on trust. I am comfortable sitting with security teams and being precise about what we do with data.`,
    talkDeep: `FIPS 140-3 in plain English: the cryptographic module is validated against a standard. You define a boundary. Inside: approved crypto, documented key life cycle, self-tests, roles. Outside: the rest of the product.

Readiness work is finding every place you do crypto the sloppy way — old OpenSSL defaults, non-approved curves, keys in logs, debug backdoors — and closing it with evidence.

Cross-team: hardware owns entropy / TPM-ish bits, platform owns OS and libraries, you owned control-plane TLS and the management crypto path, compliance owns the paperwork and lab relationship.

Do not fake CMVP process details. If you wrote code and gap lists, say that. If you attended lab calls, say that.`,
    ifPressed: `If they ask "so you got FIPS certified?": "I advanced readiness. I will not claim a CMVP certificate I didn't hang on the wall. If it was still in lab, I say that."

If 'led 4' is soft: "I directed their technical work on this program. I was the person who split the gaps and reviewed the changes."`,
    questions: [
      {
        q: "What is FIPS 140-3 vs 140-2?",
        a: "140-3 is the current ISO-aligned standard, more explicit about module boundary, testing, and some crypto hygiene. You don't need a lecture. You need: why the product had to move, and one engineering consequence (e.g. algorithm allowlist).",
      },
      {
        q: "Give me a concrete gap you closed.",
        a: "Example: management TLS still offered 3DES. We removed it, pinned OpenSSL 3 FIPS provider, and attached the config screenshot + test that the handshake rejects the old cipher. Compliance signed the evidence pack. If your gap was keys in logs, tell that instead — same shape.",
      },
      {
        q: "How do you work with a compliance team without becoming a ticket-taker?",
        a: "You translate requirements into engineering changes and you push back when a control is theater. FDE version: customer's security questionnaire vs what the product actually does.",
      },
      {
        q: "Would you FIPS-certify Profound?",
        a: "Don't play CISO. 'Unlikely as a first ask. I'd expect SOC 2, SSO, encryption in transit/at rest, tenancy isolation, and a crisp data-flow diagram for prompt data. If a federal customer needed FIPS, I'd isolate the crypto module rather than wrapping the whole app.'",
      },
    ],
    swap: [
      {
        drop: "I certified our products for FIPS 140-3.",
        say: "I drove engineering readiness for FIPS 140-3 across the layers I can name, with a team of four.",
      },
      {
        drop: "I architected all cybersecurity on the platform.",
        say: "I led the compliant crypto / control-plane work required for the FIPS boundary.",
      },
    ],
    lockIn: [
      {
        fact: "Readiness vs actual certificate. Know which.",
        examples: [
          "Readiness. We closed engineering gaps and wrote evidence for a FIPS 140-3 module boundary. I will not say 'I certified the product' unless a CMVP certificate actually landed on my watch. If it was still in lab / queued, I say 'readiness.'",
          "If the cert did land: the product reached FIPS 140-3 certification while I was on the software side of that program. I still will not imply I was the lab or the CISO.",
        ],
      },
      {
        fact: "The four engineers' split",
        examples: [
          "I led the pod. Split roughly: me on control-plane TLS / management crypto and the reviews, one person on OpenSSL / library pins, one on authn to the management API, one on evidence and the checklist compliance needed. I assigned the gaps and reviewed the changes. I was not their HR manager unless that is actually true.",
          "If flatter: four of us, I was the person who cut the work and owned the control-plane slice. We sat with platform and hardware, we did not own the kernel.",
        ],
      },
      {
        fact: "One gap, one library pin, one argument",
        examples: [
          "Gap: management TLS still offered a non-approved cipher (3DES / an old curve — pick the one you actually killed). Pin: OpenSSL 3 with the FIPS provider, no silent fall-back to the default provider. Argument: hardware wanted a debug backdoor that punched through the module boundary. I said no, because the lab will find it and so will a customer.",
          "Alternative gap: keys logged in a verbose trace path. We stripped the log and added a test that fails if a PEM shows up in stdout.",
        ],
      },
      {
        fact: "What you would put on a Profound data-flow diagram",
        examples: [
          "Browser → Profound API → Postgres / Timescale (tenant-scoped) → outbound scrapers to answer engines. SSO in. No customer prompt payloads in app logs. Encryption in transit and at rest. That is the picture a bank security team wants on slide one. FIPS is a module story; most Profound buyers will start at SOC 2, SSO, RLS, and 'where does my data sit.'",
        ],
      },
    ],
  },
  {
    slug: "cicd-defects",
    num: "06",
    short: "CI/CD, 30% fewer defects",
    nav: "CI/CD · −30% defects",
    role: "Fujitsu · SDE II",
    dates: "Aug 2022 – Jan 2025",
    resume:
      "Reduced downstream defects by 30% as measured by Horizontal Integration Testing, by building Jenkins and GitLab CI/CD pipelines with custom smoke, sanity, and platform-specific test suites.",
    likelyStretch: [
      {
        claim: "30%",
        probe: "30% of what, over what window, vs what baseline, was it causal?",
        safer:
          "HIT defects on the trains / products I instrumented dropped about 30% after the pipelines and suites were in place. I am not claiming I personally caused every defect in the company to fall 30%. If the number is fuzzy, drop it and keep the mechanism.",
      },
      {
        claim: "Building Jenkins and GitLab pipelines",
        probe: "From zero? Or you extended existing ones?",
        safer:
          "Be linear: what existed, what you added (smoke / sanity / platform suites), which system was source of truth, why both Jenkins and GitLab.",
      },
    ],
    realCore: [
      "You built the quality gate, not just wrote tests.",
      "You understand suite layers: smoke vs sanity vs platform.",
      "You have Jenkins and GitLab in production — useful when a client has a brownfield CI.",
      "You can talk about shifting defects left, which is how you keep a customer's POC from rotting.",
    ],
    fde: [
      {
        need: "Production-ready code and engineering rigor",
        angle:
          "FDE code still ships. A customer POC without smoke tests becomes your 2 a.m. problem.",
      },
      {
        need: "Context-switch across clients",
        angle:
          "You already lived in two CI systems. You can enter a customer's GitHub Actions / Jenkins without drama.",
      },
      {
        need: "Reusable libraries for common patterns",
        angle:
          "Pipeline templates and suite layers are exactly that. Talk the template, not the one-off job.",
      },
    ],
    talk90: `Downstream breakage was showing up too late — in Horizontal Integration Testing, after a lot of code had already landed.

I built out Jenkins and GitLab pipelines with a layered suite: smoke for "is it alive," sanity for "basic contracts," and platform-specific tests for the things only this hardware / image can tell you.

After those gates were in place, HIT defects on the scope we measured dropped about 30%. The important part is not the number, it's that we moved discovery left and made the signal automatic.

At Profound I would rather a client integration fail in CI on a schema change than fail in a CMO review.`,
    talkDeep: `Explain HIT in one line: tests that stitch components together the way a release actually runs, horizontal across teams/modules.

Why defects were late: missing smoke, flaky manual ritual, environment drift, tests that only lived on someone's desk.

What you built: triggers, artifacts, how you blocked merge or release, how you made failures readable.

Causality honesty: pipelines plus suites plus culture. If other people wrote tests that ran in your pipeline, credit that. You still own the system that made them run.`,
    ifPressed: `On 30%: "That was HIT defects on the Transponder trains I instrumented, about two quarters after the gates. If you want, I can walk the definition of a HIT defect. I will not pretend it's a company-wide KPI I owned."

If you no longer have the spreadsheet: "I don't have the dashboard in front of me. The order of magnitude was a clear drop — smoke-level breaks stopped showing up first in HIT. I won't invent weekly counts."`,
    questions: [
      {
        q: "What is a HIT defect in your world?",
        a: "Example: a defect found when components were integrated the way a release actually runs — control + platform + the hardware image together — after they already passed their local suites. If I cannot say that cleanly, I do not lead with 30%.",
      },
      {
        q: "Smoke vs sanity vs platform-specific?",
        a: "Smoke: install/boot/critical path, minutes. Sanity: core APIs/features, still fast. Platform: hardware, failover, performance, long. This is a seniority check.",
      },
      {
        q: "Jenkins and GitLab — why both?",
        a: "Example: GitLab was the merge / source-of-truth gate. Jenkins already owned the long hardware jobs and the lab agents, so I did not rewrite that in GitLab. Both names on the resume is 'messy enterprise,' not 'I built two CIs for fun.'",
      },
      {
        q: "How did you handle flaky tests?",
        a: "Example: the laser-warmup flake. First we marked it flaky with an owner. Then we fixed the wait. Silent retries without an owner is how you ship dead hardware. Never 'we ignored them.'",
      },
      {
        q: "Would you bring this to a two-week Profound POC?",
        a: "Yes, but thin: one smoke that hits the customer's auth and one data contract test. Don't build a Jenkins cathedral.",
      },
    ],
    swap: [
      {
        drop: "I reduced defects 30%.",
        say: "HIT defects on the trains I instrumented dropped about 30% after we added automated smoke/sanity/platform gates.",
      },
      {
        drop: "I built all of CI/CD at Fujitsu.",
        say: "I built the pipelines and suites for the Transponder trains, in Jenkins and GitLab.",
      },
    ],
    lockIn: [
      {
        fact: "The 30% window, denominator, and whether you still believe it",
        examples: [
          "HIT defects on the Transponder trains I instrumented, about a two-quarter window after smoke/sanity/platform gates were blocking. Denominator was HIT-failure tickets / defects on that product, not 'all Fujitsu bugs.' I still believe the direction. I will not pretend I have the spreadsheet open.",
          "If the 30% is mush: I drop it. 'HIT stopped being where we first learned about smoke-level breaks' is the sentence. Mechanism over percentage.",
        ],
      },
      {
        fact: "If the number is soft, decide now to drop it",
        examples: [
          "Decision: I will lead with the pipeline layers, then say 'HIT defects dropped materially on that train.' I only say 30% if they ask for a number and I still trust it. I will not open with 30%.",
        ],
      },
      {
        fact: "One pipeline diagram you can sketch",
        examples: [
          "Merge to GitLab / Bitbucket → Jenkins smoke (~15 min: build, install, boot, one traffic-ish check) → sanity (core control APIs, config apply) → nightly / pre-release platform suite on hardware. GitLab for merge gates, Jenkins for the long hardware jobs — that is why both names are on the resume. Fail the train on smoke; do not wait for HIT to learn the image is dead.",
          "Boxes: commit → unit → smoke → sanity → HIT. I owned smoke/sanity/platform automation. HIT still existed; it just stopped being the first filter.",
        ],
      },
      {
        fact: "One flake story, one 'caught it before HIT' story",
        examples: [
          "Flake: an optical-power check that failed until the lab laser warmed up. We added a warmup / retry-with-shame and then a proper wait, because silent retries hide dead hardware. Caught-before-HIT: a default missing in a YANG / config path. Smoke applied a minimal config and failed in 10 minutes instead of two teams finding it in HIT a week later.",
          "Flake: a SSH session leftover from a previous Robot case. We killed sessions in teardown. Caught-before-HIT: an ABI mismatch between control and platform packages that smoke installed together.",
        ],
      },
    ],
  },
  {
    slug: "robot-coverage",
    num: "07",
    short: "Robot Framework, 2× coverage, edge bug",
    nav: "Robot · 2× coverage",
    role: "Fujitsu · SDE II",
    dates: "Aug 2022 – Jan 2025",
    resume:
      "Doubled control-layer and platform software test coverage by automating tests with the open-source Robot Framework, which led to uncovering a critical edge-case bug that could have caused system-wide failure.",
    likelyStretch: [
      {
        claim: "Doubled coverage",
        probe: "Line coverage? Case coverage? Of the whole product or your slice? From 8% to 16% is not a triumph if unsaid.",
        safer:
          "On the control-layer and platform suites I owned, automated cases went from about 40 to about 85 — roughly 2×. Not the entire Fujitsu portfolio.",
      },
      {
        claim: "System-wide failure",
        probe: "Would it have taken down every node in every network? That phrase is a magnet for skepticism.",
        safer:
          "It was a critical edge case in the control / platform path. Example blast radius: a shelf could have dropped traffic on a mis-mapped port after control restart — not every node in every network. Use the real blast radius. 'System-wide' only if that is literally true.",
      },
      {
        claim: "Which led to uncovering",
        probe: "Did the framework find it, or did you find it while writing tests?",
        safer:
          "Both are honorable. Example: 'The new suite bounced control while traffic was up; it failed; we found admin state reapplied to the wrong interface index.' Don't attribute agency to Robot like it was a bug-hunting AI.",
      },
    ],
    realCore: [
      "You automated tests that used to be manual or missing.",
      "You have a specific bug story — this is your best 'engineering rigor' anecdote if you keep the blast radius honest.",
      "Robot Framework is a reasonable enterprise choice (readable by QA + eng). Shows pragmatism.",
      "Control-layer bugs are high-leverage. You understand that tests near the control plane pay off.",
    ],
    fde: [
      {
        need: "Debug complex issues under pressure",
        angle:
          "The bug story is the demo. Structure: symptom, how the test tripped it, root cause, blast radius, fix, how you prevented silence next time.",
      },
      {
        need: "Write maintainable production-quality work",
        angle:
          "A Robot suite other people can extend is more FDE than a clever one-off pytest you only understand.",
      },
      {
        need: "Workshops / training for client teams",
        angle:
          "If you taught QA or other engineers to add Robot cases, say so. That's enablement.",
      },
    ],
    talk90: `Control-layer and platform software had thin automated coverage, so we found pain late.

I automated that layer with Robot Framework so cases were readable and other people could add them. On the suites I owned, coverage roughly doubled.

While doing that we hit an edge-case after a control restart: cached admin state landed on the wrong interface. Blast radius was a shelf / port traffic hit, not the entire network. We fixed it before it became a field event.

The lesson I take to FDE work: the scary bugs hide in the path nobody wanted to automate — failover, empty inputs, a client sending the field you didn't document.`,
    talkDeep: `Coverage: say what the metric was. If it was number of automated cases, say cases. If it was line coverage, say of which binaries.

Robot: keyword-driven, good for mixing CLI/API/hardware steps, lower friction for QA. Tradeoff: abstraction can hide what's actually asserted. You kept keywords thin / you didn't.

Bug story — use STAR and keep it 90 seconds:
- Situation: control-plane restart on a live shelf
- Task: automate 'interfaces keep the admin state that belongs to them'
- Action: Robot bounced control; one port came back with a neighbor's admin state; cache key was a reshuffling index
- Result: bind cache to a stable interface id, regression case, no field escape

If the bug was caught in lab and never near a customer, say that. Still valuable. Don't upgrade it to 'we saved the business.'`,
    ifPressed: `On doubled: "From about 40 to about 85 automated cases on the control-layer suite I owned. I don't want that heard as 'I doubled coverage for the company.'"

On system-wide: "Let me be precise about blast radius: a mis-mapped port after restart, traffic on that shelf. I used strong language on the resume because the control path is shared; the realistic failure was not 'every network, everywhere.'"`,
    questions: [
      {
        q: "Walk me through the bug like I am on the bridge call.",
        a: "Example, calm: 'We bounced the control process in lab with traffic up. One interface came back with a neighbor's admin state. Cache key was a slot index that reshuffled. Blast radius was that shelf, not the network. We keyed the cache on a stable interface id and left the Robot case in. Nobody paged.' No movie villain.",
      },
      {
        q: "Why Robot and not pytest?",
        a: "Example: QA and platform already read Robot keywords. I needed them to add cases without learning pytest fixtures. I still drop to Python inside a keyword when the assertion is ugly. Robot was the interface, not a religion.",
      },
      {
        q: "How do you keep a doubled suite from becoming a 2-hour flake farm?",
        a: "Example: smoke stays under 15 minutes. The control-restart case lives in the longer platform suite, not in merge smoke. Flakes get an owner or they get quarantined. We parallelized independent shelves. I will not dump a 2-hour suite on every commit.",
      },
      {
        q: "How would you test a Profound client integration?",
        a: "Contract tests on the payload, a recorded fixture from their API, one live smoke against sandbox, assertions a marketer can read ('share of voice present for prompt set P').",
      },
    ],
    swap: [
      {
        drop: "I doubled test coverage.",
        say: "I doubled automated coverage on the control-layer and platform suites I owned.",
      },
      {
        drop: "A bug that could have caused system-wide failure.",
        say: "A critical edge-case in the shared control path: after restart, admin state on the wrong port. Blast radius was that shelf, not the planet. We caught it in the new suite.",
      },
    ],
    lockIn: [
      {
        fact: "Coverage metric and before/after. Soft? Drop 'doubled.'",
        examples: [
          "Automated cases on the control-layer / platform Robot suite I owned went from about 40 to about 85. That is 'roughly doubled' on that suite, not line coverage of Fujitsu. If they ask line coverage and I do not have it, I stay with case count.",
          "If you remember percents: control-daemon line coverage from the low twenties to the mid-forties after the suite landed. Still that binary, not the company.",
          "If mush: I drop 'doubled' and say we went from sparse / manual to a Robot suite other people could extend.",
        ],
      },
      {
        fact: "The bug: root cause, blast radius, fix, how the test caught it",
        examples: [
          "STAR I will use: after a control-process restart we re-applied cached admin state to the wrong interface index. Blast radius: that shelf could have taken traffic down on the mis-mapped port — not 'the whole network, everywhere.' The new Robot case bounced control while traffic was up and asserted each interface kept the admin state that belonged to it. Fix: bind the cache key to a stable interface identity, not a slot that reshuffles. Regression case stayed in the suite.",
          "Alternative: a failover left an old next-hop in the control table. Blast radius: blackhole on that path until someone looked. Test forced the failover; we saw the stale entry. Fix: flush on switch + assert.",
        ],
      },
      {
        fact: "Same program as the 30% HIT bullet, or a separate miracle?",
        examples: [
          "Same quality arc. Robot grew the cases. Jenkins / GitLab ran them early. HIT defects dropped because we stopped discovering dead images and control-edge bugs so late. I will tell it as one story if they ask about both bullets, not two unrelated 2x / 30% trophies.",
        ],
      },
    ],
  },
  {
    slug: "roadmap-hod",
    num: "08",
    short: "Roadmaps with Head of Global Development",
    nav: "Roadmaps · HoGD",
    role: "Fujitsu · SDE II",
    dates: "Aug 2022 – Jan 2025",
    resume:
      "Strengthened software lifecycle planning for projects longer than 6 months by creating roadmaps, risk-mitigation strategies, and contingency plans reviewed directly with the Head of Global Development, leading to on-time deployments of multiple projects.",
    likelyStretch: [
      {
        claim: "Reviewed directly with the Head of Global Development",
        probe: "1:1? You in a staff meeting? Your slides in a pack your manager presented?",
        safer:
          "Be exact. Best honest versions: 'I built the roadmap and risk pack and presented it in the HoGD review.' or 'I built the pack; my manager presented; I answered questions.' Do not imply a personal advisory relationship if it was a forum.",
      },
      {
        claim: "On-time deployments of multiple projects",
        probe: "Which, and were they going to be late without you?",
        safer:
          "Name two. Example: 'We hit the committed dates for FIPS readiness and the Transponder CI/quality gates. Planning was one reason; I am not the only reason.'",
      },
      {
        claim: "Created roadmaps / contingency plans",
        probe: "PM work vs engineering lead work. They will test if this is inflated PM language.",
        safer:
          "Talk engineering planning: dependencies, integration milestones, risk to HIT, staffing, what we would cut. If a PM owned the Gantt, credit them.",
      },
    ],
    realCore: [
      "You have planned work that lasted more than a sprint. FDE engagements do too.",
      "You have been in a room with a very senior engineering leader.",
      "You think in risks and contingencies, not only in tickets.",
      "On-time delivery is a customer-trust metric. That's the FDE currency.",
    ],
    fde: [
      {
        need: "Present architectures and plans to diverse audiences",
        angle:
          "HoGD review is your proof you can survive a hard room. Describe how you changed the deck for that audience.",
      },
      {
        need: "Ownership of client outcomes end to end",
        angle:
          "A six-month project plan with contingencies is how you run a phased enterprise integration.",
      },
      {
        need: "Strategic thinking that connects tech to business impact",
        angle:
          "Risks you escalated should sound like missed customer commits, not 'Jira hygiene.'",
      },
    ],
    talk90: `We had projects that ran longer than six months, and the failure mode was optimistic sequencing — integration and compliance risks showing up after the date was already promised.

I started writing the plan the way I would want to read it if I were signing the date: milestones, what can slip, what we will cut, and what has to stay true for a release to be real.

Those packs were reviewed with the Head of Global Development. Example I will use if it is true: I authored the pack and presented it in that forum; my manager was in the room.

We shipped the FIPS-readiness milestone and the CI / quality gates on the dates we committed. I don't claim planning was the only reason. I do claim we stopped lying to ourselves about the critical path.

That's how I would run a Profound enterprise POC that has a board-level date.`,
    talkDeep: `Show a simple plan shape:
- Outcome (what 'deployed' meant)
- Dependencies (hardware, other teams, lab, cert)
- Risks (ranked)
- Triggers (when a contingency starts)
- Asks (staff, scope cut, date move)

Senior audience: fewer Gantt bars, more 'here is the decision you need to make this month.'

If a date slipped and you still learned something, you may tell that story instead of 'multiple on-time projects.' A recovered miss is more credible than a perfect record.`,
    ifPressed: `On 'directly': "I want to be precise. The review forum was the Head of Global Development's. I authored the pack and presented. I was not in a weekly 1:1 coaching relationship."

On on-time: "The two I will stand behind are FIPS readiness on that cycle and the Transponder CI/quality gates. Other projects in that period had normal noise. I used 'multiple' for those committed deliveries."`,
    questions: [
      {
        q: "What did you actually present?",
        a: "Example slide: 'Hardware sample is late. Ask: destage northbound extra. Date we are protecting: the FIPS / integration milestone.' If you never presented, say you authored and your manager spoke.",
      },
      {
        q: "Tell me about a contingency you actually executed.",
        a: "Example: hardware slipped, we destaged a non-critical northbound extra so the crypto / quality date held. Plans that never fire sound fake. That's ownership.",
      },
      {
        q: "How do you plan when the customer changes the ask every week?",
        a: "This is the FDE version. Re-baseline weekly, protect the outcome definition, keep a change log the exec can see. Don't pretend Fujitsu was that chaotic unless it was.",
      },
      {
        q: "Why is an SDE doing PM work?",
        a: "Because the critical path was technical. Someone had to make the engineering risks visible. I like that part of the job — it's why FDE appeals.",
      },
    ],
    swap: [
      {
        drop: "I reviewed roadmaps 1:1 with the Head of Global Development.",
        say: "I created the roadmap and risk pack that was reviewed in the HoGD forum. I presented; my manager was in the room.",
      },
      {
        drop: "I made multiple projects on-time.",
        say: "I owned planning for FIPS readiness and the Transponder quality gates; they hit the committed dates.",
      },
    ],
    lockIn: [
      {
        fact: "The true 'directly.' Write it in one clause.",
        examples: [
          "I authored the roadmap and risk pack and presented it in the Head of Global Development review. My manager was in the room. It was a forum, not a weekly 1:1 coaching relationship.",
          "I authored the pack. My manager presented. I answered the technical questions. I will not say 'reviewed directly with' like I was their advisor.",
          "I sat in the HoGD review and spoke to the risks I wrote. That is the most I will claim.",
        ],
      },
      {
        fact: "Project A and project B names / what shipped",
        examples: [
          "A: FIPS 140-3 readiness on the flagship / control-plane crypto work — we hit the milestone we committed for that review cycle. B: the CI + Robot quality program on Transponder — smoke/sanity gates were in and the HIT pain was down. Those are the two I will stand behind. I will not spray 'multiple projects' without names.",
          "If different: A was the Transponder ops-status / release train we dated. B was the DDS / memory work sequencing. Same rule: two named deliveries, not a vibe.",
        ],
      },
      {
        fact: "One risk you called early that proved real",
        examples: [
          "Hardware samples were going to slip. I put it in the risk pack two months out: if the board is late, we destage feature X, we do not move the cert / integration date. The board was late. We destaged. The date held.",
          "Cross-team API from platform was unsigned. I flagged 'HIT will be the first time we see it' as a date killer. We forced a contract test earlier. That is the risk that paid for the meeting.",
        ],
      },
      {
        fact: "One contingency you actually used",
        examples: [
          "We destaged a non-critical UI / northbound extra so the crypto / quality date stayed. Contingencies that never fire sound fake. This one fired.",
          "We split a release: ship the status feature without the last interface family, follow with a patch train. I would rather have a smaller on-time deploy than a heroic miss.",
        ],
      },
    ],
  },
];

export const experienceBySlug = Object.fromEntries(
  experiences.map((item) => [item.slug, item]),
) as Record<string, Experience>;
