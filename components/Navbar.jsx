import React from "react";
import styles from "../styles/navBar.module.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark py-3 position-relative">
      <div className="container-fluid px-3">
        <span className="d-flex justify-content-center navbar-brand">
          <img src="/assets/logo-white.svg" alt="" />
          <p className="fw-bold fs-5">&nbsp;|&nbsp;Developers</p>
        </span>
        <div className=" d-flex collapse navbar-collapse position-absolute end-0 pe-2 hideOnSm" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item pe-3">
              <a className="nav-link text-white" aria-current="page" href="#">
                Why Marvel
              </a>
            </li>
            <li className="nav-item pe-3">
              <a className="nav-link text-white" href="#">
                Enterprise
              </a>
            </li>
            <li className="nav-item pe-3">
              <a className="nav-link text-white" href="#">
                Pricing
              </a>
            </li>
            <li className="nav-item pe-3">
              <a className="nav-link text-white" href="#">
                Sign in
              </a>
            </li>
            <li className="nav-item">
              <button type="button" className="navBtn btn-light btn-rounded">
                Sign up free
              </button>
            </li>
          </ul>
        </div>
        <button
          class="navbar-toggler btn-light"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
