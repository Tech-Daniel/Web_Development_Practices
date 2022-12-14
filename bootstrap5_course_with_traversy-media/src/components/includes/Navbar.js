import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-3 fixed-top">
      <div className="container">
        <a href="#" className="navbar-brand">Frontend Development</a>
        <button 
          type="button"
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navmenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navmenu">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a href="#projects" className="nav-link">My Projects</a>
            </li>
            <li className="nav-item">
              <a href="#questions" className="nav-link">FAQ</a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-link">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
};