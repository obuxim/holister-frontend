import React from "react";

const Footer = () => {
  return (
    <>
      <div>
        <div className="container-fluid bg  mt-4 mt-md-5">
          <div className="container pt-4 pb-2">
            <p className="fs-2 fw-700 text-center text color">
              OUR BRANCHES IN MAP
            </p>
          </div>
          {/*map*/}
          <div id="map" />
          {/*map end*/}
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-3">
                <img src="assets/logo.svg" className="pt-4 pt-md-5" />
                <p className="pt-4">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Aspernatur deleniti fugiat perspiciatis repudiandae velit!
                </p>
              </div>
              <div className="col-12 col-md-3">
                <p className="pt-4  pt-md-5 fs-3">Services</p>
                <p>
                  <a href="#">Free Pick Up &amp; Delivery</a>
                </p>
                <p>
                  <a href="#">Fast &amp; High Quality</a>
                </p>
              </div>
              <div className="col-12 col-md-3">
                <p className="pt-4  pt-md-5 fs-3">Customer Care</p>
                <p>
                  <a href="#">Contact Us</a>
                </p>
                <p>
                  <a href="#">About Us</a>
                </p>
                <p>
                  <a href="#">Privacy Ploicy</a>
                </p>
                <p>
                  <a href="#">Terms of Use</a>
                </p>
              </div>
              <div className="col-12 col-md-3">
                <p className="pt-4  pt-md-5 fs-3">Contact Info</p>
                <p>Call Now for Services!</p>
                <p>+880 1791081642</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </div>
            </div>
          </div>
        </div>
        {/*copyright*/}
        <div className="container pt-3 pt-md-4">
          <div className="row">
            <div className="col-12 text-center pt-3 pb-3">
              <p>
                <a className="fs-6">holister</a> © 2021 All right reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
