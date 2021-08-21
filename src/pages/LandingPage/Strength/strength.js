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
        <div className="col-sm-12 col-md-12 col-lg-7 col-xl-7">
          <div className="strength-title-main">
            Who Is <span className="variant-text">Recommended</span> To Use Our
            UI Kits?
          </div>
          <div className="strength-description-main">
            Anyone can use our UI Kits, even its all types of business or
            personal needs. And this is who can use our product.
          </div>
          <div className="d-flex flex-row frame-btn-recommended">
            <Button
              className="btn btn-primary btn-small-1 btn-recommended"
              onClick={routeUIKits}
            >
              See More
            </Button>
          </div>
        </div>

        <div className="col-sm-12 col-md-12 col-lg-5 col-xl-5">
          <div className="row">
            <div className="position-relative ornament-strength">
              <img
                src={Ornament}
                alt="ornament-recommended ornament-strength-item"
                className="position-absolute"
              />
            </div>
            <div className="col-12" style={{ zIndex: 22 }}>
              <div className="frame-recom">
                <img
                  src={Corporate}
                  alt="corporate-icon"
                  className="recommended-icon"
                />
                <div className="">
                  <div className="recommended-title">Corporate</div>
                  <div className="recommended-description">
                    Various UI Kits with the best user experience quality are
                    available. All kits flexible to customize base the needs.
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12" style={{ zIndex: 22 }}>
              <div className="frame-recom">
                <img
                  src={StartUp}
                  alt="corporate-icon"
                  className="recommended-icon"
                />
                <div className="">
                  <div className="recommended-title">StartUp</div>
                  <div className="recommended-description">
                    The best solution for start-up or small business to create
                    great website designs with minimum budget and resources.
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12" style={{ zIndex: 22 }}>
              <div className="frame-recom">
                <img
                  src={Developers}
                  alt="corporate-icon"
                  className="recommended-icon"
                />
                <div className="">
                  <div className="recommended-title">Front-end Developer</div>
                  <div className="recommended-description">
                    Create your portfolio with the best UI Kits, and get dozens
                    of free design templates for your individual or commercial
                    project.
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12" style={{ zIndex: 22 }}>
              <div className="frame-recom">
                <img
                  src={UXUI}
                  alt="corporate-icon"
                  className="recommended-icon"
                />
                <div className="">
                  <div className="recommended-title">
                    Evveryone Want to Learn UX/UI
                  </div>
                  <div className="recommended-description">
                    Explore your UI/UX Design skills by customizing and
                    developing free design templates. Boost your skill start
                    here.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
