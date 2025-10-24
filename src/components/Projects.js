import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import "./Projects.css";

const projects = [
  {
    id: 1,
    title: "FINDEM - FAUNA INVASION DETECTION SYSTEM",
    short: "Computer vision + ML powered farm & roadside wildlife intrusion alert system.",
    description:
      "FINDEM is a system built using Computer Vision, Machine Learning and automation techniques to guard farms from invasive animals and protect crops. It also helps commuters stay aware of wildlife presence near forest roads, reducing collision risks.",
    tech: ["Python", "OpenCV", "TensorFlow", "Automation"],
    images: [
      "https://placehold.co/300x180?text=FINDEM+1",
      "https://placehold.co/300x180?text=FINDEM+2",
      "https://placehold.co/300x180?text=FINDEM+3"
    ],
  },
  {
    id: 2,
    title: "VRIDDHI - HANDICRAFTS MARKETPLACE",
    short: "User-friendly marketplace enabling local artisans to sell handcrafted products.",
    description:
      "VRIDDHI (Self Dependent) is a handicrafts marketplace web application that simplifies buying and selling handmade products. Focus on clean navigation, accessibility and sustainable commerce.",
    tech: ["React", "Express", "Node.js", "PostgreSQL"],
    images: [
      "https://placehold.co/300x180?text=VRIDDHI+1",
      "https://placehold.co/300x180?text=VRIDDHI+2",
      "https://placehold.co/300x180?text=VRIDDHI+3",
      "https://placehold.co/300x180?text=VRIDDHI+4"
    ],
  },
  {
    id: 3,
    title: "AXLE MACHINES BLOG & AUTOMATION TOOLS",
    short: "Portfolio + short-form blogging platform + practical automation toolkit.",
    description:
      "Axle Machines showcases company portfolio (completed & ongoing projects), supports quick publishing of short blogs (<=1500 chars) and offers automation utilities to streamline repetitive operational steps.",
    tech: ["React", "Node.js", "REST APIs"],
    images: [
      "https://placehold.co/300x180?text=AXLE+1",
      "https://placehold.co/300x180?text=AXLE+2",
      "https://placehold.co/300x180?text=AXLE+3"
    ],
  },
  {
    id: 4,
    title: "CNTA - CHILD NUTRITION TRACKING APP",
    short: "Predictive malnutrition screening & referral workflow for children < 6 years.",
    description:
      "CNTA uses machine learning to predict malnutrition using age, BMI, MUAC, chest & head circumferences and other health indicators, forwarding flagged cases to the nearest NRC (Nutritional Rehabilitation Center).",
    tech: ["React", "TailwindCSS", "SQLite", "ML Models"],
    images: [
      "https://placehold.co/300x180?text=CNTA+1",
      "https://placehold.co/300x180?text=CNTA+2",
      "https://placehold.co/300x180?text=CNTA+3",
      "https://placehold.co/300x180?text=CNTA+4"
    ],
  },
];

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);

  useEffect(() => {
    if (activeProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    const onKey = (e) => {
      if (e.key === "Escape") setActiveProject(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [activeProject]);

  return (
    <div className="projects-page">
      <nav className="top-nav">
        <div className="logo">Tarun C Reddy</div>
        <ul>
          <li><Link to="/Home">Home</Link></li>
          <li><Link to="/Aboutme">About Me</Link></li>
          <li><Link to="/Projects" className="active">Projects</Link></li>
          <li><Link to="/Accomplishments">Accomplishments</Link></li>
          <li><Link to="/Certifications">Certifications</Link></li>
          <li><Link to="/connect">Connect</Link></li>
          <li><Link to="/blogs">Blogs</Link></li>
        </ul>
      </nav>
      <header className="projects-header">
        <h2>Projects</h2>
      </header>

      <section className="projects-grid" aria-label="Project list">
        {projects.map(p => (
          <article
            key={p.id}
            className="project-card"
            tabIndex={0}
            role="button"
            aria-label={`Open details for ${p.title}`}
            onClick={() => setActiveProject(p)}
            onKeyDown={(e) => { if (e.key === 'Enter') setActiveProject(p); }}
          >
            <div className="card-top">
              <h3 className="project-title">{p.title}</h3>
              <p className="project-short">{p.short}</p>
            </div>
            <div className="tech-row">
              {p.tech.map(t => <span key={t} className="tech-chip">{t}</span>)}
            </div>
          </article>
        ))}
      </section>

      {activeProject && (
        <div className="project-overlay" role="dialog" aria-modal="true">
          <div className="overlay-inner">
            <button
              className="close-btn"
              aria-label="Close project details"
              onClick={() => setActiveProject(null)}
            >
              <FaTimes />
            </button>
            <div className="overlay-images" aria-label="Project screenshots">
              <div className="image-scroll">
                {activeProject.images.map((src, i) => (
                  <img src={src} alt={`${activeProject.title} screenshot ${i+1}`} key={src} loading="lazy" />
                ))}
              </div>
            </div>
            <div className="overlay-body">
              <h2>{activeProject.title}</h2>
              <p className="overlay-desc">{activeProject.description}</p>
              <div className="overlay-tech">
                {activeProject.tech.map(t => <span key={t} className="tech-chip large">{t}</span>)}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
