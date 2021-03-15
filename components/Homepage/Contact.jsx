import React from "react";

const Contact = () => {
  return (
    <>
      <div>
        <p className="fs-1 fw-700 text-center mt-4 mt-md-5">CONTACT US</p>
        <div className="container mt-4 mt-md-5">
          <form className="md-4">
            <div className="row">
              <div className="col-12 col-md-4">
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control p-3"
                    id="formGroupExampleInput"
                    placeholder="Name"
                    required
                  />
                </div>
              </div>
              <div className="col-12 col-md-4">
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control p-3"
                    id="inputEmail4"
                    placeholder="Email"
                    required
                  />
                </div>
              </div>
              <div className="col-12 col-md-4">
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control p-3"
                    id="formGroupExampleInput"
                    placeholder="Phone"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="mb-3">
              <textarea
                className="form-control p-3"
                id="validationTextarea"
                placeholder="Enter your Message"
                required
                defaultValue={""}
              />
            </div>
            <div className="col-12 mt-3 mt-md-4 d-flex justify-content-center">
              <button
                className="btn form-button btn-lg rounded-pill pe-5 ps-5 text-center"
                type="submit"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
