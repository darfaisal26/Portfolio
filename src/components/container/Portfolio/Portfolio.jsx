import React, { useEffect, useState } from "react";
import "./Portfolio.scss";
import { workImages } from "../../../Data";
// import { FiEye } from "react-icons/fi";
import { motion } from "framer-motion";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Portfolio = () => {
  // const [tab, setTab] = useState({ name: "all" });
  const [works, setWorks] = useState([]);
  // const [active, setActive] = useState(0);

  useEffect(() => {
    setWorks(workImages);
  }, []);

  // const activeTab = (e, index) => {
  //   setTab({ name: e.target.textContent.toLowerCase() });
  //   setActive(index);
  // };

  return (
    <div className="container" id="portfolio">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ y: [-50, 0], opacity: 1 }}
        className="title"
      >
        <span>My Work</span>
        <h1>Projects</h1>
      </motion.div>
      {/* <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ y: [-50, 0], opacity: 1 }}
        className="buttons"
      ></motion.div> */}
      <motion.div
        initial={{ x: 0, opacity: 0 }}
        whileInView={{ x: [-250, 0], opacity: 1 }}
        transition={{ duration: 1 }}
        exit={{ opacity: 0, y: -50 }}
        className="workImages"
      >
        <Carousel className="workImages" showArrows={true}>
          {works.map((work) => {
            return (
              <div className="workImage" key={work.id}>
                <img className="img" src={work.img} alt="workImg" />
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ scale: [1, 6.1] }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="hoverLayer"
                >
                  <h1 className="projectName">{work.name}</h1>
                </motion.div>
              </div>
            );
          })}
        </Carousel>
      </motion.div>
    </div>
  );
};

export default Portfolio;
{
  /* <motion.a */
}
// href={work.link}
// whileInView={{ scale: [0, 1] }}
// whileHover={{ scale: [1, 6.1] }}
// transition={{ duration: 0.3 }}
// >
// <FiEye />
// </motion.a>
