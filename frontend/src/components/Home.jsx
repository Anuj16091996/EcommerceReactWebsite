import React from "react";
import Slider from "./Slider";
import PreviousHistory from "./PreviousHistory";
import "./CSS/home.css";
import { useState, useEffect } from "react";

function Home(props) {
  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  }
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={windowDimensions.width > 1800 ? "container" : ""}>
      <Slider />
      <PreviousHistory />
    </div>
  );
}

export default Home;
