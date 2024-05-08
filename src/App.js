import React,{useState, useEffect} from 'react';
import './App.css';
import mySelf from "./images/kristian.jpg";
import BG2 from "./images/img-con2.jpg";
import BG4 from "./images/img-con4.jpg";
import myself2 from "./images/kristian2.jpg";
import html from "./images/html.png";
import css from "./images/css.png";
import js from "./images/js.png";
import mysql from "./images/mysql.png";
import reactjs from "./images/reactjs.png";
import nodejs from "./images/nodejs.jpg";
import bpk from "./images/bpk.png";
import binus from "./images/Logo_Binus_University.png";
import { Link, scroller } from 'react-scroll';


function App() {

    const scrollToElement = (element) => {
      scroller.scrollTo(element, {
        duration: 0,
        delay: 0,
        smooth: false,
      });
    };

    const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight - 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleClick = () => {
    window.open('/CV_Kristian.pdf', '_blank');
  };



  return (
    <div>
      <div>
      {isVisible && (
        <button class="custom-btn-page" onClick={scrollToTop}>
          <i class="bi bi-arrow-up-short position-absolute top-50 start-50 translate-middle"></i>
        </button>
      )}
    </div>
      <div name="home" class="con-1 position-relative overflow-hidden"> 
        <div class="custom-navbar position-absolute top-0 start-50 translate-middle-x z-1">
            <Link
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                offset={0}
                duration={0}
                onClick={() => scrollToElement('home')}
                className="custom-nav-home text-decoration-none"
                style={{ cursor: 'pointer' }}
              >
                Home
              </Link>
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={0}
                duration={0}
                onClick={() => scrollToElement('about')}
                className="custom-nav-about text-decoration-none"
                style={{ cursor: 'pointer' }}
              >
                About Me
              </Link>
              <Link
                activeClass="active"
                to="skills"
                spy={true}
                smooth={true}
                offset={0}
                duration={0}
                onClick={() => scrollToElement('skills')}
                className="custom-nav-skills text-decoration-none"
                style={{ cursor: 'pointer' }}
              >
                Skills
              </Link>
              <Link
                activeClass="active"
                to="education"
                spy={true}
                smooth={true}
                offset={0}
                duration={0}
                onClick={() => scrollToElement('education')}
                className="custom-nav-edu text-decoration-none"
                style={{ cursor: 'pointer' }}
              >
                Education
              </Link>
        </div>     
        <div class="custom-con-title position-absolute z-1">
          <p class="custom-title1 text-light">KRISTIAN</p>
          <p class="custom-text1 text-light">Computer Science Fresh Graduate</p>
          <i class="custom-text1 text-light">Frontend Developer / Fullstack Developer</i>
        </div>     
        <img src={mySelf} alt="BG1" class="img1-custom position-fixed"></img>
      </div >
      <div name="about" class="con-2 position-relative overflow-hidden">   
          <img src={BG2} alt="BG2" class="img2-custom position-absolute"></img>
        <div class="container position-relative p-5">
        <p class="custom-title1-con2 text-light">About Me</p>
          <div class="row align-items-center">
            <div class="col-sm-12 col-lg-6 position-relative">
              <div class="img3-con bg-dark overflow-hidden position-relative start-50 top-50 translate-middle-x">
                <img src={myself2} alt="mySelf" class="img3-custom"></img>
              </div>
            </div>
            <div class="col-sm-12 col-lg-6">
            <p class="custom-text1-con2 text-light">I am a fresh graduate of BINUS University with a major in computer science, and I have obtained several certifications in various programming languages. 
              In addition to my programming skills, I have also been actively involved in organizations to enhance my communication and leadership abilities.<br/>
              Please download my CV for more comprehensive information.</p>
                <button type="button" class="custom-btn1 btn-primary" onClick={handleClick}><i class="bi bi-download"></i>&nbsp;&nbsp;CV_Kristian.pdf </button>
            </div>
          </div>
        </div>
        <div class="mycontact d-flex flex-column d-inline-flex position-absolute">
          <a class="linkedin-custom pb-1" href='https://www.linkedin.com/in/kristian-kristian-08a2191ba/' target='blank_'><i class="bi bi-linkedin"></i></a>
          <a class="wa-custom pb-1" href='https://wa.me/6287822033377' target='blank_'><i class="bi bi-whatsapp"></i></a>
          <a class="gmail-custom" href='mailto:kristian14214@gmail.com' target='blank_'><i class="bi bi-envelope-at-fill"></i></a>
        </div>
      </div>
      <div name="skills" class="con-3 position-relative overflow-hidden">
        <div class="custom-con-card p-4">
        <p class="custom-title1-con3 text-light">Skills</p>
          <div class="row">
            <div class="col col-md-4 col-xl-5 col-xxl-4 custom-col-html d-flex">
            <div class="custom-card">
              <img src={html} class="img-custom-card card-img-top" alt="..."/>
            </div>
            </div>
            <div class="col col-md-4 col-xl-2 col-xxl-4 custom-col-css d-flex">
              <div class="custom-card">
                <img src={css} class="img-custom-card card-img-top " alt="..."/>
              </div>
            </div>
            <div class="col col-md-4 col-xl-5 col-xxl-4 custom-col-js d-flex">
              <div class="custom-card">
                <img src={js} class="img-custom-card-js card-img-top" alt="..."/>
              </div>
            </div>
            <div class="col col-md-4 col-xl-5 col-xxl-4 custom-col-react d-flex">
            <div class="custom-card">
              <img src={reactjs} class="img-custom-card card-img-top" alt="..."/>
            </div>
            </div>
            <div class="col col-md-4 col-xl-2 col-xxl-4 custom-col-node d-flex">
              <div class="custom-card">
                <img src={nodejs} class="img-custom-card card-img-top " alt="..."/>
              </div>
            </div>
            <div class="col col-md-4 col-xl-5 col-xxl-4 custom-col-sql d-flex">
              <div class="custom-card">
                <img src={mysql} class="img-custom-card card-img-top" alt="..."/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div name="education" class="con4 position-relative overflow-hidden">
      <img src={BG4} alt="BG4" class="bg4-custom position-absolute"></img>
        <div class="container text-light pt-4">
        <p class="custom-title1-con3 text-light position-relative">Education</p>
          <div class="row justify-content-evenly">
            <div class="col-sm-12 col-lg-6 col-xl-6 position-relative">
              <div class="custom-card-edu">
                <img src={binus} class="img-custom-card card-img-top" alt="..."/>
              </div>
              <div class="">
                <h4 class="custom-school mt-4 text-center">BINUS UNIVERSITY BANDUNG <br/> (2019 - 2023)</h4>
                <p class="custom-major text-center m-0 pt-2">Major: Computer Science</p>
                <p class="custom-title-orga m-0 pt-2">Organizations:</p>
                <ol class="list-group-numbered custom-body-orga m-0 p-0">
                  <li class="list-group-item">(2020) - Freshmen Leader</li>
                  <li class="list-group-item">(2020) - Freshmen Partner</li>
                </ol>
              </div>
            </div>
            <div class="col-sm-12 col-lg-6 col-xl-6 position-relative">
              <div class="custom-card-edu">
              <img src={bpk} class="img-custom-card card-img-top" alt="..."/>
              </div>
              <div class="custom-body-edu">
                <h5 class="custom-school mt-4 text-center">SMAK 2 BPK PENABUR BANDUNG <br/> (2016 - 2019)</h5>
                <p class="custom-major text-center m-0 pt-2">Major: IPA / Science</p>
                <p class="custom-title-orga m-0 pt-2">Organizations:</p>
                <ol class="list-group-numbered custom-body-orga m-0 p-0">
                  <li class="list-group-item">(2018 - 2019) - OSIS PNIEL</li>
                  <li class="list-group-item">(2016 - 2019) - SMAK 2 Leadership Character Building (2LCB)</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
