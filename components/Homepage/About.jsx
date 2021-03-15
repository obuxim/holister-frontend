import React from "react";

const About = () => {
  return (
    <>
      <div>
        <p className="fs-1 fw-700 text-center mt-5 mt-md-5">ABOUT US</p>
        <div className="container mt-2 mt-md-3">
          <div className="row d-flex justify-content-between">
            <div className="col-12 col-md-2">
              ​
              <picture>
                <source srcSet="/assets/about-us.svg" type="image/svg+xml" />
                <img
                  src="/assets/about-us.svg"
                  className="mx-auto d-block"
                  alt="..."
                />
              </picture>
            </div>
            <div className="col-12 col-md-8 col-lg-9 mt-3 mt-md-4 ">
              <p className="justify">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aspernatur deleniti fugiat perspiciatis repudiandae velit!
                Adipisci cupiditate deleniti sunt vero voluptate? Lorem ipsum
                dolor sit amet, consectetur adipisicing elit. Aspernatur
                deleniti fugiat perspiciatis repudiandae velit!Aspernatur
                deleniti fugiat perspiciatis repudiandae velit! Adipisci
                cupiditate deleniti sunt vero voluptate?Lorem ipsum dolor sit
                amet, consectetur adipisicing elit. Aspernatur deleniti fugiat
                perspiciatis repudiandae velit! Aspernatur deleniti fugiat
                perspiciatis repudiandae velit! Adipisci cupiditate deleniti
                sunt vero voluptate?Lorem ipsum dolor sit amet, consectetur
                adipisicing elit. Aspernatur deleniti fugiat perspiciatis
                repudiandae velit!Aspernatur deleniti fugiat perspiciatis
                repudiandae velit! Adipisci cupiditate deleniti sunt vero
                voluptate? <a href="about us.html">Learn more</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
