import { useEffect, useState } from 'react';
import {
  FiArrowUpRight,
  FiDownload,
  FiGithub,
  FiMail,
  FiMenu,
  FiMoon,
  FiSun,
  FiX,
} from 'react-icons/fi';
import {
  profile,
  links,
  research,
  education,
  experience,
  projects,
  featuredCerts,
  moreCerts,
  skills,
} from './data';
import profileImg from './assets/profile.jpg';

const nav = [
  ['research', 'Research'],
  ['experience', 'Experience'],
  ['projects', 'Projects'],
  ['certificates', 'Certificates'],
  ['skills', 'Skills'],
  ['contact', 'Contact'],
];

function useTheme() {
  const [theme, setTheme] = useState(
    () => document.documentElement.dataset.theme || 'light'
  );
  const toggle = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem('theme', next);
    } catch {
      /* storage unavailable */
    }
    setTheme(next);
  };
  return [theme, toggle];
}

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('in'));
      return;
    }
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function Header() {
  const [theme, toggle] = useTheme();
  const [open, setOpen] = useState(false);
  return (
    <header className="header">
      <div className="wrap header-inner">
        <a href="#top" className="brand" onClick={() => setOpen(false)}>
          Vibhum Sharma
        </a>
        <nav className={`nav ${open ? 'open' : ''}`} aria-label="Primary">
          {nav.map(([id, label]) => (
            <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
        </nav>
        <div className="header-actions">
          <button
            className="icon-btn"
            onClick={toggle}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
          >
            {theme === 'dark' ? <FiSun /> : <FiMoon />}
          </button>
          <button
            className="icon-btn menu-btn"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero wrap" id="top">
      <div className="hero-text">
        <p className="kicker">
          <span className="dot" /> {profile.role}
        </p>
        <h1>{profile.headline}</h1>
        <p className="lead">{profile.intro}</p>
        <div className="cta">
          <a className="btn primary" href={`mailto:${profile.email}`}>
            <FiMail /> Get in touch
          </a>
          <a className="btn" href={profile.resume} target="_blank" rel="noopener noreferrer">
            <FiDownload /> Resume
          </a>
          <a className="btn ghost" href="https://github.com/rovermask" target="_blank" rel="noopener noreferrer">
            <FiGithub /> GitHub
          </a>
        </div>
      </div>
      <div className="hero-photo">
        <img src={profileImg} alt="Portrait of Vibhum Sharma" width="360" height="450" />
        <p className="caption">{profile.location}</p>
      </div>
    </section>
  );
}

function Section({ id, title, kicker, children }) {
  return (
    <section className="section wrap reveal" id={id}>
      <div className="section-head">
        <p className="kicker-small">{kicker}</p>
        <h2>{title}</h2>
      </div>
      <div className="section-body">{children}</div>
    </section>
  );
}

function Research() {
  return (
    <Section id="research" kicker="01" title="Research & education">
      <div className="research-card">
        <p className="label">Currently</p>
        <h3>{research.program}</h3>
        <p className="muted">
          {research.institute} · {research.mode} · since {research.since}
        </p>
        <p className="research-area">
          <span>Research area</span> {research.area}
        </p>
        <p>{research.summary}</p>
        <p className="small">{research.patent}</p>
      </div>
      <ul className="timeline">
        {education.map((e) => (
          <li key={e.degree}>
            <span className="when">{e.period}</span>
            <div>
              <h3>{e.degree}</h3>
              <p className="muted">{e.school}</p>
              {e.note && <p className="small">{e.note}</p>}
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}

function Tags({ items }) {
  return (
    <ul className="tags">
      {items.map((t) => (
        <li key={t}>{t}</li>
      ))}
    </ul>
  );
}

function Experience() {
  return (
    <Section id="experience" kicker="02" title="Experience">
      <ul className="timeline">
        {experience.map((x) => (
          <li key={x.company}>
            <span className="when">
              {x.period}
              <br />
              {x.place}
            </span>
            <div>
              <h3>
                {x.role} <span className="at">· {x.company}</span>
              </h3>
              <ul className="points">
                {x.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
              <Tags items={x.tags} />
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}

function ProjectLinks({ p }) {
  return (
    <div className="proj-links">
      {p.live && (
        <a href={p.live} target="_blank" rel="noopener noreferrer">
          Live <FiArrowUpRight />
        </a>
      )}
      {p.github && (
        <a href={p.github} target="_blank" rel="noopener noreferrer">
          Code <FiArrowUpRight />
        </a>
      )}
    </div>
  );
}

function Projects() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);
  return (
    <Section id="projects" kicker="03" title="Selected projects">
      <div className="proj-grid">
        {featured.map((p) => (
          <article className="proj" key={p.title}>
            <div className="proj-top">
              <h3>{p.title}</h3>
              {p.highlight && <span className="pill">{p.highlight}</span>}
            </div>
            <p className="muted">{p.subtitle}</p>
            <p>{p.description}</p>
            <Tags items={p.tags} />
            <ProjectLinks p={p} />
          </article>
        ))}
      </div>

      <h3 className="sub">More work</h3>
      <ul className="rows">
        {rest.map((p) => (
          <li key={p.title}>
            <div>
              <strong>{p.title}</strong>
              <span className="muted"> — {p.subtitle}</span>
              <p className="small">{p.description}</p>
            </div>
            <ProjectLinks p={p} />
          </li>
        ))}
      </ul>

    </Section>
  );
}

function Certificates() {
  return (
    <Section id="certificates" kicker="04" title="Certificates">
      <div className="cert-grid">
        {featuredCerts.map((c) => (
          <a className="cert" key={c.title} href={c.href} target="_blank" rel="noopener noreferrer">
            <span className="cert-meta">
              {c.issuer} · {c.year}
            </span>
            <span className="cert-title">{c.title}</span>
            <span className="cert-link">
              {c.hrefLabel || 'View certificate'} <FiArrowUpRight />
            </span>
          </a>
        ))}
      </div>

      <div className="more-certs">
        {moreCerts.map((g) => (
          <details key={g.group}>
            <summary>
              {g.group} <span className="count">{g.items.length}</span>
            </summary>
            <ul className="rows compact">
              {g.items.map((c) => (
                <li key={c.title}>
                  <a href={c.href} target="_blank" rel="noopener noreferrer">
                    {c.title}
                  </a>
                  <span className="muted">{c.issuer}</span>
                </li>
              ))}
            </ul>
          </details>
        ))}
      </div>
    </Section>
  );
}

function Skills() {
  return (
    <Section id="skills" kicker="05" title="Skills">
      <dl className="skills">
        {skills.map((s) => (
          <div key={s.group}>
            <dt>{s.group}</dt>
            <dd>
              <Tags items={s.items} />
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}

function Contact() {
  return (
    <Section id="contact" kicker="06" title="Let's talk">
      <p className="lead">
        I'm looking for ML Engineer, AI Engineer, Data Scientist and Data Analyst roles alongside my
        Ph.D., and I'm open to research collaborations. Long term, I'm aiming for industry R&amp;D or
        an academic career. Email is the quickest way to reach me.
      </p>
      <a className="big-mail" href={`mailto:${profile.email}`}>
        {profile.email} <FiArrowUpRight />
      </a>
      <ul className="elsewhere">
        {links.map((l) => (
          <li key={l.label}>
            <a href={l.href} target="_blank" rel="noopener noreferrer">
              <span>{l.label}</span>
              <span className="muted">{l.handle}</span>
              <FiArrowUpRight />
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}

function Footer() {
  return (
    <footer className="footer wrap">
      <span>© {new Date().getFullYear()} Vibhum Sharma</span>
      <a href="#top">Back to top ↑</a>
    </footer>
  );
}

export default function App() {
  useReveal();
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Research />
        <Experience />
        <Projects />
        <Certificates />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
