import {
  FaHtml5,
  FaCss3,
  FaReact,
  FaPhoneAlt,
  FaUser,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaDribbble,
  FaInstagram,
  FaLinkedin,
  FaMailBulk,
  FaGithub,
} from "react-icons/fa";

import { SiTailwindcss } from "react-icons/si";
import { DiJavascript } from "react-icons/di";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMui } from "react-icons/si";
import { BsMedium } from "react-icons/bs";
import { TbBrandReactNative } from "react-icons/tb";
import TerraPraxis from "./assets/TerraPraxis.jpg";
import Portfolio from "./assets/Portfolio.jpg";
import Currinda from "./assets/Currinda.jpg";
import DMVentures from "./assets/DMVentures.jpg";
import CuriousTitans from "./assets/CuriousTitans.jpg";
import GetUnitronic from "./assets/GetUnitronic.jpg";
import two from "./assets/portfolio/1.png";
import three from "./assets/portfolio/2.png";
import four from "./assets/portfolio/3.png";
import five from "./assets/portfolio/4.png";
import six from "./assets/portfolio/5.png";
import seven from "./assets/portfolio/6.png";
import eight from "./assets/portfolio/7.png";
import nine from "./assets/portfolio/8.png";
import ten from "./assets/portfolio/9.png";
import ele from "./assets/portfolio/10.png";
import twe from "./assets/portfolio/11.png";
import twelve from "./assets/portfolio/12.jpg";
import thirteen from "./assets/portfolio/13.jpg";
import forteen from "./assets/portfolio/14.png";
import admin from "./assets/portfolio/adminappointments.png";
import adminuser from "./assets/portfolio/adminusermanage.png";
import parentbook from "./assets/portfolio/Parentbook.png";
import parentview from "./assets/portfolio/parentview.png";
import teacherview from "./assets/portfolio/teacherview.png";
import pku from "./assets/portfolio/pku.png";
import tt from "./assets/portfolio/tt.png";

export const navLinks = ["home", "about", "skills", "portfolio"];

export const socialIcons = [
  <FaDribbble />,
  <FaInstagram />,
  <FaLinkedin />,
  <BsMedium />,
];

export const bios = [
  {
    id: 1,
    icon: <FaUser />,
    key: "Name",
    value: "Faisal Nazir",
  },
  {
    id: 2,
    icon: <FaPhoneAlt />,
    key: "Phone",
    value: "+91-9596438189",
  },
  {
    id: 3,
    icon: <FaMailBulk />,
    key: "Email",
    value: "iamfaisal779@gmail.com",
  },
];

export const icons = [
  { icon: <FaHtml5 />, name: "HTML" },
  { icon: <FaCss3 />, name: "CSS" },
  { icon: <DiJavascript />, name: "JavaScript" },
  { icon: <FaReact />, name: "React" },
  { icon: <SiTailwindcss />, name: "TailwindCSS" },
  { icon: <TbBrandNextjs />, name: "NextJS" },
  { icon: <TbBrandReactNative />, name: "React Native" },
  { icon: <FaGithub />, name: "Github" },
];

export const experiences = [
  {
    id: 1,
    year: "March 2023 - August 2023",
    position: "Intern",
    company: "Aiiots Geek World ",
  },
  {
    id: 2,
    year: "Sep 2023 - Present",
    position: "FrontEnd Developer",
    company: "Aiiots Geek World",
  },
];
export const finishes = [
  {
    id: 1,
    number: "1+ ",
    itemName: "Years Of Experience",
  },
  {
    id: 2,
    number: "3",
    itemName: "Projects Done",
  },
];

export const workImages = [
  {
    id: 1,
    img: two,
    name: "furniture",
    // link: "https://nickelfox.currinda2.com/",
  },
  {
    id: 2,
    img: three,
    name: "DMVentures",
    category: "",
    // link: "https://stage.dmventures.foxlabs.in/marketing/dashboard/",
  },
  {
    id: 3,
    img: tt,
    name: "Treasury Today",
    // link: "https://terrapraxisrepower.com/",
  },
  // {
  //   id: 4,
  //   img: six,
  //   name: "Curious Titans",
  //   // link: "https://dev.curioustitans.foxlabs.in/",
  // },
  {
    id: 5,
    img: pku,
    name: "PKU",
    link: "https://admin-dev.getunitronic.com/",
  },
  {
    id: 6,
    img: admin,
    name: "Ptm Admin",
    // link: "",
  },
  {
    id: 7,
    img: adminuser,
    name: "Ptm User Management",
    // link: "https://terrapraxisrepower.com/",
  },
  {
    id: 8,
    img: parentbook,
    name: "Parent Book Ptm",
    // link: "https://dev.curioustitans.foxlabs.in/",
  },
  {
    id: 9,
    img: parentview,
    name: "Mangage Appointments",
    // link: "https://admin-dev.getunitronic.com/",
  },
  {
    id: 10,
    img: teacherview,
    name: "Teacher view",
    // link: "",
  },
];

export const workNavs = ["All", "Web", "App", "Design"];

export const contacts = [
  {
    id: 1,
    icon: <FaMapMarkerAlt />,
    infoText: "16 Road, TharKayTa , Yangon",
  },
  {
    id: 2,
    icon: <FaPaperPlane />,
    infoText: "abee02@gmail.com",
  },
  {
    id: 3,
    icon: <FaPhoneAlt />,
    infoText: "+959-883-271-929",
  },
];
