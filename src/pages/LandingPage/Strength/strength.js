import React from "react";
import "./strength.scss";
import StartUp from "assets/icons/startup-ic.svg";
import Developers from "assets/icons/frontend-ic.svg";
import UXUI from "assets/icons/learnux-ic.svg";

export default function Strength() {
  return (
    <div className="container">
      <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 strength-bg">
        <div className="strength-main-title mx-auto">
        Who Is Recommended To Use Our UI Kits?
        </div>
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 mb-5">
            <div className="d-flex flex-column justify-content-center ">
              <img
                src={StartUp}
                className="strength-icon mx-auto"
                alt="how-to-use-img"
              />
              <p className="strength-title text-center">Start Up</p>
              <div className="frame-strength-subtitle mx-auto">
                <p className="strength-subtitle text-center">
                The best solution for start-up or small business to create great website designs with minimum budget and resources.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 mb-5">
            <div className="d-flex flex-column justify-content-center">
              <img
                src={Developers}
                className="strength-icon mx-auto"
                alt="how-to-use-img"
              />
              <p className="strength-title text-center">Frontend Deveoper</p>
              <div className="frame-strength-subtitle mx-auto">
                <p className="strength-subtitle text-center">
                Create your portfolio with the best UI Kits, and get dozens of free design templates for your individual or commercial project.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 mb-5 last-center-md">
            <div className="d-flex flex-column justify-content-center">
              <img
                src={UXUI}
                className="strength-icon mx-auto"
                alt="how-to-use-img"
              />
              <p className="strength-title text-center">
                Everyone to Learn UX/UI
              </p>
              <div className="frame-strength-subtitle mx-auto">
                <p className="strength-subtitle text-center">
                Explore your UI/UX Design skills by customizing and developing free design templates. Boost your skill start here.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
