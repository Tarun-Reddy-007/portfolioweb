import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Aboutme.css";
import me2 from "./resources/me2.jpeg";

const Aboutme = () => {
  const [activeSection, setActiveSection] = useState("skills");

  const renderContent = () => {
    switch (activeSection) {
      case "skills":
        return (
          <ul className="skills">
            {[
              "Python","Java","JavaScript","MySQL","React.js","Node.js","Flask","MongoDB","Tensorflow","PyTorch","Machine Learning","Data Analysis","Power BI","Git/Github","Azure","Google Cloud","Digital Marketing","Project Management"
            ].map((skill, i) => (
              <li key={i}>{skill}</li>
            ))}
          </ul>
        );

      case "leadership":
        return (
          <div className="experience-list">
            <div className="experience">
              <div className="experience-header">
                <h4>NSS Student Leader</h4><span>2021–2023</span>
              </div>
              <p>Organized 30+ events, led 50+ volunteers, contributed 300+ teaching hours in 10 schools.</p>
            </div>
            <div className="experience">
              <div className="experience-header">
                <h4>Computer Programming Head, Team Vikasana</h4><span>2021–2023</span>
              </div>
              <p>Supervised 21-member team, improved workflows, and delivered multiple campus-level initiatives.</p>
            </div>
            <div className="experience">
              <div className="experience-header">
                <h4>University Cricket Captain</h4><span>2022–2023</span>
              </div>
              <p>Led fitness and skill drives, represented university in tournaments, built team culture.</p>
            </div>
          </div>
        );

      case "work":
        return (
          <div className="experience-list">
            <div className="experience">
              <div className="experience-header">
                <h4>Digital Marketing Intern — Apponix Technologies</h4><span>Jan–Apr 2021</span>
              </div>
              <p>Optimized SEO, performed market research, and executed campaigns improving engagement.</p>
            </div>
            <div className="experience">
              <div className="experience-header">
                <h4>Campus Ambassador — Bolt IoT</h4><span>Nov–Dec 2020</span>
              </div>
              <p>Executed peer marketing, created online media content, and expanded product reach.</p>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="about-container">
      <nav className="top-nav">
        <div className="logo">Tarun C Reddy</div>
        <ul>
          <li><Link to="/Home">Home</Link></li>
          <li><Link to="/Aboutme" className="active">About</Link></li>
          <li><Link to="/Projects">Projects</Link></li>
          <li><Link to="/Accomplishments">Accomplishments</Link></li>
          <li><Link to="/Certifications">Certifications</Link></li>
          <li><Link to="/connect">Connect</Link></li>
          <li><Link to="/blogs">Blogs</Link></li>
        </ul>
      </nav>

      <section className="about-content">
        <div className="left-panel">
          <div className="photo-frame">
            <img src={me2} alt="Tarun Reddy" />
          </div>
          <p className="bio">
            I’m a data scientist and full-stack developer passionate about building technology
            that simplifies life. I enjoy designing intelligent systems, solving real problems,
            and leading teams that make a difference.
          </p>
        </div>

        <div className="right-panel">
          <div className="tab-buttons">
            {["skills", "leadership", "work"].map((section) => (
              <button
                key={section}
                className={`tab-btn ${activeSection === section ? "active" : ""}`}
                onClick={() => setActiveSection(section)}
              >
                {section === "skills"
                  ? "Skills"
                  : section === "leadership"
                  ? "Leadership"
                  : "Work"}
              </button>
            ))}
          </div>
          <div className="content-box">{renderContent()}</div>
        </div>
      </section>
    </div>
  );
};

export default Aboutme;
