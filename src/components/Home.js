import React from "react";
import "./Home.css";
import TopNav from './TopNav';

const Home = () => {
  return (
    <div className="portfolio-home">
      <TopNav />

      <main className="hero-section">
        <div className="hero-text">
          <h1 className="hero-name">TARUN C Reddy</h1>
          <div className="hero-roles">
            <span className="role-badge">Web Developer</span>
            <span className="role-badge">Project Manager</span>
            <span className="role-badge">Data Scientist</span>
          </div>
          <p className="hero-desc">
            I am a full stack developer and problem solver passionate about building impactful digital experiences. From engineering scalable web solutions at Schneider Electric to leading community initiatives and winning national hackathons, I blend technology, creativity, and leadership to turn ideas into real-world innovations.
          </p>
          <a
            href="https://drive.google.com/file/d/15sMROGTRO5pzNRz6aMdOl-Mnl5BhxqFT/view?usp=sharing"
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
