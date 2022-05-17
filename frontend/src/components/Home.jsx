import React from "react";
import Slider from "./Slider";
import PreviousHistory from "./PreviousHistory";
import Recommendation from "./Recommendation";
import TodayDeal from "./TodayDeak";
import "./CSS/home.css";

function Home(props) {
  return (
    <div className={props.screenSize.width > 1800 ? "container" : ""}>
      <Slider />
      <PreviousHistory screenSize={props.screenSize} />
      <Recommendation />
      <TodayDeal screenSize={props.screenSize} />
    </div>
  );
}

export default Home;
