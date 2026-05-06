import { Link } from "react-router-dom";

const team = [
  {
    name: "Alex Morgan",
    role: "Frontend Engineer",
    bio: "Alex writes about React, performance, and everything in the browser. Five years building at scale.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
  },
  {
    name: "Jordan Lee",
    role: "TypeScript Enthusiast",
    bio: "Jordan is obsessed with type safety and developer tooling. Contributor to several OSS TypeScript projects.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jordan",
  },
  {
    name: "Sam Rivera",
    role: "CSS & Design Systems",
    bio: "Sam bridges the gap between design and engineering, specializing in accessible, beautiful CSS.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sam",
  },
];

export default function About() {
  return (
    <main className="page about-page">
      <section className="about-hero">
        <h1 className="about-title">About DevBlog</h1>
        <p className="about-subtitle">
          DevBlog is a community of developers writing about the craft of building
          modern web applications — from beginner fundamentals to advanced patterns.
        </p>
      </section>

      <section className="about-mission">
        <div className="mission-card">
          <span className="mission-icon">✦</span>
          <h2>Our Mission</h2>
          <p>
            We believe that great technical writing makes developers more effective.
            Every article we publish is carefully crafted to be practical, accurate,
            and immediately useful — not just theory.
          </p>
        </div>
        <div className="mission-card">
          <span className="mission-icon">◆</span>
          <h2>What We Cover</h2>
          <p>
            React, TypeScript, CSS, build tooling, performance, accessibility, and
            the evolving web platform. We focus on modern approaches that reflect
            how teams actually ship software today.
          </p>
        </div>
        <div className="mission-card">
          <span className="mission-icon">●</span>
          <h2>Who Writes Here</h2>
          <p>
            Working engineers who write from direct experience. No click-bait, no
            padding — just clear explanations from people who spend their days in
            the editor.
          </p>
        </div>
      </section>

      <section className="team-section">
        <h2 className="team-heading">Meet the Authors</h2>
        <div className="team-grid">
          {team.map((member) => (
            <div key={member.name} className="team-card">
              <img src={member.avatar} alt={member.name} className="team-avatar" />
              <h3 className="team-name">{member.name}</h3>
              <span className="team-role">{member.role}</span>
              <p className="team-bio">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="about-cta">
        <h2>Ready to start reading?</h2>
        <p>Browse our latest articles on React, TypeScript, CSS, and more.</p>
        <Link to="/" className="cta-btn">Explore Articles →</Link>
      </section>
    </main>
  );
}
