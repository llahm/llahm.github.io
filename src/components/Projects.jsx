import Section from "./Section.jsx";

export default function Projects({ projects }) {
  return (
    <Section title="Projects">
      <ul className="projects">
        {projects.map((p) => (
          <li key={p.name}>
            <h3>{p.name}</h3>
            <p>{p.description}</p>
            <p className="meta">{p.stack.join(", ")}</p>
            {(p.repo || p.live) && (
              <p className="project-links">
                {p.live && <a href={p.live}>Live site</a>}
                {p.repo && <a href={p.repo}>Source code</a>}
              </p>
            )}
          </li>
        ))}
      </ul>
    </Section>
  );
}
