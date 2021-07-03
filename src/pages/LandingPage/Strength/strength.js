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
          Apa Keunggulan Design dari Kami?
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
                  Solusi mudah dan murah untuk membantu mengembangkan Start Up.
                  Download dan custom sesuai kebutuhan.
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
                  Buat dan kembangkan portfolio Anda dengan UI Kits terbaik, dan
                  dapatkan puluhan template design gratis sekarang juga.
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
                  Eksplor kemampuan UX/UI Design Anda dengan mengcustom dan
                  mengembangkan template design gratis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
