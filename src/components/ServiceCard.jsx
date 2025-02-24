import { useState, useEffect } from "react";
import Slider from "react-slick";
import { assets } from "../assets/assets";
import ServiceData from "../data/ServiceData";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const ServiceCard = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    rows: 2,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <div className="serviceCard-container">
      {isMobile ? (
        <div className="serviceCard-list">
          {ServiceData.map((service, index) => (
            <Link
              to={`/service/${service.id}`}
              key={index}
              className="serviceCard-main"
            >
              <div className="serviceCard-img">
                <img src={assets.s1} alt="Service Icon" />
              </div>
              <div className="serviceCard-content">
                <h1>{service.name}</h1>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <Slider {...settings}>
          {ServiceData.map((service, index) => (
            <Link
              to={`/service/${service.id}`}
              key={index}
              className="serviceCard-main"
            >
              <div className="serviceCard-img">
                <img src={assets.s1} alt="Service Icon" />
              </div>
              <div className="serviceCard-content">
                <h1>{service.name}</h1>
              </div>
            </Link>
          ))}
        </Slider>
      )}
    </div>
  );
};

export default ServiceCard;
