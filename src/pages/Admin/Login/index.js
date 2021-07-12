import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Logo from "assets/icons/logo.svg";
import "./login.scss";
import FormText from "components/Form/FormText/FormText";
import Button from "components/Button";
import { loginUserAPI } from "config/redux/action";

export default function Login() {
  // consume from redux
  const dispatch = useDispatch();
  const loading = useSelector(state => state.utils.isLoading);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handlerEmail = (event) => {
    setEmail(event.target.value);
  };

  const handlerPassword = (event) => {
    setPassword(event.target.value);
  };

  const routeToRegisterPage = () => {
    let path = `/admin/register-page`;
    history.push(path);
  };

  const handleLogin = async () => {
    await dispatch(loginUserAPI({ email, password })).then((res) => {
      localStorage.setItem("userId", JSON.stringify(res.uid));
      history.push("/admin-home-page");
    }).catch(
      (err) => err
    );
    // if (res) {
    //   localStorage.setItem("userId", JSON.stringify(res.uid));
    //   history.push("/admin-home-page");
    // } else {
    //   console.log("login gagal");
    // }
  };

  return (
    <div className="container-fluid p-0">
      <div className="register-decoration" />
      <div className="container">
        <div className="d-flex flex-column align-items-center">
          <img
            src={Logo}
            className="logo-reg"
            alt="logo-reg"
            style={{ height: 80, width: 120 }}
          />
        </div>
        <div
          className="row justify-content-center positio-absolute"
          style={{ marginTop: "-200px" }}
        >
          <div className="col col-sm-12 col-md-8 col-lg-5 col-xl-5">
            <div className="d-flex flex-column frame-register">
              <div className="title-register">Welcome Back</div>
              <div className="subtitle-register mx-auto">
                You can deserves everything what you want.
              </div>
              <div className="d-flex flex-column frame-form">
                <FormText
                  name="Email"
                  className=""
                  type="email"
                  value={email}
                  placeholder="Email"
                  onChange={handlerEmail}
                />
                <FormText
                  name="Password"
                  className=""
                  type="password"
                  value={password}
                  placeholder="Password"
                  onChange={handlerPassword}
                />
                <a href="/#" className="forgot-password">
                  Lupa Password
                </a>
                <Button
                  type="button"
                  className="btn btn-primary mt-5"
                  isLoading={loading}
                  onClick={handleLogin}
                >
                  Login
                </Button>
                <Button
                  type="button"
                  className="btn btn-light mt-4"
                  onClick={routeToRegisterPage}
                >
                  Register
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
