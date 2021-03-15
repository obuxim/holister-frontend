import React from "react";

const AppDownload = () => {
  return (
    <div className="container mt-5 mt-md-5">
      <div className="container app rounded">
        <div className="row">
          <div className="col-12 col-md-8 d-flex flex-column">
            <p className="fs-1 ps-1 ps-md-4 mt-5 mt-md-5">TRY OUR APP,</p>
            <p className="fs-6 ps-1 ps-md-4">FOR BETTER EXPERIENCE</p>
            <p className="ps-1 ps-md-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Aspernatur deleniti fugiat perspiciatis repudiandae velit!
              Adipisci cupiditate deleniti sunt vero voluptate?Lorem ipsum dolor
              sit amet, consectetur adipisicing elit. Aspernatur deleniti fugiat
              perspiciatis repudiandae velit!{" "}
              <a href="about us.html">Learn more</a>
            </p>
            <div className="d-flex justify-content-around mt-2 mt-lg-5 ms-0 ms-md-3 mb-4">
              <img src="assets/QR.png" alt="QR will be here.." />
              <div className="d-flex align-items-center">
                <a
                  href="#"
                  type="button"
                  className="btn app-store btn-md fs-6 rounded m-1 px-2 px-md-2 px-lg-4 py-2 py-md-3 py-lg-4"
                >
                  <i className="fab fa-google-play pe-2" />
                  APP STORE
                </a>
              </div>
              <div className="d-flex align-items-center">
                <a
                  href="#"
                  type="button"
                  className="btn app-store btn-md fs-6 rounded m-1 px-2 px-md-2 px-lg-4 py-2 py-md-3 py-lg-4"
                >
                  <i className="fab fa-google-play pe-2" />
                  PLAY STORE
                </a>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4 mt-0 mt-md-4 align">
            ​
            <picture>
              <source srcSet="/assets/app-screen/1.svg" type="image/svg+xml" />
              <img
                src="/assets/app-screen/1.svg"
                className="img-fluid float-end"
              />
            </picture>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppDownload;
