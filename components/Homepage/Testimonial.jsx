import React from "react";
import Slider from "react-slick";

const Testimonial = () => {
  const slickSettings = {
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="container mt-5 mt-md-5">
      <div className="row">
        <div className="col-12 col-md-8 mt-3 mt-md-5 d-flex flex-column">
          <p className="fs-2 mt-2 mt-md-0 mb-3 mb-md-4 text-center">
            What people’s are saying
          </p>
          <Slider {...slickSettings}>
            <div className="row justify-content-center mt-2 mt-md-3">
              <p className="text-center">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aspernatur deleniti fugiat perspiciatis repudiandae velit! Lorem
                ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur
                deleniti fugiat perspiciatis repudiandae velit! Aspernatur
                deleniti fugiat perspiciatis repudiandae velit! Lorem ipsum
                dolor sit amet, consectetur adipisicing elit.
              </p>
              <div className="d-flex justify-content-center">
                <img
                  src="/assets/testimonial image.png"
                  className="rounded img-thumbnail size m-2"
                  alt="..."
                />
                <p className="m-2">
                  <a className="fs-6">Sabid Hasan</a>
                  <br />
                  Co-founder at DUONEOS
                </p>
              </div>
            </div>
            <div className="row justify-content-center mt-2 mt-md-3">
              <p className="text-center">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aspernatur deleniti fugiat perspiciatis repudiandae velit! Lorem
                ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur
                deleniti fugiat perspiciatis repudiandae velit! Aspernatur
                deleniti fugiat perspiciatis repudiandae velit! Lorem ipsum
                dolor sit amet, consectetur adipisicing elit.
              </p>
              <div className="d-flex justify-content-center">
                <img
                  src="/assets/testimonial image.png"
                  className="rounded img-thumbnail size m-2"
                  alt="..."
                />
                <p className="m-2">
                  <a className="fs-6">Sabid Hasan</a>
                  <br />
                  Co-founder at DUONEOS
                </p>
              </div>
            </div>
            <div className="row justify-content-center mt-2 mt-md-3">
              <p className="text-center">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aspernatur deleniti fugiat perspiciatis repudiandae velit! Lorem
                ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur
                deleniti fugiat perspiciatis repudiandae velit! Aspernatur
                deleniti fugiat perspiciatis repudiandae velit! Lorem ipsum
                dolor sit amet, consectetur adipisicing elit.
              </p>
              <div className="d-flex justify-content-center">
                <img
                  src="/assets/testimonial image.png"
                  className="rounded img-thumbnail size m-2"
                  alt="..."
                />
                <p className="m-2">
                  <a className="fs-6">Sabid Hasan</a>
                  <br />
                  Co-founder at DUONEOS
                </p>
              </div>
            </div>
          </Slider>
        </div>
        <div className="col-12 col-md-4 mt-3 mt-md-5 align">
          ​
          <picture>
            <source srcSet="assets/testimonial.png" type="image/svg+xml" />
            <img
              src="/assets/testimonial.png"
              className="rounded img-fluid float-end"
              alt="..."
            />
          </picture>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
