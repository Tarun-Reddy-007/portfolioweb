import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import "./Certifications.css";

const certificates = [
  "https://i.imgur.com/tP0Xnbu.jpg",
  "https://i.imgur.com/bTy182E.jpg",
  "https://i.imgur.com/F7tEEMZ.jpg",
  "https://i.imgur.com/NEl3EpT.jpg",
  "https://i.imgur.com/73VojZt.jpg",
  "https://i.imgur.com/P1iXa0R.jpg",
  "https://i.imgur.com/7bxADdl.jpg",
  "https://i.imgur.com/CJPaGc5.png",
  "https://i.imgur.com/7TcFppA.png",
  "https://i.imgur.com/T8sjclG.jpg",
  "https://i.imgur.com/dgDaRFS.jpg",
  "https://i.imgur.com/p19SkJj.png",
  "https://i.imgur.com/vq3WrxD.jpg",
  "https://i.imgur.com/smrZJCm.jpg",
  "https://i.imgur.com/FhxJk0Y.png",
  "https://i.imgur.com/SrJBHGB.jpg",
  "https://i.imgur.com/zDfBJNc.png",
  "https://i.imgur.com/xBQwfXo.jpg",
  "https://i.imgur.com/NFzLikP.png",
  "https://i.imgur.com/FuIMdhu.jpg",
  "https://i.imgur.com/psna1sC.png",
  "https://i.imgur.com/A15SRvM.jpg",
  "https://i.imgur.com/nAcBhN4.png",
  "https://i.imgur.com/dVY6YjZ.png",
  "https://i.imgur.com/FrJJraq.jpg",
  "https://i.imgur.com/5NLO2Vk.jpg",
  "https://i.imgur.com/aHvCbFP.jpg",
  "https://i.imgur.com/Whw8Rre.jpg",
  "https://i.imgur.com/UiDNBiI.jpg",
  "https://i.imgur.com/I1Rvx89.jpg",
  "https://i.imgur.com/dr9ka87.jpg",
  "https://i.imgur.com/sTVGCyN.jpg",
  "https://i.imgur.com/SIzDQSs.jpg",
  "https://i.imgur.com/T18v7iP.jpg",
  "https://i.imgur.com/qhwG1bF.jpg",
  "https://i.imgur.com/GSaPasn.jpg",
  "https://i.imgur.com/9I0LGoq.png",
  "https://i.imgur.com/QusW1CU.jpg",
  "https://i.imgur.com/aykZs69.jpg",
  "https://i.imgur.com/Mh5lqWN.jpg",
  "https://i.imgur.com/Huz417H.jpg",
  "https://i.imgur.com/u9A3X5E.jpg",
  "https://i.imgur.com/zenqpSx.jpg",
  "https://i.imgur.com/r94vYX6.jpg",
  "https://i.imgur.com/dmNHp1K.jpg",
  "https://i.imgur.com/SMxP76d.png",
  "https://i.imgur.com/ZeR1c9h.jpg",
  "https://i.imgur.com/4x0EOBX.png",
  "https://i.imgur.com/g0srp11.png",
  "https://i.imgur.com/74tFQ4L.jpg",
  "https://i.imgur.com/xpVskSI.jpg",
];

const Certifications = () => {
  const [activeSrc, setActiveSrc] = useState(null);

  useEffect(() => {
    if (activeSrc) { document.body.style.overflow = 'hidden'; } else { document.body.style.overflow = 'auto'; }
    const handler = (e) => { if (e.key === 'Escape') setActiveSrc(null); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [activeSrc]);

  return (
    <div className="certifications-page">
      <nav className="top-nav">
        <div className="logo">Tarun C Reddy</div>
        <ul>
          <li><Link to="/Home">Home</Link></li>
          <li><Link to="/Aboutme">About</Link></li>
          <li><Link to="/Projects">Projects</Link></li>
          <li><Link to="/Accomplishments">Accomplishments</Link></li>
          <li><Link to="/Certifications" className="active">Certifications</Link></li>
          <li><Link to="/connect">Connect</Link></li>
          <li><Link to="/blogs">Blogs</Link></li>
        </ul>
      </nav>

      <header className="cert-header">
        <h2>Certifications</h2>
        <p className="cert-sub">Selected certificates highlighting continuous learning & specialization.</p>
      </header>

      <section className="cert-grid" aria-label="Certificates gallery">
        {certificates.map((src, i) => (
          <figure
            key={src}
            className="cert-card"
            tabIndex={0}
            role="button"
            aria-label={`Open certificate ${i + 1}`}
            onClick={() => setActiveSrc(src)}
            onKeyDown={(e) => { if (e.key === 'Enter') setActiveSrc(src); }}
          >
            <img src={src} alt={`Certificate ${i + 1}`} loading="lazy" />
          </figure>
        ))}
      </section>

      {activeSrc && (
        <div className="cert-overlay" role="dialog" aria-modal="true">
          <div className="cert-overlay-inner">
            <button className="cert-close" aria-label="Close image" onClick={() => setActiveSrc(null)}><FaTimes /></button>
            <img src={activeSrc} alt="Enlarged certificate" className="overlay-image" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Certifications;
