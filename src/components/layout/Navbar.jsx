import React from 'react';
import '../layout/Navbar.css'; // Import the CSS file

const Navbar = () => {
  return (
    <div className="navbar-wrapper">
      <nav className="navbar">
        <ul>
          <li>
            <a href="#work">Work</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#play">Play</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a href="#resume" className="resume-link">
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
