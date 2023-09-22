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
import BG1 from "../assets/BG1.jpg";
import BG2 from "../assets/ver.jpg";
import "../style/topBtn.css";

const MainPage = () => {
  const skillRef = useRef(null);
  const exRef = useRef(null);
  const navRef = useRef(null);

  const goto = (param) => {
    if (param === "skills") {
      window.scrollTo({
        top: skillRef.current.offsetTop,
        left: 0,
        behavior: "smooth",
      });
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

  return (
    <div
      className="App"
      style={{ height: "600vh", backgroundColor: "#757A89" }}
    >
      {/* Foto Dimulai */}
      <div
        className="container-fluid bg-dark m-0 p-0 position-absolute"
        style={{ height: "auto", overflow: "hidden" }}
      >
        <div
          className="container-fluid"
          style={{
            height: "170vh",
            backgroundColor: "#757A89",
            margin: "0",
            padding: "0",
            maxWidth: "100%",
            maxHeight: "100%",
            overflow: "hidden",
            marginBottom: "-220px",
            // transform: `scaleY(${1 + scrollPosition / 2000})`,
            transform: `translateY(${scrollPosition / 2}px)`,
          }}
        >
          <img
            src={BG1}
            alt="BG1"
            style={{
              width: "100%",
              height: "170vh",
            }}
          ></img>
        </div>

        <div
          style={{
            height: "180vh",
            backgroundColor: "blue",
            margin: "0",
            padding: "0",
            transform: `translateY(${scrollPosition / 4}px)`,
          }}
        >
          <img
            className="object-fit-cover"
            src={BG2}
            alt="BG2"
            style={{
              width: "100%",
              height: "200vh",
              marginTop: "-200px",
            }}
          ></img>
        </div>
      </div>
      {/* Foto Selesai */}

      <NavigationBar navRef={navRef} goto={goto} />

      {/* Intro Dimulai*/}
      <div className="intro-custom d-flex justify-content-center position-relative">
        <p className="text-light custom-position-text text-center fw-bold lh-sm">
          I<b style={{ color: "#01FF1F" }}>'</b>M<br />
          KRISTIAN<b style={{ color: "#01FF1F" }}>.</b>
        </p>
      </div>

      <div className="intro-custom-2 d-flex justify-content-center position-relative">
        <p className="text-light custom text-center">
          COMPUTER SCIENCE FRESH GRADUATE
          <br />
          INTERESTED IN
          <br />
          FRONTEND DEVELOPER / FULLSTACK DEVELOPER
        </p>
      </div>

      {/* Intro Selesai */}

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
      <div>
        <h1 className="custom-skills text-center text-light" ref={skillRef}>
          SKILLS
        </h1>
        <div className="container text-center">
          {/* BARIS 1 MULAI */}

          <div className="row">
            <div className="col">
              <div
                className="card mx-auto mb-lg-5 mb-4 rounded-4"
                style={{ width: "18rem" }}
              >
                <img
                  src={htmlLogo}
                  className="custom-img-html mx-auto"
                  alt="..."
                />
              </div>
            </div>
            <div className="col">
              <div
                className="card mx-auto mb-lg-5 mb-4 rounded-4"
                style={{ width: "18rem" }}
              >
                <img
                  src={cssLogo}
                  className="custom-img-css mx-auto"
                  alt="..."
                />
              </div>
            </div>
            <div class="col">
              <div
                class="card mx-auto mb-lg-5 mb-4 rounded-4"
                style={{ width: "18rem" }}
              >
                <img
                  src={jsLogo}
                  className="custom-img card-img-top"
                  alt="..."
                />
              </div>
            </div>
          </div>
          {/* BARIS 1 SELESAI */}

          {/* BARIS 2 DIMULAI */}
          <div className="row">
            <div className="col-lg-4 col-md-6 offset-lg-2 ">
              <div
                className="card mx-auto mb-lg-5 mb-4 rounded-4"
                style={{ width: "18rem" }}
              >
                <img
                  src={sqlLogo}
                  className="custom-img-sql mx-auto"
                  alt="..."
                />
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className="card mx-auto mb-lg-5 mb-4 rounded-4"
                style={{ width: "18rem" }}
              >
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

      {/* EXPERIENCE DIMULAI */}
      <div className="container-fluid custom-container-experience">
        <div className="row">
          <div className="col ">
            <h1
              className="custom-experience-text text-light text-center"
              ref={exRef}
            >
              EDUCATION
            </h1>
          </div>
        </div>
        {/* BARIS PERTAMA MULAI */}
        <div className="row">
          <div className="col">
            <h6 className="custom-years-left text-end fw-bold">2019 - 2023</h6>
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
          <div className="col-auto">
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
          <div className="col text-light"></div>
        </div>
        {/* BARIS PERTAMA SELESAI */}

        {/* BARIS KEDUA MULAI */}
        <div className="row">
          <div className="col"></div>
          <div className="col-auto">
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
          <div className="col text-light">
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
                    <b>(2016 - 2019)</b> - SMAK 2 Leadership Character Building
                    (2LCB)
                  </span>
                </li>
              </ul>
            </p>
          </div>
        </div>
        {/* BARIS KEDUA SELESAI */}
      </div>
      {/* EXPERIENCE SELESAI */}
    </div>
  );
};

AOS.init();

export default MainPage;
