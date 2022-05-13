import React from "react";
import Slider from "./Slider";
import PreviousHistory from "./PreviousHistory";
import "./CSS/home.css";
import { useState, useEffect } from "react";

function Home(props) {
  return (
    <div className={props.screenSize.width > 1800 ? "container" : ""}>
      <Slider />
      {console.log()}
      <PreviousHistory />
    </div>
  );
}

export default Home;
