import { Card, Button } from "react-bootstrap";
import banner_one from "../images/banner_images/banner_one.png";
import "./CSS/previous.css";

function PreviousHistory(props) {
  return (
    <div className="mb-5 col-xl-4 ">
      <Card className="card-design ">
        <Card.Img variant="top" src={banner_one} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default PreviousHistory;
