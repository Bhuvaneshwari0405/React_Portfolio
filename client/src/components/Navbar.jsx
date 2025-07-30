import React from "react";

export const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top enhanced-navbar">
        <div className="container">
          <a className="navbar-brand rounded-pill px-3 py-1" href="#hero">
            Bhuvaneshwari Chinnadurai
          </a>
          <button
            className="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#navBar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navBar">
            <ul className="navbar-nav ms-auto align-items-lg-center mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#skills">
                  Skills
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#projects">
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
            <a
              href="/Bhuvaneshwari_C_Resume.pdf"
              className="btn btn-light ms-lg-3 mt-2 mt-lg-0" style={{fontWeight:"bold"}}
              download
            >
              <i className="bi bi-download me-1"></i>Download Resume
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
