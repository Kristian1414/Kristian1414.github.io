import React from "react";
import "../style/navbar.css";

const NavigationBar = (props) => {
  return (
    <nav className="navbar navbar-expand-lg shadow" ref={props.navRef}>
      <div className="container-fluid p-3">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className="nav-link custom-text-color"
                aria-current="page"
                href="/"
              >
                HOME
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link custom-text-color"
                href="/"
                role="button"
                onClick={(e) => {
                  e.preventDefault();
                  props.goto("skills");
                }}
              >
                SKILLS
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link custom-text-color"
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                  props.goto("education");
                }}
              >
                EDUCATION
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link custom-text-color" href="/coba">
                PORTOFOLIO
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
