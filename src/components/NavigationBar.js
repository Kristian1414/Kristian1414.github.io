import React from "react";
import "../style/navbar.css";
import { useNavigate } from "react-router-dom";

const NavigationBar = (props) => {
  const navigate = useNavigate();

  return (
    <nav
      className="navbar navbar-expand shadow position-relative z-1"
      ref={props.navRef}
    >
      <div className="container-fluid">
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto mx-auto">
            <li className="nav-item ms-4">
              <a
                className="nav-link custom-text-color"
                aria-current="page"
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/");
                }}
              >
                HOME
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link custom-text-color"
                href="/"
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
              <a
                className="nav-link custom-text-color"
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                  props.showAlert();
                }}
              >
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
