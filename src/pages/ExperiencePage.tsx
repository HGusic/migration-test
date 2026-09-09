import AwsArchitecture from "../components/AwsArchitecture";
import { experienceBySlug } from "../data/experiences";

export default function ExperiencePage({ slug }: { slug: string }) {
  const item = experienceBySlug[slug];
  if (!item) return null;

  return (
    <article className={slug === "aws-monitoring" ? "page page-wide" : "page"}>
      <p className="kicker">
        {item.num} · {item.role} · {item.dates}
      </p>
      <h2 className="display">{item.short}</h2>
      <p className="quote">{item.resume}</p>
      <div className="meta-row">
        <span className="chip lime">FDE translation</span>
        <span className="chip amber">Assume they will poke the verbs</span>
      </div>

      <section className="section talk-driver">
        <div className="section-title">
          <h3>Talking driver — say this first</h3>
        </div>
        <div className="script script-driver">{item.talk90}</div>
      </section>

      <section className="section">
        <div className="section-title">
          <h3>If they say “go deeper”</h3>
        </div>
        <div className="script">{item.talkDeep}</div>
      </section>

      {slug === "aws-monitoring" ? <AwsArchitecture /> : null}

      <section className="section">
        <div className="section-title">
          <h3>Where this bullet is probably stretched</h3>
        </div>
        <div className="danger">
          Interviewers at a Sequoia-backed unicorn will ask who, how many, and
          what you personally did. The goal is a full story that survives
          follow-ups — not a bigger story.
        </div>
        <div style={{ height: 14 }} />
        {item.likelyStretch.map((row) => (
          <div className="card" key={row.claim} style={{ marginBottom: 10 }}>
            <h4>Claim they will hear: {row.claim}</h4>
            <p>
              <strong>They will ask: </strong>
              {row.probe}
            </p>
            <p>
              <strong>Safer line: </strong>
              {row.safer}
            </p>
          </div>
        ))}
      </section>

      <section className="section">
        <div className="section-title">
          <h3>What is still true and useful</h3>
        </div>
        <ul className="list">
          {item.realCore.map((row) => (
            <li key={row}>{row}</li>
          ))}
        </ul>
      </section>

      <section className="section">
        <div className="section-title">
          <h3>How this maps to the FDE seat</h3>
        </div>
        <div className="grid-2">
          {item.fde.map((row) => (
            <div className="card" key={row.need}>
              <h4>{row.need}</h4>
              <p>{row.angle}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-title">
          <h3>If they press the embellishment</h3>
        </div>
        <div className="warn">{item.ifPressed}</div>
      </section>

      <section className="section">
        <div className="section-title">
          <h3>Drop this / say this</h3>
        </div>
        {item.swap.map((row) => (
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
          {item.questions.map((row) => (
            <div className="q" key={row.q}>
              <dt>{row.q}</dt>
              <dd>{row.a}</dd>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-title">
          <h3>Lock these facts before the call</h3>
        </div>
        <p className="lede" style={{ fontSize: 16, marginBottom: 16 }}>
          Example lines are written in a Fujitsu transponder / SDE voice so you
          have something to say. Use a line only if it is close to what you
          actually did. If it is not, rewrite it — do not memorize a fiction.
        </p>
        {item.lockIn.map((row) => (
          <div className="lock" key={row.fact}>
            <strong>{row.fact}</strong>
            {row.examples.map((ex) => (
              <div className="ex" key={ex}>
                <span className="label">Example — steal if true</span>
                {ex}
              </div>
            ))}
          </div>
        ))}
      </section>
    </article>
  );
}
