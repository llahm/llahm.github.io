export default function Footer({ profile }) {
  return (
    <footer className="footer">
      <p>
        <span className="meta">Languages: {profile.languages}</span>
      </p>
      <p>
        Want to work together?{" "}
        <a href={profile.links[0].href}>Send me an email</a>.
      </p>
    </footer>
  );
}
