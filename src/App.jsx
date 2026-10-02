import { profile } from "./data/profile.js";
import Hero from "./components/Hero.jsx";

export default function App() {
  return (
    <main className="page">
      <Hero profile={profile} />
    </main>
  );
}
