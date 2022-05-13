import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Header from "./Header";
import Footer from "./Footer";
import { useState, useEffect } from "react";

function RouteConfig(props) {
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
    <div className="">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home screenSize={windowDimensions} />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default RouteConfig;

//To Create Tabs

// import Tab from "react-bootstrap/Tab";
// import Tabs from "react-bootstrap/Tabs";
{
  /* <div className="component">
<Tabs
  defaultActiveKey="profile"
  id="uncontrolled-tab-example"
  className="mb-3"
>
  <Tab eventKey="home" title="Home"></Tab>
  <Tab eventKey="profile" title="Profile"></Tab>
  <Tab eventKey="contact" title="Contact"></Tab>
</Tabs>
</div> */
}
