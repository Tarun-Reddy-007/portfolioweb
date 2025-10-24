import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="portfolio-home">
      <nav className="top-nav">
        <div className="logo">Tarun C Reddy</div>
        <ul>
          <li><Link to="/Home" className="active">Home</Link></li>
          <li><Link to="/Aboutme">About</Link></li>
          <li><Link to="/Projects">Projects</Link></li>
          <li><Link to="/Accomplishments">Accomplishments</Link></li>
          <li><Link to="/Certifications">Certifications</Link></li>
          <li><Link to="/connect">Connect</Link></li>
          <li><Link to="/blogs">Blogs</Link></li>
        </ul>
      </nav>

      <main className="hero-section">
        <div className="hero-text">
          <h1 className="hero-name">Tarun C Reddy</h1>
          <div className="hero-roles">
            <span className="role-badge">Data Scientist</span>
            <span className="role-badge">Web Developer</span>
            <span className="role-badge">Project Manager</span>
          </div>
          <p className="hero-desc">
            Passionate about transforming ideas into technology, driving impact through innovation, and creating meaningful digital experiences.
          </p>
          <a
            href="https://drive.google.com/file/d/1Fz6ieamupxMaakhRyCw8Olc1hc7e3N5e/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="resume-btn"
          >
            View Resume
          </a>
        </div>

  <div className="hero-image">
          <div className="image-frame">
            <img
              src="https://i.imgur.com/Yf6qeTj.png"
              alt="Tarun Reddy"
              loading="lazy"
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
