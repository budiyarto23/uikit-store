import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Logo from "assets/icons/logo.svg";
import "./register.scss";
import FormText from "components/Form/FormText/FormText";
import Button from "components/Button";
import { registerUserAPI } from "config/redux/action";

function Register() {
  // consume from redux
  const loading = useSelector((state) => state.utils.isLoading);
  const dispatch = useDispatch();

  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handlerEmail = (event) => {
    setEmail(event.target.value);
  };

  const handlerPassword = (event) => {
    setPassword(event.target.value);
  };

  const handleRegister = async () => {
    await dispatch(registerUserAPI({ email, password }))
      .then((res) => {
        localStorage.setItem("userId", JSON.stringify(res.uid));
        history.push("/admin-home-page");
      })
      .catch((err) => err);
  };

  const routeToLoginPage = () => {
    let path = `/admin/login-page`;
    history.push(path);
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
          <div className="col col-sm-12 col-md-8 col-lg-6 col-xl-6">
            <div className="d-flex flex-column frame-register">
              <div className="title-register">Create an Account</div>
              <div className="subtitle-register mx-auto">
                Please fill this information below.
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
                <Button
                  type="button"
                  className="btn btn-primary mt-3"
                  isLoading={loading}
                  onClick={handleRegister}
                >
                  Register
                </Button>
                <Button
                  type="button"
                  className="btn btn-light mt-4"
                  onClick={routeToLoginPage}
                >
                  Login
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
