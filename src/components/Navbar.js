import React from 'react';
import './Navbar.css'; // for styling (optional)

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">🌐 MyApp</div>
      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
      <button >Contact Me</button>
    </nav>
  );
}

export default Navbar;
