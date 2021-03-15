import Head from "next/head";
import About from "../components/Homepage/About";
import AppDownload from "../components/Homepage/AppDownload";
import Contact from "../components/Homepage/Contact";
import Services from "../components/Homepage/Services";
import Testimonial from "../components/Homepage/Testimonial";
import Slider from "../components/Slider";

import { useState } from "react";
import Courier from "../components/Homepage/Courier";

const api_url = process.env.API_URL || "http://localhost:8000/api/";

export default function Home({ cities, delivery_modes, packaging_types }) {
  const [currentService, setCurrentService] = useState("courier");
  return (
    <>
      <Slider />
      <p className="fs-1 fw-700 text-center mt-4 mt-md-5">SEND PARCEL or BUY</p>

      <div className="container">
        <ul className="nav nav-pills">
          <li className="nav-item col-6 button success text-center">
            <a
              onClick={() => setCurrentService("courier")}
              className={`nav-link fs-6 py-3 ${
                currentService === "courier" ? "active" : ""
              }`}
            >
              Courier
            </a>
          </li>
          <li className="nav-item col-6 button success text-center">
            <a
              onClick={() => setCurrentService("buy4u")}
              className={`nav-link fs-6 py-3 ${
                currentService === "buy4u" ? "active" : ""
              }`}
            >
              Buy4u
            </a>
          </li>
        </ul>
      </div>

      {currentService === "courier" ? (
        <Courier
          cities={cities}
          delivery_modes={delivery_modes}
          packaging_types={packaging_types}
        />
      ) : (
        "d"
      )}
      <Services />
      <AppDownload />
      <Testimonial />
      <About />
      <Contact />
    </>
  );
}

export const getStaticProps = async (context) => {
  // Get City & Area
  const cityRes = await fetch(`${api_url}city/get_with_areas`);
  const cityJson = await cityRes.json();
  // Get Delivery Mode
  const deliveryModeRes = await fetch(`${api_url}delivery_mode`);
  const deliveryModeJson = await deliveryModeRes.json();
  // Get Packaging Type
  const packagingTypeRes = await fetch(`${api_url}packaging_type`);
  const packagingTypeJson = await packagingTypeRes.json();
  return {
    props: {
      cities: cityJson,
      delivery_modes: deliveryModeJson.data,
      packaging_types: packagingTypeJson.data,
    },
  };
};
