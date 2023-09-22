import React, { useState, useEffect } from "react";
import bg1 from "../assets/BG1.jpg";
import bg2 from "../assets/ver.jpg";
import "../style/coba.css";

const Coba = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div
        style={{
          height: "300vh",
          margin: "0",
          padding: "0",
          overflow: "hidden",
          zIndex: "-1",
        }}
      >
        <div
          className="container-fluid con-img"
          style={{
            height: "130vh",
            backgroundColor: "red",
            margin: "0",
            padding: "0",
            maxWidth: "100%",
            maxHeight: "100%",
            marginBottom: "-220px",
          }}
        >
          <img
            src={bg1}
            alt="bg1"
            style={{
              width: "100%",
              height: "auto",
              transform: `scaleY(${1 - scrollPosition / 2000})`,
            }}
          ></img>
        </div>

        <div
          className="container-fluid con-img"
          style={{
            height: "120vh",
            backgroundColor: "blue",
            margin: "0",
            padding: "0",
            marginTop: "-100px",
          }}
        >
          <img
            className="object-fit-cover"
            src={bg2}
            alt="bg2"
            style={{
              width: "100%",
              height: "200vh",
              transform: `translateY(${scrollPosition / 4}px)`,
              marginTop: "-200px",
            }}
          ></img>
        </div>
        <a href="/">Hello</a>
      </div>
      <div className="position-absolute">
        <h1 className="text-light">HELOO</h1>
      </div>
    </div>
  );
};

export default Coba;
