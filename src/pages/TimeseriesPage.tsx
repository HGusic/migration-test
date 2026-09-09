import { Link } from "react-router-dom";
import {
  concepts,
  drill,
  honesty,
  lockIn,
  pgExtras,
  productionTraps,
  queries,
  questions,
  schemaTalk,
  soundBite,
  tsIntro,
  vsOthers,
  whyProfound,
} from "../data/timeseries";

export default function TimeseriesPage() {
  return (
    <article className="page">
      <p className="kicker">Practice · JD gap</p>
      <h2 className="display">{tsIntro.title}</h2>
      <p className="lede">{tsIntro.lede}</p>
      <div className="meta-row">
        <span className="chip lime">Hypertables</span>
        <span className="chip lime">Caggs</span>
        <span className="chip">Compression</span>
        <span className="chip">RLS</span>
        <span className="chip amber">Do not claim production</span>
      </div>

      <section className="section">
        <div className="section-title">
          <h3>The honest 20-second answer</h3>
        </div>
        <div className="script">{honesty}</div>
      </section>

      <section className="section">
        <div className="section-title">
          <h3>Why this shows up on a Profound FDE screen</h3>
        </div>
        <div className="grid-2">
          {whyProfound.map((card) => (
            <div className="card" key={card.title}>
              <h4>{card.title}</h4>
              <p>{card.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-title">
          <h3>Machinery — memorize these words</h3>
        </div>
        {concepts.map((row) => (
          <div className="card" key={row.name} style={{ marginBottom: 10 }}>
            <h4>{row.name}</h4>
            <p>
              <strong>Say: </strong>
              {row.say}
            </p>
            <p>
              <strong>Trap: </strong>
              {row.trap}
            </p>
          </div>
        ))}
      </section>

      <section className="section">
        <div className="section-title">
          <h3>If they say “why not X?”</h3>
        </div>
        <div className="card">
          {vsOthers.map((row) => (
            <div className="q" key={row.vs}>
              <dt>{row.vs}</dt>
              <dd>{row.line}</dd>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-title">
          <h3>Whiteboard schema — citation firehose</h3>
        </div>
        <div className="code">{schemaTalk}</div>
      </section>

      <section className="section">
        <div className="section-title">
          <h3>Queries worth being able to write</h3>
        </div>
        {queries.map((row) => (
          <div key={row.title} style={{ marginBottom: 16 }}>
            <h4>{row.title}</h4>
            <div className="code">{row.code}</div>
          </div>
        ))}
      </section>

      <section className="section">
        <div className="section-title">
          <h3>Production traps that sound like you have operated this</h3>
        </div>
        <div className="grid-2">
          {productionTraps.map((row) => (
            <div className="card" key={row.name}>
              <h4>{row.name}</h4>
              <p>{row.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-title">
          <h3>Postgres extras (not SELECT basics)</h3>
        </div>
        {pgExtras.map((row) => (
          <div className="card" key={row.name} style={{ marginBottom: 10 }}>
            <h4>{row.name}</h4>
            <p>{row.body}</p>
          </div>
        ))}
      </section>

      <section className="section">
        <div className="section-title">
          <h3>Drop this / say this</h3>
        </div>
        {soundBite.map((row) => (
          <div className="pair" key={row.drop} style={{ marginBottom: 10 }}>
            <div className="bad">
              <span className="label">Do not say</span>
              {row.drop}
            </div>
            <div className="good">
              <span className="label">Say</span>
              {row.say}
            </div>
          </div>
        ))}
      </section>

      <section className="section">
        <div className="section-title">
          <h3>Questions they may ask</h3>
        </div>
        <div className="card">
          {questions.map((row) => (
            <div className="q" key={row.q}>
              <dt>{row.q}</dt>
              <dd>{row.a}</dd>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-title">
          <h3>Say-it-while-you-type drill</h3>
        </div>
        <div className="code">{drill}</div>
      </section>

      <section className="section">
        <div className="section-title">
          <h3>Lock these tonight</h3>
        </div>
        {lockIn.map((row) => (
          <div className="lock" key={row.fact}>
            <strong>{row.fact}</strong>
            {row.examples.map((ex) => (
              <div className="ex" key={ex}>
                <span className="label">Example — say this</span>
                {ex}
              </div>
            ))}
          </div>
        ))}
      </section>

      <p className="kicker">
        Back to <Link to="/">role and company</Link>
      </p>
    </article>
  );
}
