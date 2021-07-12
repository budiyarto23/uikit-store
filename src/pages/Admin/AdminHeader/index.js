import React from "react";
import { Link } from "react-router-dom";
import { useLocation, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import "./adminHeader.scss";
import Logo from "assets/icons/logo.svg";
import Button from "components/Button";
import { logOut } from "config/redux/action";

export default function Header() {
  const location = useLocation();
  const dispatch = useDispatch();
  const history = useHistory();

  const userLogOut = () => {
    const res = dispatch(logOut()).catch((err) => err);
    if(res){
      history.push("/admin/login-page");
    } else {
      console.log("logout gagal")
    }
  }

  const { pathname } = location;

  const splitLocation = pathname.split("/");

  return (
    <nav
      className="navbar navbar-light navbar-expand-lg nav-custom"
      style={{ backgroundColor: "#FFF" }}
    >
      <div className="container">
        <a className="navbar-brand" href="/#">
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
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="mx-auto">
            <ul className="navbar-nav navs-menu">
              <li
                className={
                  splitLocation[1] === "admin-home-page"
                    ? "nav-item nav-link active"
                    : "nav-item nav-link"
                }
              >
                <Link to="/admin-home-page" style={{ textDecoration: "none" }}>
                  UI Collection
                </Link>
              </li>
              <li
                className={
                  splitLocation[1] === "admin-downloaded"
                    ? "nav-item nav-link active"
                    : "nav-item nav-link"
                }
              >
                <Link to="/admin-downloaded" style={{ textDecoration: "none" }}>
                  Downloaded
                </Link>
              </li>
              <li
                className={
                  splitLocation[1] === "admin-custom-request"
                    ? "nav-item nav-link active"
                    : "nav-item nav-link"
                }
              >
                <Link
                  to="/admin-custom-request"
                  style={{ textDecoration: "none" }}
                >
                  Custom Request
                </Link>
              </li>
            </ul>
          </div>
          <Button type="button" onClick={userLogOut} className="btn btn-outline-pr btn-logout">
            Logout
          </Button>
        </div>
      </div>
    </nav>
  );
}
