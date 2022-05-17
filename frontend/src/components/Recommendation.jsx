import { Card /*Button */ } from "react-bootstrap";
import "./CSS/recommendation.css";
import banner_one from "../images/banner_images/banner_one.png";

function Recommendation(props) {
  return (
    <div className="container ">
      <div className="row no-gutters ">
        <div className="col-sm-2 col-md-6 col-lg-6 mb-5">
          <Card className="shadow p-3 mb-5 bg-white rounded margin-recommendation ">
            <h5>Keep shopping for</h5>
            <Card.Img variant="top" src={banner_one} />
            <Card.Body>
              {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
          </Card>
        </div>

        <div className="col-sm-2 col-md-3 col-lg-3 mb-5">
          <Card className="shadow p-3 mb-5 bg-white rounded margin-recommendation ">
            <h5>Keep shopping for</h5>
            <Card.Img variant="top" src={banner_one} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
          </Card>
        </div>

        <div className="col-sm-2 col-md-3 col-lg-3 mb-5">
          <Card className="shadow p-3 mb-5 bg-white rounded margin-recommendation ">
            <h5>Keep shopping for</h5>
            <Card.Img variant="top" src={banner_one} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Recommendation;
