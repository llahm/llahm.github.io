import Section from "./Section.jsx";

export default function Timeline({ title, entries }) {
  return (
    <Section title={title}>
      <ul className="timeline">
        {entries.map((e) => (
          <li key={e.title + e.org}>
            <div className="timeline-head">
              <h3>{e.title}</h3>
              <span className="meta">{e.dates}</span>
            </div>
            <p className="meta">{e.org}</p>
            {e.note && <p className="timeline-note">{e.note}</p>}
          </li>
        ))}
      </ul>
    </Section>
  );
}
