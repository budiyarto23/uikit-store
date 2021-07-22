import React from "react";
import { useHistory } from "react-router-dom";

import "./hero.scss";
import Button from "components/Button";
import DevFriendly from "assets/icons/dev-friendly.svg";
import ReadyToUse from "assets/icons/ready-to-use.svg";
import EasyCustomize from "assets/icons/easy-to-customize.svg";

export default function Hero() {
  const pathHistory = useHistory();

  const routeUIKits = () => {
    let path = `/uikits`;
    pathHistory.push(path);
  };

  return (
    <div className="container hack-margin-md-screen">
      <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
          <div className="d-flex flex-column justify-content-center mt-2">
            <p className="header-title">
            Free <span className="variant-text">Download UI Kits</span> For Your Any Purpose
            </p>
            <div className="d-flex flex-row bg-button-hero">
              <Button
                className="btn btn-primary btn-small-1"
                onClick={routeUIKits}
              >
                See Available UI Kits
              </Button>
              {/* <a
                type="link"
                target="_blank"
                rel="noreferrer"
                href="/custom-design"
                className="btn btn-outline-primary btn-small-2"
              >
                Custom Design
              </a> */}
            </div>
            <div className="d-flex flex-row align-items-center border-cstm">
              <div className="note-divider"></div>
              <div className="header-subtitle">
              Get intuitive user interface templates for personal and business needs
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 mt-5">
          <div className="row justify-content-end mt-2 pt-5">
            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                <p className="text-center hero-title-feature">
                  Why It's Good For You?
                </p>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
              <div className="d-flex flex-column hero-feature-container hack-margin-1">
                <img src={DevFriendly} alt="tst" className="icon-feature" />
                <div className="hero-title-feature-1">Developer Friendly</div>
                <div className="hero-subtitle-feature-1">
                  Don’t make developer mad! Keep the design make sense
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
              <div className="d-flex flex-column hero-feature-container hack-margin">
                <img src={EasyCustomize} alt="tst" className="icon-feature" />
                <div className="hero-title-feature-1">Easy to Customize</div>
                <div className="hero-subtitle-feature-1">
                  Easy to custom the design with the style you want
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
                All designs already to use for personal or business needs
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
