import React from "react";
import Link from "next/link";

const Services = () => {
  return (
    <>
      <div>
        <p className="fs-1 fw-700 text-center mt-4 mt-md-5">SERVICES</p>
        <div className="container mt-3 mt-md-4">
          <div className="row row-cols-2 row-cols-md-4 g-4">
            <div className="col">
              <Link href="/courier">
                <a className="card card-border-none rounded shadow-sm ">
                  <img
                    src="/assets/icons/courier.svg"
                    className="card-img-top px-5 px-lg-5 py-3 py-lg-4"
                    alt
                  />
                  <div className="card-body px-2 pb-2">
                    <p className="fs-6 fs-lg-4 card-title text-center">
                      SEND A PARCEL
                    </p>
                  </div>
                </a>
              </Link>
            </div>
            <div className="col">
              <Link href="/buy4u">
                <a className="card card-border-none rounded shadow-sm ">
                  <img
                    src="/assets/icons/buy4u.svg"
                    className="card-img-top px-5 px-lg-5 py-3 py-lg-4"
                    alt="..."
                  />
                  <div className="card-body px-2 pb-2">
                    <p className="fs-6 fs-lg-4 card-title text-center">BUY4U</p>
                  </div>
                </a>
              </Link>
            </div>
            <div className="col">
              <div className="card card-border-none rounded shadow-sm">
                <img
                  src="/assets/icons/shop.svg"
                  className="card-img-top px-5 px-lg-5 py-3 py-lg-4"
                  alt="..."
                />
                <div className="card-body px-2 pb-2">
                  <p className="fs-6 fs-lg-4 card-title text-center">SHOP</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card card-border-none rounded shadow-sm">
                <img
                  src="/assets/icons/laundry.svg"
                  className="card-img-top px-5 px-lg-5 py-3 py-lg-4"
                  alt="..."
                />
                <div className="card-body px-2 pb-2">
                  <p className="fs-6 fs-lg-4 card-title text-center">LAUNDRY</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
