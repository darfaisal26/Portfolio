import React from "react";
import "./Home.scss";
import { motion } from "framer-motion";

const Home = () => {
  const moveVariants = {
    animation: {
      y: [0, -15],
      transition: {
        yoyo: Infinity,
        duration: 2,
        delay: 1,
      },
    },
  };

  return (
    <motion.div
      className="container"
      id="home"
      initial={{ y: -15, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 2,
        delay: 0.5,
      }}
    >
      <div className="profile">
        {/* <img src={portfolio} alt="portfolio" /> */}
      </div>
      <div className="profile_text">
        <h3 className="name">
          Hi, I'm <span>Faisal Nazir</span>{" "}
        </h3>
        <span className="job">Frontend Developer</span>
        <span className="text">
          Crafting Digital Experiences <br /> With{" "}
          <span className="orange">Precision, </span>
          <span className="green">Passion,</span>
          <br />
          and
          <span className="blue"> Speed</span>
        </span>
        <motion.a
          href="mailto:iamfaisal779@gmail.com"
          whileHover={{ scale: 1.1 }}
          variants={moveVariants}
          animate="animation"
        >
          connect with me
        </motion.a>
      </div>
    </motion.div>
  );
};

export default Home;
