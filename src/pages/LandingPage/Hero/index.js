import React from "react";
import { useHistory } from "react-router-dom";

import "./hero.scss";
import Button from "components/Button";
import DevFriendly from "assets/icons/dev-friendly-ic.svg";
import ReadyToUse from "assets/icons/ready-use-ic.svg";
import EasyCustomize from "assets/icons/easy-to-customize-ic.svg";

export default function Hero() {
  const pathHistory = useHistory();

  const routeUIKits = () => {
    let path = `/uikits`;
    pathHistory.push(path);
  };

  // const routeCustom = () => {
  //   let pathCustom = `/custom-design`;
  //   pathCustomDesign.push(pathCustom);
  // };

  return (
    <div className="container hack-margin-md-screen">
      <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
          <div className="d-flex flex-column justify-content-center mt-2">
            <p className="header-title">
              Download Ratusan Template Design Gratis!!!
            </p>
            <div className="d-flex flex-row bg-button">
              <Button
                className="btn btn-primary btn-small-1"
                onClick={routeUIKits}
              >
                See Available UI Kits
              </Button>
              <a
                type="link"
                target="_blank"
                rel="noreferrer"
                href="/custom-design"
                className="btn btn-outline-primary btn-small-2"
              >
                Custom Design
              </a>
            </div>
            <div className="d-flex flex-row align-items-center border-cstm">
              <div className="note-divider"></div>
              <div className="header-subtitle">
                Download gratis berbagai template design untuk kebutuhan pribadi
                ataupun bisnis Anda
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 mt-5">
          <div className="row justify-content-end pt-5">
            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
              <div className="d-flex flex-column hero-feature-1 justify-content-center">
                <p className="text-center hero-title-feature">
                  What feature we have?
                </p>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
              <div className="d-flex flex-column hero-feature-container hack-margin-1">
                <img src={DevFriendly} alt="tst" className="icon-feature" />
                <div className="hero-title-feature-1">Developer Friendly</div>
                <div className="hero-subtitle-feature-1">
                  Don’t make developer mad! Keep the design make sense.
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
              <div className="d-flex flex-column hero-feature-container hack-margin">
                <img src={EasyCustomize} alt="tst" className="icon-feature" />
                <div className="hero-title-feature-1">Easy to Customize</div>
                <div className="hero-subtitle-feature-1">
                  Custom design sesuka hati dan tanpa ribet.
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
              <div
                className="d-flex flex-column hero-feature-container"
                style={{ marginTop: "30px" }}
              >
                <img src={ReadyToUse} alt="tst" className="icon-feature" />
                <div className="hero-title-feature-1">Ready to Use</div>
                <div className="hero-subtitle-feature-1">
                  Design bisa langsung digunakan, untuk pribadi maupun
                  kepentingan bisnis.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
