// Everything on the site comes from this file. Edit here, nothing else needs to change.

export const profile = {
  name: "Abe Kebe",
  role: "Software developer",
  location: "Addis Ababa, Ethiopia",
  status: "Open to internships", // set to "" to hide
  summary:
    "Computer Science graduate who builds web apps with JavaScript and React. Looking for a software development internship, and growing toward full-stack.",

  links: [
    { label: "Email", href: "mailto:llahm9440@gmail.com" },
    { label: "GitHub", href: "https://github.com/llahm" },
  ],

  projects: [
    {
      name: "Campus Connect",
      description:
        "A React app built from reusable components with client-side state. Data is stored in the browser as JSON so it persists between visits.",
      stack: ["React", "JavaScript", "Fetch API", "Web Storage", "JSON"],
      repo: "", // e.g. "https://github.com/llahm/campus-connect"
      live: "",
    },
    {
      name: "Flight-Matrix-Reshaper",
      description:
        "A web app that reshapes and processes flight-matrix data, with a browser interface for working with the results.",
      stack: ["Flask", "JavaScript", "HTML", "CSS"],
      repo: "",
      live: "",
    },
  ],

  skills: [
    {
      group: "Languages",
      items: ["JavaScript", "Python", "C++", "Java", "Dart", "SQL", "HTML", "CSS"],
    },
    {
      group: "Frontend",
      items: ["React", "Next.js (beginner)", "Responsive design", "Component-based UI"],
    },
    {
      group: "Backend",
      items: ["Flask", "Node.js (basic)", "Django (basic)", "FastAPI (basic)"],
    },
    {
      group: "Databases",
      items: ["MongoDB", "Supabase", "SQLite", "PostgreSQL", "Firebase"],
    },
    {
      group: "Tools",
      items: ["Git and GitHub", "Docker", "Linux", "VS Code", "Arduino"],
    },
  ],

  experience: [
    {
      title: "Part-time customer service agent",
      org: "Ethiopian Airlines",
      dates: "2024 to now",
      note: "Help customers in a time-sensitive setting with clear, professional communication.",
    },
    {
      title: "Volunteer tutor",
      org: "MKC Church",
      dates: "2025",
      note: "Gave one-on-one help and clear explanations to learners.",
    },
  ],

  education: [
    {
      title: "BSc, Computer Science",
      org: "Addis Ababa University",
      dates: "2022 to 2026",
    },
    {
      title: "Advanced Digital Skills: Software Development and QA",
      org: "IBT College of Canada",
      dates: "2026 to now",
      note: "Python, vanilla JavaScript, React, and Next.js.",
    },
  ],

  languages: "English (professional), Amharic (native), Spanish (basic)",
};
