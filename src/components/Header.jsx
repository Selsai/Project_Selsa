// Header.jsx
import React, { useState } from "react";
import "./Header.css";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header className="header">
      <div className="logo-container">
        <img src="/src/assets/man-3262834_960_720.webp" alt="Logo Mexicain" className="header-logo" />
        <h1 className="header-title">¡Viva México!</h1>
      </div>
      <button className="nav-toggle" onClick={toggleNav} aria-label="Toggle navigation">
        <span></span>
        <span></span>
        <span></span>
      </button>
      <nav className={`nav ${isNavOpen ? 'nav-open' : ''}`}>
        <ul>
          <li><a href="#" onClick={toggleNav}>Accueil</a></li>
          <li><a href="#" onClick={toggleNav}>À propos</a></li>
          <li><a href="#" onClick={toggleNav}>Services</a></li>
          <li><a href="#" onClick={toggleNav}>Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
