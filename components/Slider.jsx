import React from "react";

const Slider = () => {
  return (
    <div className="container mt-3 mt-md-4">
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={0}
            className="active"
          />
          <li
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={1}
          />
          <li
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={2}
          />
        </ol>
        <div className="carousel-inner shadow-sm rounded">
          <div className="carousel-item active">
            <img
              src="/assets/slider-image/1.jpg"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="/assets/slider-image/2.jpg"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="/assets/slider-image/3.jpg"
              className="d-block w-100"
              alt="..."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
