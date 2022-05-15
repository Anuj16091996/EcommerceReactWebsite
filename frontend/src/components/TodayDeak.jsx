import React from "react";
import Slider from "react-slick";
import "./CSS/product_slider.css";
import { Card /*Button */ } from "react-bootstrap";
import banner_one from "../images/banner_images/banner_one.png";

export default function TodayDeal(props) {
  //   render() {
  const settings = {
    className: "center",
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };
  return (
    <div className="container mb-5">
      <div className="row no-gutters ">
        <Slider {...settings}>
          {[1, 2, 3, 4, 5].map((index, item) => {
            return (
              <div key={index} className="col-sm-2 col-md-4 col-lg-3 px-5">
                <Card className="shadow  mb-5 bg-white rounded">
                  <h5>Keep shopping for</h5>
                  <Card.Img variant="top" src={banner_one} />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    {/* <Button variant="primary">Go somewhere</Button> */}
                  </Card.Body>
                </Card>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
  //   }
}
