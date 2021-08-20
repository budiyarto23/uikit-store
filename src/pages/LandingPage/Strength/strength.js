import React from "react";
import { useHistory } from "react-router-dom";

import "./strength.scss";
import Button from "components/Button";
import StartUp from "assets/icons/startup-ic.svg";
import Developers from "assets/icons/frontend-ic.svg";
import UXUI from "assets/icons/learnux-ic.svg";
import Corporate from "assets/icons/corporate-ic.svg";
import Ornament from "assets/images/ornament-recommended.svg";

export default function Strength() {
  const pathHistory = useHistory();

  const routeUIKits = () => {
    let path = `/uikits`;
    pathHistory.push(path);
  };

  return (
    <div className="container">
      <div className="row" style={{ marginBottom: 140, marginTop: 100 }}>
        <div className="col-sm-12 col-md-6 col-lg-7 col-xl-7">
          <div className="strength-title-main">
            Who Is <span className="variant-text">Recommended</span> To Use Our
            UI Kits?
          </div>
          <div className="strength-description-main">
            Anyone can use our UI Kits, even its all types of business or
            personal needs. And this is who can use our product.
          </div>
          <Button className="btn btn-primary btn-small-1 btn-recommended" onClick={routeUIKits}>
            See More
          </Button>
        </div>

        <div className="col-sm-12 col-md-6 col-lg-5 col-xl-5">
          <div className="position-relative">
            <img src={Ornament} alt="ornament-recommended" className="position-absolute" />
          </div>
          <div className="d-flex flex-row frame-recom">
            <img
              src={Corporate}
              alt="corporate-icon"
              className="recommended-icon"
            />
            <div className="">
              <div className="recommended-title">Corporate</div>
              <div className="recommended-description">
                Various UI Kits with the best quality user experience are
                available with any options to customize.
              </div>
            </div>
          </div>
          <div className="d-flex flex-row frame-recom">
            <img
              src={StartUp}
              alt="corporate-icon"
              className="recommended-icon"
            />
            <div className="">
              <div className="recommended-title">Corporate</div>
              <div className="recommended-description">
                Various UI Kits with the best quality user experience are
                available with any options to customize.
              </div>
            </div>
          </div>
          <div className="d-flex flex-row frame-recom">
            <img
              src={Developers}
              alt="corporate-icon"
              className="recommended-icon"
            />
            <div className="">
              <div className="recommended-title">Corporate</div>
              <div className="recommended-description">
                Various UI Kits with the best quality user experience are
                available with any options to customize.
              </div>
            </div>
          </div>
          <div className="d-flex flex-row frame-recom">
            <img src={UXUI} alt="corporate-icon" className="recommended-icon" />
            <div className="">
              <div className="recommended-title">Corporate</div>
              <div className="recommended-description">
                Various UI Kits with the best quality user experience are
                available with any options to customize.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
