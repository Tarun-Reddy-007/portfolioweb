import React, { useState } from "react";
import { Link } from "react-router-dom";
import TopNav from './TopNav';
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
                <h4>Software Engineer — Schneider Electric </h4><span>Nov 2024 - Present</span>
              </div>
              <p>Started working on the User Configurator journey for Motor Control Configurator. I am an integral part of our team working on multiple projects like HPC, PLC, Tesys Deca and Altivar Efficiency Calculators using Core Java, React.js, AWS, Docker and Github Primarily.</p>
            </div>
            <div className="experience">
              <div className="experience-header">
                <h4>Digital Marketing Intern — Apponix Technologies</h4><span>Jan-Apr 2021</span>
              </div>
              <p>Optimized SEO, performed market research, and executed campaigns improving engagement.</p>
            </div>
            <div className="experience">
              <div className="experience-header">
                <h4>Campus Ambassador — Bolt IoT</h4><span>Nov-Dec 2020</span>
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
      <TopNav />

      <section className="about-content">
        <div className="left-panel">
          <div className="photo-frame">
            <img src={me2} alt="Tarun Reddy" />
          </div>
          <p className="bio">
            I'm Tarun C Reddy — a Full Stack Developer passionate about building scalable, high-performance web applications that solve real business problems. At Schneider Electric, I’ve engineered complex configurator platforms, automated workflows using Python, and contributed to AI-driven design standardization initiatives. With a strong foundation in Java, Python, JavaScript, React, and SQL, I focus on writing clean, efficient, and maintainable code. Beyond development, I’ve led team knowledge-sharing programs, streamlined processes, and driven innovation through practical solutions that enhance productivity and user experience.
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
