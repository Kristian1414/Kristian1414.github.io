import React, { useRef, useState, useEffect } from "react";
import NavigationBar from "./NavigationBar";
import "../style/Intro.css";
import "../style/Resume.css";
import filePDF from "../assets/CV_Kristian.pdf";
import { BsDownload } from "react-icons/bs";
import { FiArrowUp } from "react-icons/fi";
import "../style/Skills.css";
import htmlLogo from "../assets/html.png";
import cssLogo from "../assets/css.png";
import jsLogo from "../assets/js.png";
import sqlLogo from "../assets/MySQL.png";
import reactLogo from "../assets/reactJs.png";
import "../style/experience.css";
import AOS from "aos";
import "aos/dist/aos.css";
import mySelf from "../assets/mySelf.png";
import BG2 from "../assets/BG2.jpg";
import "../style/topBtn.css";
import "../style/img.css";
import BG3 from "../assets/BG3.jpg";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import { useNavigate } from "react-router-dom";

const MainPage = () => {
  const skillRef = useRef(null);
  const exRef = useRef(null);
  const navRef = useRef(null);

  const goto = (param) => {
    if (param === "skills") {
      const skillElement = skillRef.current;
      if (skillElement) {
        const rect = skillElement.getBoundingClientRect();
        window.scrollTo({
          top: rect.top + window.scrollY,
          left: 0,
          behavior: "smooth",
        });
      }
    } else if (param === "education") {
      window.scrollTo({
        top: exRef.current.offsetTop,
        left: 0,
        behavior: "smooth",
      });
    } else {
      window.scrollTo({
        top: navRef.current.offsetTop,
        left: 0,
        behavior: "smooth",
      });
    }
  };

  const downloadCv = () => {
    window.open(filePDF, "_blank");
  };

  const [scrollPosition, setScrollPosition] = useState(0);
  const [onScroll, setOnScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
      if (window.scrollY >= 294) {
        setOnScroll(true);
      } else {
        setOnScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [width, setWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const navigate = useNavigate();

  const showAlert = () => {
    confirmAlert({
      title: "Announcement",
      closeOnClickOutside: false,
      message: (
        <div>
          My other portfolios are currently in the process of being developed.
          Please be patient, thank you for your understanding !
        </div>
      ),
      buttons: [
        {
          label: "OK",
          onClick: (e) => {
            navigate("/");
          },
        },
      ],
    });
  };

  return (
    <div
      className="App"
      style={{
        backgroundColor: "#757A89",
        overflow: "hidden",
      }}
    >
      <div className="container-fluid custom-con m-0 p-0">
        <NavigationBar showAlert={showAlert} navRef={navRef} goto={goto} />
        {/* Foto Dimulai */}
        <div className="con1-custom ">
          <img
            className={width < 768 ? "img-custom-small" : "img-custom"}
            style={
              width < 768
                ? {}
                : {
                    transform: `translateY(${scrollPosition / 2}px)`,
                  }
            }
            src={mySelf}
            alt="myPhoto"
          ></img>
        </div>
        {/* Foto Selesai */}

        {/* Intro Dimulai*/}
        <div className="position-relative z-1">
          <div className="intro-custom d-md-flex justify-content-center">
            <p className="text-light custom-position-text ms-4 text-md-center fw-bold lh-sm">
              I<b style={{ color: "#01FF1F" }}>'</b>M<br />
              KRISTIAN<b style={{ color: "#01FF1F" }}>.</b>
            </p>
          </div>

          <div className="intro-custom-2 d-md-flex justify-content-center">
            <p className="text-light custom  text-center">
              COMPUTER SCIENCE FRESH GRADUATE
              <br />
              INTERESTED IN
              <br />
              FRONTEND DEVELOPER / FULLSTACK DEVELOPER
            </p>
          </div>
        </div>
        {/* Intro Selesai */}
      </div>

      <div className="container-fluid custom-con2 bg-dark p-0 m-0">
        {/* Foto Dimulai */}
        <div className="con2-custom">
          <img
            className="img2-custom"
            style={{
              transform: `translateY(${-scrollPosition / 5}px)`,
            }}
            src={BG2}
            alt="myPhoto"
          ></img>
        </div>
        {/* Foto Selesai */}

        {/* RESUME MULAI */}

        <div className="resume mx-auto rounded-2 shadow-lg position-relative">
          <p className="custom-size lh-lg text-center">
            I am a fresh graduate of BINUS University with a major in computer
            science, and I have obtained several certifications in various
            programming languages. In addition to my programming skills, I have
            also been actively involved in organizations to enhance my
            communication and leadership abilities.
            <br />
            <br />
            Please download my CV for more comprehensive information.
          </p>

          <button
            type="button"
            className="btn btn-custom d-flex mx-auto border-2 border-success rounded-0"
            onClick={downloadCv}
          >
            <BsDownload className="mt-1" />
            &nbsp;&nbsp;CV_Kristian.pdf
          </button>
        </div>

        {/* RESUME SELESAI */}

        {/* SKILLS DIMULAI */}
        <div className="position-relative">
          <h1
            className="custom-skills-h1 text-center text-light"
            ref={skillRef}
          >
            SKILLS
          </h1>
          <div className="container text-center">
            {/* BARIS 1 MULAI */}
            <div className="row">
              <div className="col">
                <div className="square-size mx-auto mb-lg-5 mb-4 rounded-4 bg-light">
                  <img src={htmlLogo} className="custom-img-html" alt="..." />
                </div>
              </div>
              <div className="col">
                <div className="square-size mx-auto mb-lg-5 mb-4 rounded-4 bg-light">
                  <img src={cssLogo} className="custom-img-css" alt="..." />
                </div>
              </div>
              <div className="col">
                <div className="square-size mb-lg-5 mb-4 mx-auto rounded-4 bg-light">
                  <img src={jsLogo} className="custom-img" alt="..." />
                </div>
              </div>
            </div>
            {/* BARIS 1 SELESAI */}

            {/* BARIS 2 DIMULAI */}
            <div className="row">
              <div className="col-4 offset-lg-2 offset-2">
                <div className="square-size mx-auto mb-lg-5 mb-4 rounded-4 bg-light">
                  <img
                    src={sqlLogo}
                    className="custom-img-sql mx-auto"
                    alt="..."
                  />
                </div>
              </div>
              <div className="col-4">
                <div className="square-size mx-auto mb-lg-5 mb-4 rounded-4 bg-light">
                  <img
                    src={reactLogo}
                    className="custom-img-react mx-auto"
                    alt="..."
                  />
                </div>
              </div>
            </div>
          </div>
          {/* BARIS 2 SELESAI */}
        </div>
        {/* SKILLS SELESAI */}
      </div>

      {/* BTN Dimulai */}
      {onScroll ? (
        <div
          className="top-Btn rounded-circle shadow-lg d-flex align-items-center justify-content-center"
          href="/"
          role="button"
          onClick={(e) => {
            e.preventDefault();
            goto("nav");
          }}
        >
          <FiArrowUp className="arr-style" />
        </div>
      ) : (
        <></>
      )}

      {/* BTN Selesai */}

      {/* EDUCATION DIMULAI */}
      <div
        className="container-fluid custom-container-experience bg-dark m-0 p-0"
        ref={exRef}
      >
        <div className="container-fluid custom-con3 overflow-hidden position-absolute m-0 p-0">
          <img
            className="img3-custom object-fit-cover"
            src={BG3}
            alt="BG3"
          ></img>
        </div>

        <div className="position-relative">
          <div className="row">
            <div className="col">
              <h1 className="custom-experience-text text-light text-center">
                EDUCATION
              </h1>
            </div>
          </div>
          {/* BARIS PERTAMA MULAI */}
          <div className="row">
            <div className="col text-ex-custom">
              <h6 className="custom-years-left text-end fw-bold">
                2019 - 2023
              </h6>
              <h4 className="custom-edu-left text-light text-end">
                BINUS UNIVERSITY Bandung
              </h4>
              <h6 className="custom-jurusan-left text-light text-end">
                COMPUTER SCIENCE
              </h6>
              <p className="custom-penjelasan-left text-light text-end ls-2">
                Organizations:
                <ul className="list-unstyled">
                  <li className="d-flex justify-content-end">
                    <span>
                      Freshmen Leader (FL) - <b>(2020)</b>
                    </span>
                  </li>
                  <li className="d-flex justify-content-end">
                    <span>
                      Freshmen Partner (FP) - <b>(2020)</b>
                    </span>
                  </li>
                </ul>
              </p>
            </div>
            <div className="col-auto custom-col">
              <div
                className="rounded-circle"
                style={{
                  width: "17px",
                  height: "17px",
                  backgroundColor: "#01FF1F",
                  marginLeft: "-7px",
                  position: "absolute",
                }}
              ></div>
              <div
                className="rounded mx-auto"
                data-aos="fade-down"
                data-aos-delay="100"
                data-aos-duration="1000"
                style={{
                  width: "3px",
                  height: "100%",
                  backgroundColor: "#01FF1F",
                }}
              ></div>
            </div>
            <div className="col custom-col-kosong"></div>
          </div>
          {/* BARIS PERTAMA SELESAI */}

          {/* BARIS KEDUA MULAI */}
          <div className="row">
            <div className="col custom-col-kosong"></div>
            <div className="col-auto custom-col">
              <div
                className="rounded-circle"
                style={{
                  width: "17px",
                  height: "17px",
                  backgroundColor: "#01FF1F",
                  marginLeft: "-7px",
                  position: "absolute",
                }}
              ></div>
              <div
                className="rounded mx-auto"
                data-aos="fade-down"
                data-aos-delay="220"
                data-aos-duration="1000"
                style={{
                  width: "3px",
                  height: "100%",
                  backgroundColor: "#01FF1F",
                }}
              ></div>
            </div>
            <div className="col text-ex-custom text-light">
              <h6 className="custom-years-right text-start fw-bold">
                2016 - 2019
              </h6>
              <h4 className="custom-edu-right text-light text-start">
                SMAK 2 BPK PENABUR Bandung
              </h4>
              <h6 className="custom-jurusan-right text-light text-start">
                IPA / Science
              </h6>
              <p className="custom-penjelasan-right text-light text-start ls-2">
                Organizations:
                <ul className="list-unstyled">
                  <li className="d-flex justify-content-start">
                    <span>
                      <b>(2018 - 2019)</b> - OSIS PNIEL
                    </span>
                  </li>
                  <li className="d-flex justify-content-start">
                    <span>
                      <b>(2016 - 2019)</b> - SMAK 2 Leadership Character
                      Building <br />
                      (2LCB)
                    </span>
                  </li>
                </ul>
              </p>
            </div>
          </div>
          {/* BARIS KEDUA SELESAI */}
        </div>
      </div>
      {/* EDUCATION SELESAI */}
    </div>
  );
};

AOS.init();

export default MainPage;
