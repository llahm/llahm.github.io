import { profile } from "./data/profile.js";
import Hero from "./components/Hero.jsx";
import Projects from "./components/Projects.jsx";
import Skills from "./components/Skills.jsx";
import Timeline from "./components/Timeline.jsx";

export default function App() {
  return (
    <main className="page">
      <Hero profile={profile} />
      <Projects projects={profile.projects} />
      <Skills skills={profile.skills} />
      <Timeline title="Experience" entries={profile.experience} />
      <Timeline title="Education" entries={profile.education} />
    </main>
  );
}
