import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './TopNav.css';

const TopNav = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // Close drawer on route change
  useEffect(() => { setOpen(false); }, [location.pathname]);

  // Prevent body scroll when menu open
  useEffect(() => {
    if (open) { document.body.style.overflow = 'hidden'; } else { document.body.style.overflow = 'auto'; }
  }, [open]);

  const links = [
    { to: '/Home', label: 'Home' },
    { to: '/Aboutme', label: 'About' },
    { to: '/Projects', label: 'Projects' },
    { to: '/Accomplishments', label: 'Accomplishments' },
    { to: '/Certifications', label: 'Certifications' },
    { to: '/connect', label: 'Connect' },
    { to: '/blogs', label: 'Blogs' },
  ];

  return (
    <nav className="top-nav" aria-label="Main navigation">
      <div className="logo">TARUN.</div>
      <button
        className="nav-toggle"
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        onClick={() => setOpen(o => !o)}
      >
        {open ? <FaTimes /> : <FaBars />}
      </button>
      <ul className="nav-links">
        {links.map(l => (
          <li key={l.to}>
            <Link className={location.pathname === l.to ? 'active' : ''} to={l.to}>{l.label}</Link>
          </li>
        ))}
      </ul>
      {open && (
        <div className="mobile-drawer" role="dialog" aria-modal="true">
          <ul>
            {links.map(l => (
              <li key={l.to}>
                <Link className={location.pathname === l.to ? 'active' : ''} to={l.to}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default TopNav;
