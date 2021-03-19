import Head from "next/head";
import About from "../components/Homepage/About";
import AppDownload from "../components/Homepage/AppDownload";
import Contact from "../components/Homepage/Contact";
import Services from "../components/Homepage/Services";
import Testimonial from "../components/Homepage/Testimonial";
import Slider from "../components/Slider";

const api_url = process.env.API_URL || "https://app.holisterbd.com/api/";

export default function Home({ cities, delivery_modes, packaging_types }) {
  return (
    <>
      <Slider />
      <Services />
      <AppDownload />
      <Testimonial />
      <About />
      <Contact />
    </>
  );
}
