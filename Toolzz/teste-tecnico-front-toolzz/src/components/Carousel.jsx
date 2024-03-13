import { useState } from "react";
import PropTypes from "prop-types";
import "../styles/Carousel.css";
import arrowLeft from "../assets/icons/arrowLeft.svg";
import arrowLeftWhite from "../assets/icons/arrowLeftWhite.svg";
import arrowRight from "../assets/icons/arrowRight.svg";
import arrowRightWhite from "../assets/icons/arrowRightWhite.svg";

const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? prevIndex : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? prevIndex : prevIndex - 1
    );
  };

  return (
    <div className="carousel-container">
      <div className="carousel">
        <div className="carousel-items">
          <div className="slide active">
            <p>{items[currentIndex].title}</p>
            <h3>{items[currentIndex].subtitle}</h3>
            <h4>{items[currentIndex].description}</h4>
          </div>
        </div>
        <div className="carousel-controlers">
          <div className="indicators">
            {items.map((item, index) => (
              <div
                key={index}
                className={`indicator ${
                  currentIndex === index ? "active" : ""
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
          <button
            className="prev"
            onClick={prevSlide}
            disabled={currentIndex === 0}
          >
            <img
              src={`${currentIndex === 0 ? arrowRight : arrowRightWhite}`}
              alt="Previous"
            />
          </button>
          <button
            className="next"
            onClick={nextSlide}
            disabled={currentIndex === items.length - 1}
          >
            <img
              src={`${
                currentIndex === items.length - 1 ? arrowLeft : arrowLeftWhite
              }`}
              alt="Previous"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

Carousel.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      subtitle: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Carousel;
