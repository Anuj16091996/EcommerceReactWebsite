import { Carousel } from "react-bootstrap";
import banner_one from "../images/banner_images/banner_one.png";
import banner_two from "../images/banner_images/banner_two.png";
import banner_three from "../images/banner_images/banner_three.png";

function Slider() {
  return (
    <div className="mt-5 pt-4">
      <Carousel fade>
        <Carousel.Item>
          <img className="d-block w-100 " src={banner_one} alt="First slide" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={banner_two} alt="Second slide" />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={banner_three} alt="Third slide" />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Slider;
