import React from "react";
import "./header.scss";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

import Logo from "assets/icons/logo.svg";

export default function Header() {
  const location = useLocation();

  const { pathname } = location;

  const splitLocation = pathname.split("/");

  return (
    <nav
      className="navbar navbar-light navbar-expand-lg nav-custom"
    >
      <div className="container">
        <a className="navbar-brand" href="/">
          <img src={Logo} alt="logo-brand" width={46} height={46} />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav navs-menu">
            <li
              className={
                splitLocation[1] === ""
                  ? "nav-item nav-link active"
                  : "nav-item nav-link"
              }
            >
              <Link to="/" style={{ textDecoration: "none" }}>
                Home
              </Link>
            </li>
            <li
              className={
                splitLocation[1] === "uikits"
                  ? "nav-item nav-link active"
                  : "nav-item nav-link"
              }
            >
              <Link to="/uikits" style={{ textDecoration: "none" }}>
                UI Kits
              </Link>
            </li>
            {/* <li
              className={
                splitLocation[1] === "payment-confirm"
                  ? "nav-item nav-link active"
                  : "nav-item nav-link"
              }
            >
              <Link to="/payment-confirm" style={{ textDecoration: "none" }}>
                Payment Confirm
              </Link>
            </li> */}
            <li
              className={
                splitLocation[1] === "pricing-option"
                  ? "nav-item nav-link active"
                  : "nav-item nav-link"
              }
            >
              <Link to="/pricing-option" style={{ textDecoration: "none" }}>
                Pricing Option
              </Link>
            </li>
            <li
              className={
                splitLocation[1] === "hire-us"
                  ? "nav-item nav-link active"
                  : "nav-item nav-link"
              }
            >
              <Link to="/hire-us" style={{ textDecoration: "none" }}>
                Hire Us
              </Link>
            </li>
          </ul>
        </div>
      
      </div>
    </nav>
  );
}
