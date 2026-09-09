import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import { experiences } from "../data/experiences";

export default function Layout() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="app">
      <aside className="sidebar">
        <div className="brand">
          <div className="brand-kicker">Interview desk</div>
          <h1>Profound FDE</h1>
          <p>Haris Gusic · 30-minute screen</p>
        </div>
        <nav className="nav">
          <div className="nav-group">
            <p className="nav-label">Start here</p>
            <NavLink to="/" end>
              Role, company, prep
            </NavLink>
            <NavLink to="/practice/timeseries">
              Postgres / Timescale
            </NavLink>
          </div>
          <div className="nav-group">
            <p className="nav-label">Resume points</p>
            {experiences.map((item) => (
              <NavLink key={item.slug} to={`/experience/${item.slug}`}>
                <span className="num">{item.num}</span>
                {item.nav}
              </NavLink>
            ))}
          </div>
        </nav>
        <div className="sidebar-note">
          Rule for every bullet: lead with the real problem and your concrete
          work. If a number or logo cannot survive two follow-ups, drop it
          before they ask.
        </div>
      </aside>

      <div className="main">
        <div className="mobile-nav">
          <select
            value={location.pathname}
            onChange={(event) => navigate(event.target.value)}
          >
            <option value="/">Role, company, prep</option>
            <option value="/practice/timeseries">Postgres / Timescale</option>
            {experiences.map((item) => (
              <option key={item.slug} value={`/experience/${item.slug}`}>
                {item.num} · {item.nav}
              </option>
            ))}
          </select>
        </div>
        <div className="topbar">
          <span>20 min conversation · 10 min IDE exercise · share screen</span>
          <span>Not LeetCode · TypeScript or Python · narrate</span>
        </div>
        <Outlet />
      </div>
    </div>
  );
}
