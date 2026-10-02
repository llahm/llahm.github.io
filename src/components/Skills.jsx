import Section from "./Section.jsx";

export default function Skills({ skills }) {
  return (
    <Section title="Skills">
      <dl className="skills">
        {skills.map((s) => (
          <div key={s.group}>
            <dt>{s.group}</dt>
            <dd>{s.items.join(", ")}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
