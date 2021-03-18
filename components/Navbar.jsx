import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="navbar sticky-top navbar-light bg-white shadow-sm">
      <div className="container">
        <Link href="/">
          <a className="navbar-brand">
            <img src="assets/logo.svg" alt="#" />
          </a>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon color:var(--primary-color)" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav align-items-center">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                <i className="fas fa-home me-2" />
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="login.html">
                <i className="fas fa-sign-in-alt me-2" />
                Log In
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="notification.html">
                <i className="far fa-bell me-2" />
                Notification
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="history.html">
                <i className="fas fa-history me-2" />
                History
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="aboutus.html">
                <i className="far fa-address-card me-2" />
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="contactus.html">
                <i className="far fa-address-book me-2" />
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
