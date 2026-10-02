export default function Hero({ profile }) {
  const { name, role, location, status, summary, links } = profile;
  return (
    <header className="hero">
      {status && (
        <p className="status">
          <span className="dot" aria-hidden="true" />
          {status}
        </p>
      )}
      <h1>{name}</h1>
      <p className="role">
        {role} in {location}
      </p>
      <p className="summary">{summary}</p>
      <nav className="links" aria-label="Contact links">
        {links.map((l) => (
          <a key={l.label} href={l.href}>
            {l.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
