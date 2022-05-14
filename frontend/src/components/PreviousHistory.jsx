import { Card /*Button */ } from "react-bootstrap";
import banner_one from "../images/banner_images/banner_one.png";
import "./CSS/previous.css";

function PreviousHistory(props) {
  return (
    <div className="container">
      <div className="row no-gutters ">
        <div className="col-sm-2 col-md-4 col-lg-3">
          <Card
            className={
              props.screenSize.width > 1023
                ? "shadow p-3 mb-5 bg-white rounded on-top-element"
                : "shadow p-3 mb-5 bg-white rounded"
            }
          >
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

        <div className="col-sm-2 col-md-4 col-lg-3">
          <Card
            className={
              props.screenSize.width > 1023
                ? "shadow p-3 mb-5 bg-white rounded on-top-element"
                : "shadow p-3 mb-5 bg-white rounded"
            }
          >
            <h5>Buy Again</h5>
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

        <div className="col-sm-2 col-md-4 col-lg-3">
          <Card
            className={
              props.screenSize.width > 1023
                ? "shadow p-3 mb-5 bg-white rounded on-top-element"
                : "shadow p-3 mb-5 bg-white rounded"
            }
          >
            <h5>Today's Deal</h5>
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

        <div className="col-sm-2 col-md-4 col-lg-3">
          <Card
            className={
              props.screenSize.width > 1023
                ? "shadow p-3 mb-5 bg-white rounded on-top-element"
                : "shadow p-3 mb-5 bg-white rounded"
            }
          >
            <h5>Looking for a gift?</h5>
            <p>Find personalized gift ideas for everyone on your list.</p>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default PreviousHistory;
