import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import About from "./components/container/About/About";
import Home from "./components/container/Home/Home";
import Portfolio from "./components/container/Portfolio/Portfolio";
import Skills from "./components/container/Skills/Skills";
import Lottie from "lottie-react";
import groovyWalkAnimation from "../src/assets/groovyWalk.json";
import Navbar from "./components/Navbar/Navbar";
import styles from "./style.module.scss";
import progress from "../src/assets/progress.json";
import Footer from "./components/container/Footer/Footer";

const Page = ({ offset, gradient, onClick, value }) => (
  <>
    <ParallaxLayer offset={offset} speed={0.2}>
      <div className={styles.slopeBegin}></div>
    </ParallaxLayer>

    <ParallaxLayer offset={offset} speed={0.6} onClick={onClick}>
      <div className={`${styles.slopeEnd} ${styles[gradient]}`}></div>
    </ParallaxLayer>

    <ParallaxLayer
      className={`${styles.text} ${styles.number}`}
      offset={offset}
      speed={0.3}
    ></ParallaxLayer>
  </>
);

const App = () => {
  const windowSize = useRef([window.innerWidth, window.innerHeight]);
  const [length, setLength] = useState();

  useEffect(() => {
    setLength(windowSize.current[0]);
  }, [windowSize]);

  const parallax = useRef();
  return (
    <>
      <div style={{ background: "#dfdfdf" }}>
        <Parallax className="container" ref={parallax} pages={5}>
          <Page offset={0} value={1} gradient="pink" />
          <Page offset={1} value={2} gradient="teal" />
          <Page offset={2} gradient="tomato" />
          <Page offset={3} gradient="pink" />
          <Page offset={4} gradient="teal" />
          <Page offset={5} gradient="pink" />
          <ParallaxLayer offset={0} speed={0.9}>
            <Navbar />
            <Home />
          </ParallaxLayer>
          <ParallaxLayer
            style={{ display: "flex", justifyContent: "flex-start" }}
            offset={1}
          >
            <Lottie animationData={groovyWalkAnimation} />
          </ParallaxLayer>
          <ParallaxLayer offset={1} speed={length <= 600 ? 0.5 : 0.2}>
            <About />
          </ParallaxLayer>
          <ParallaxLayer offset={2} speed={length <= 600 ? 1.9 : 2}>
            <Skills />
          </ParallaxLayer>
          <ParallaxLayer speed={0.2} offset={3}>
            <Portfolio />
          </ParallaxLayer>
          <ParallaxLayer speed={0.3} offset={4}>
            <div style={{ marginLeft: "30px" }}>
              <h1 style={{ color: "white" }}>Thanks for visiting!</h1>
              <Footer />
            </div>
            <Lottie animationData={progress} />
          </ParallaxLayer>
        </Parallax>
      </div>
    </>
  );
};

export default App;
