import React from "react";
import Slider from "./Slider";
import PreviousHistory from "./PreviousHistory";
import "./CSS/home.css";

function Home(props) {
  return (
    <div className={props.screenSize.width > 1800 ? "container" : ""}>
      <Slider />
      <PreviousHistory screenSize={props.screenSize} />
    </div>
  );
}

export default Home;
