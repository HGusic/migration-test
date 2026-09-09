import { Link } from "react-router-dom";
import {
  codingPrep,
  companyCards,
  competitors,
  fdeJob,
  match,
  nightBefore,
  products,
  questionsToAsk,
  role,
  scripts,
  vocab,
} from "../data/role";

export default function RolePage() {
  return (
    <article className="page">
      <p className="kicker">The job</p>
      <h2 className="display">{role.title}</h2>
      <p className="lede">
        Profound is a New York–born AI search platform that already sits with
        Fortune 500 marketers. This seat is a full-stack engineer who writes
        the integration, stands in the customer meeting, and owns whether the
        product becomes real inside their stack.
      </p>
      <div className="meta-row">
        <span className="chip lime">{role.company}</span>
        {role.locations.map((item) => (
          <span className="chip" key={item}>
            {item}
          </span>
        ))}
        <span className="chip">{role.comp}</span>
        <span className="chip amber">On-site · visa OK</span>
      </div>

      <section className="section">
        <div className="section-title">
          <h3>How this call is shaped</h3>
        </div>
        <div className="timeline">
          {role.callShape.map((item) => (
            <div className="tl" key={item.t}>
              <b>{item.t} min</b>
              <div>{item.what}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-title">
          <h3>Company, in interview language</h3>
        </div>
        <div className="grid-3">
          {companyCards.map((card) => (
            <div className="card" key={card.title}>
              <h4>{card.title}</h4>
              <p>{card.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-title">
          <h3>Product map — sound fluent</h3>
        </div>
        <div className="products">
          {products.map((item) => (
            <div className="product" key={item.name}>
              <strong>{item.name}</strong>
              <p>{item.point}</p>
            </div>
          ))}
        </div>
        <p style={{ marginTop: 16, color: "var(--muted)" }}>{competitors}</p>
      </section>

      <section className="section">
        <div className="section-title">
          <h3>What an FDE actually does here</h3>
        </div>
        <ul className="list">
          {fdeJob.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="section">
        <div className="section-title">
          <h3>AEO vocabulary</h3>
        </div>
        <div className="card">
          {vocab.map(([term, def]) => (
            <div className="q" key={term}>
              <dt>{term}</dt>
              <dd>{def}</dd>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-title">
          <h3>Why you are plausible — and where you are thin</h3>
        </div>
        <div className="grid-2">
          <div className="card">
            <h4>Lean on these</h4>
            <ul className="list">
              {match.strong.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="card">
            <h4>Do not bluff these</h4>
            <ul className="list">
              {match.weak.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
        <p style={{ marginTop: 14 }}>
          <Link to="/practice/timeseries" style={{ color: "var(--lime)" }}>
            Practice page: Postgres + Timescale (hypertables, caggs, compression, the questions they actually ask) →
          </Link>
        </p>
      </section>

      <section className="section">
        <div className="section-title">
          <h3>Scripts — say them out loud tonight</h3>
        </div>
        <h4>Tell me about yourself</h4>
        <div className="script">{scripts.aboutYou}</div>
        <div style={{ height: 16 }} />
        <h4>Why Profound</h4>
        <div className="script">{scripts.whyProfound}</div>
        <div style={{ height: 16 }} />
        <h4>Why FDE, not a backend seat</h4>
        <div className="script">{scripts.whyFde}</div>
        <div style={{ height: 16 }} />
        <h4>Relocation</h4>
        <div className="script">{scripts.relocate}</div>
        <div style={{ height: 16 }} />
        <h4>Why Fujitsu ended / why you are talking now</h4>
        <div className="script">{scripts.leaving}</div>
        <div style={{ height: 16 }} />
        <h4>When they notice TypeScript / Next / React is light</h4>
        <div className="script">{scripts.tsGap}</div>
      </section>

      <section className="section">
        <div className="section-title">
          <h3>Questions you ask them</h3>
        </div>
        <div className="card">
          {questionsToAsk.map((item) => (
            <div className="q" key={item.q}>
              <dt>{item.q}</dt>
              <dd>{item.why}</dd>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-title">
          <h3>Last 10 minutes — coding</h3>
        </div>
        <div className="warn">
          <strong>HR was explicit:</strong> not LeetCode, your IDE, your
          language, share screen. They are scoring whether you clarify, narrate,
          and ship a working slice — the FDE motion in miniature.
        </div>
        <div style={{ height: 14 }} />
        <div className="grid-2">
          <div className="card">
            <h4>What it will probably be</h4>
            <ul className="list">
              {codingPrep.likely.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="card">
            <h4>Rules of the 10 minutes</h4>
            <ul className="list">
              {codingPrep.rules.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
        <div style={{ height: 14 }} />
        <h4>TypeScript drill</h4>
        <div className="code">{codingPrep.drill}</div>
        <div style={{ height: 14 }} />
        <h4>Python fallback</h4>
        <div className="code">{codingPrep.pythonDrill}</div>
      </section>

      <section className="section">
        <div className="section-title">
          <h3>Tonight — with example lines</h3>
        </div>
        {nightBefore.map((item) => (
          <div className="lock" key={item.fact}>
            <strong>{item.fact}</strong>
            {item.examples.map((ex) => (
              <div className="ex" key={ex}>
                <span className="label">Example — steal if true</span>
                {ex}
              </div>
            ))}
          </div>
        ))}
      </section>

      <p className="kicker">
        Source posting · {role.posting}
      </p>
    </article>
  );
}
