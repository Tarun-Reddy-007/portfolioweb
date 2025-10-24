import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import "./Accomplishments.css";

const items = [
  {
    id: 1,
    title: "NSS Yuva Yodha Award (2022)",
    summary: "National recognition for service & community impact.",
    details:
      "Awarded the NSS YUVA YODHA AWARD on Sept 24, 2022 by Krisha Foundation, Mumbai for outstanding societal service during 2021–2022.",
  },
  {
    id: 2,
    title: "Director – Computer Programming (Team Vikasana)",
    summary: "Youngest appointed director (R&D team).",
    details:
      "Appointed Director of Computer Programming within 4 months— guiding engineering initiatives, tooling, and collaboration culture.",
  },
  {
    id: 3,
    title: "Most Active Teach‑Up Educator",
    summary: "Led 250+ government school sessions.",
    details:
      "Recognized on Aug 15, 2022 for coordinating 250+ volunteer-led classes (math, science, English, arts, sports) and personally teaching 30+ sessions.",
  },
  {
    id: 4,
    title: "NSS Student Volunteer of the Year",
    summary: "Organized 32 service campaigns in one year.",
    details:
      "Earned annual Presidency University recognition for highest volume and impact of community service initiatives.",
  },
  {
    id: 5,
    title: "National Service Scheme Leader",
    summary: "Youngest leader appointed (first year).",
    details:
      "Selected within first 2 months— spearheaded outreach logistics, volunteer mobilization, and event execution across initiatives.",
  },
  {
    id: 6,
    title: "University Cricket Team Captain",
    summary: "Promoted after 6 months— leadership & fitness drives.",
    details:
      "Led training cycles, tactical match planning, and cohesion programs while representing university competitively.",
  },
  { id: 7, title: "Runner Up – VOIS Hackathon (Vodafone)", summary: "Rapid prototyping & solution pitch.", details: "Delivered scalable concept tackling operational inefficiency with automation & analytics." },
  { id: 8, title: "Winner – GES Pitchers (IIT Kharagpur)", summary: "Top innovation pitch.", details: "Presented product vision, feasibility and market thesis— judged for clarity, impact, differentiation." },
  { id: 9, title: "Runner Up – Srishti Hackathon (BMSCE)", summary: "Functional prototype under time pressure.", details: "Built working MVP using modern web stack and rapid iteration cycles." },
  { id: 10, title: "Best Sustainability Hack – Centuriton (MSRIT)", summary: "Eco-impact solution award.", details: "Devised data-driven sustainability feature set with measurable footprint reduction potential." },
  { id: 11, title: "Second Runner Up – Anveshan (AIU)", summary: "Research-led solution showcase.", details: "Structured evidence-based presentation blending field data & predictive modeling." },
  { id: 12, title: "Runner Up – Anveshana (Govt. of Karnataka)", summary: "STEM innovation recognition.", details: "Concept focused on accessible technology pathways for public service improvement." },
];

const Accomplishments = () => {
  const [active, setActive] = useState(null);

  useEffect(() => {
    if (active) { document.body.style.overflow = 'hidden'; } else { document.body.style.overflow = 'auto'; }
    const handler = (e) => { if (e.key === 'Escape') setActive(null); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [active]);

  return (
    <div className="accomplishments-page">
      <nav className="top-nav">
        <div className="logo">Tarun C Reddy</div>
        <ul>
          <li><Link to="/Home">Home</Link></li>
          <li><Link to="/Aboutme">About</Link></li>
          <li><Link to="/Projects">Projects</Link></li>
          <li><Link to="/Accomplishments" className="active">Accomplishments</Link></li>
          <li><Link to="/Certifications">Certifications</Link></li>
          <li><Link to="/connect">Connect</Link></li>
          <li><Link to="/blogs">Blogs</Link></li>
        </ul>
      </nav>

      <header className="accomplishments-header">
        <h2>Accomplishments</h2>
        <p className="accomplishments-sub">Awards, roles & milestones representing leadership, impact and execution.</p>
      </header>

      <section className="accomplishments-grid" aria-label="Accomplishments list">
        {items.map(item => (
          <article
            key={item.id}
            className="acc-card"
            tabIndex={0}
            role="button"
            aria-label={`Open details for ${item.title}`}
            onClick={() => setActive(item)}
            onKeyDown={(e) => { if (e.key === 'Enter') setActive(item); }}
          >
            <h3 className="acc-title">{item.title}</h3>
            <p className="acc-summary">{item.summary}</p>
          </article>
        ))}
      </section>

      {active && (
        <div className="acc-overlay" role="dialog" aria-modal="true">
          <div className="acc-overlay-inner">
            <button className="acc-close-btn" aria-label="Close details" onClick={() => setActive(null)}><FaTimes /></button>
            <h2 className="overlay-title">{active.title}</h2>
            <p className="overlay-details">{active.details}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Accomplishments;
