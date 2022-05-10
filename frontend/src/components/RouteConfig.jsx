import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Header from "./Header";
import Footer from "./Footer";

function RouteConfig(props) {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
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
