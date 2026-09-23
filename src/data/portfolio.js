import Html from "../assets/images/html.png";
import Css from "../assets/images/css.png";
import JS from "../assets/images/js.png";
import NodeJs from "../assets/images/NodeJs.png";
import Mysql from "../assets/images/MySQL.png";
import Reactjs from "../assets/images/reactJs.png";
import Tailwind from "../assets/images/Tailwind.png";
import Bootstrap from "../assets/images/bootstrap.png";
import Figma from "../assets/images/Figma.png";
import Photoshop from "../assets/images/photoshop.png";
import Chamy from "../assets/images/chamytwins.jpg";
import Clinique from "../assets/images/clinique.JPG";
import Frontline from "../assets/images/frontline.jpg";
import CuttingEdge from "../assets/images/cuttingedge.jpg";

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export const roles = [
  "Website Developer",
  "Fullstack Developer",
  "Frontend Developer",
];

export const skillGroups = [
  {
    title: "Frontend",
    items: [
      { name: "HTML", logo: Html },
      { name: "CSS", logo: Css },
      { name: "JavaScript", logo: JS },
      { name: "React", logo: Reactjs },
      { name: "Tailwind CSS", logo: Tailwind },
      { name: "Bootstrap", logo: Bootstrap },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Node.js", logo: NodeJs },
      { name: "MySQL", logo: Mysql },
    ],
  },
  {
    title: "Design",
    items: [
      { name: "Figma", logo: Figma },
      { name: "Photoshop", logo: Photoshop },
    ],
  },
];

export const projects = [
  {
    title: "Frontline Worship",
    description:
      "Official website for the worship ministry of IFGF Bandung, with a live recording countdown, ticketing, album and song pages, and a bilingual English/Indonesian experience.",
    image: Frontline,
    tech: ["JavaScript", "React", "CSS"],
    url: "https://frontlineworship.co.id/",
  },
  {
    title: "Cutting Edge Academy",
    description:
      "Website for a Christian leadership learning program, showcasing its courses, programs, scholarships, and alumni, with online registration.",
    image: CuttingEdge,
    tech: ["React", "Redux", "Bootstrap", "Axios"],
    url: "https://cuttingedge.academy/",
  },
  {
    title: "ChamyTwins Company Profile",
    description:
      "Bringing ChamyTwins' vision to life with an engaging digital experience, born from a passion for chameleons.",
    image: Chamy,
    tech: ["JavaScript", "React", "Bootstrap"],
    url: "https://chamytwins.github.io/ChamyTwins-Website/",
  },
  {
    title: "Clinique Online Reservation",
    description:
      "Simplifying clinic appointments with a seamless and convenient online reservation experience, making healthcare more accessible.",
    image: Clinique,
    tech: ["JavaScript", "React", "Bootstrap"],
    url: "https://clinique1414.github.io/Clinique.github.io/",
  },
];

export const contact = {
  email: "kristian14214@gmail.com",
  socials: [
    {
      label: "Instagram",
      icon: "bi-instagram",
      url: "https://www.instagram.com/kristian14_?igsh=Z2FsNW5nYjBqa2s4",
    },
    {
      label: "LinkedIn",
      icon: "bi-linkedin",
      url: "https://www.linkedin.com/in/kristian-kristian-08a2191ba/",
    },
  ],
};
