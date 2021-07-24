import React from "react";

import Header from "pages/LandingPage/Header/Header";
import CheckOff from "assets/icons/check-not-available.svg";
import CheckWhite from "assets/icons/check-white.svg";
import CheckRecommended from "assets/icons/check-recommended.svg";
import "./pricingOption.scss";
import Footer from "pages/LandingPage/Footer/footer";

export default function PricingOption() {
  return (
    <div className="bg-pricing-option">
      <Header />
      <div className="container" style={{ paddingTop: 50, paddingBottom: 60 }}>
        <p className="pricing-title text-center mx-auto">
          Pricing Options You Can Adjust
        </p>
        <p className="pricing-subtitle text-center">
          Choose the price you needs
        </p>
        <div className="row justify-content-center">
          <div className="col-sm-12 col-md-10 col-lg-10 col-xl-10">
            <div className="row justify-content-center">
              <div className="col-xs-12 col-md-12 col-lg-4 col-xl-4">
                <div className="frame-pricing free">
                  <div className="d-flex flex-column">
                    <span className="badges-pricing free">FREEMIUM</span>
                    <div className="title-pricing --on">Exactly Free</div>
                    <div className="subtitle-pricing --on">
                      Get free UI kits for individual purpose
                    </div>
                    <div className="d-flex flex-row align-items-center frame-feature-items mt-2">
                      <img
                        src={CheckWhite}
                        alt="icon-check-on"
                        className="option-feature-icon"
                      />
                      <div className="option-feature-name --on free">
                        Master File
                      </div>
                    </div>
                    <div className="d-flex flex-row align-items-center frame-feature-items">
                      <img
                        src={CheckWhite}
                        alt="icon-check-on"
                        className="option-feature-icon"
                      />
                      <div className="option-feature-name --on free">
                        Ready to Use
                      </div>
                    </div>
                    <div className="d-flex flex-row align-items-center frame-feature-items">
                      <img
                        src={CheckWhite}
                        alt="icon-check-on"
                        className="option-feature-icon"
                      />
                      <div className="option-feature-name --on free">
                        Developer Friendy
                      </div>
                    </div>
                    <div className="d-flex flex-row align-items-center frame-feature-items">
                      <img
                        src={CheckWhite}
                        alt="icon-check-on"
                        className="option-feature-icon"
                      />
                      <div className="option-feature-name --on free">
                        Customizable
                      </div>
                    </div>
                    <div className="d-flex flex-row align-items-center frame-feature-items">
                      <img
                        src={CheckWhite}
                        alt="icon-check-on"
                        className="option-feature-icon"
                      />
                      <div className="option-feature-name --on free">
                        Pixel Perfect
                      </div>
                    </div>
                    <div className="d-flex flex-row align-items-center frame-feature-items">
                      <img
                        src={CheckOff}
                        alt="icon-check-on"
                        className="option-feature-icon"
                      />
                      <div className="option-feature-name --off free-off">
                        Responsive Design
                      </div>
                    </div>
                    <div className="d-flex flex-row align-items-center frame-feature-items">
                      <img
                        src={CheckOff}
                        alt="icon-check-on"
                        className="option-feature-icon"
                      />
                      <div className="option-feature-name --off free-off">
                        Free Design Update
                      </div>
                    </div>
                    <div className="d-flex flex-row align-items-center frame-feature-items">
                      <img
                        src={CheckOff}
                        alt="icon-check-on"
                        className="option-feature-icon"
                      />
                      <div className="option-feature-name --off free-off">
                        Base to Component
                      </div>
                    </div>
                    <div className="d-flex flex-row align-items-center frame-feature-items">
                      <img
                        src={CheckOff}
                        alt="icon-check-on"
                        className="option-feature-icon"
                      />
                      <div className="option-feature-name --off free-off">
                        Free for Commercial Use
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xs-12 col-md-12 col-lg-4 col-xl-4">
                <div className="frame-pricing premium position-relative">
                  {/* <div className="frame-recommended">
                <div className="recommended">RECOMMENDED</div>
              </div> */}
                  <div className="d-flex flex-column">
                    <span className="badges-pricing premium">PREMIUM</span>
                    <div className="title-pricing premium">Premium UI Kits</div>
                    <div className="subtitle-pricing premium">
                      Get premium UI kits with many amazing features
                    </div>
                    <div className="d-flex flex-row align-items-center frame-feature-items mt-4">
                      <img
                        src={CheckRecommended}
                        alt="icon-check-on"
                        className="option-feature-icon"
                      />
                      <div className="option-feature-name premium">
                        Master File
                      </div>
                    </div>
                    <div className="d-flex flex-row align-items-center frame-feature-items">
                      <img
                        src={CheckRecommended}
                        alt="icon-check-on"
                        className="option-feature-icon"
                      />
                      <div className="option-feature-name premium">
                        Ready to Use
                      </div>
                    </div>
                    <div className="d-flex flex-row align-items-center frame-feature-items">
                      <img
                        src={CheckRecommended}
                        alt="icon-check-on"
                        className="option-feature-icon"
                      />
                      <div className="option-feature-name premium">
                        Developer Friendy
                      </div>
                    </div>
                    <div className="d-flex flex-row align-items-center frame-feature-items">
                      <img
                        src={CheckRecommended}
                        alt="icon-check-on"
                        className="option-feature-icon"
                      />
                      <div className="option-feature-name premium">
                        Customizable
                      </div>
                    </div>
                    <div className="d-flex flex-row align-items-center frame-feature-items">
                      <img
                        src={CheckRecommended}
                        alt="icon-check-on"
                        className="option-feature-icon"
                      />
                      <div className="option-feature-name premium">
                        Pixel Perfect
                      </div>
                    </div>
                    <div className="d-flex flex-row align-items-center frame-feature-items">
                      <img
                        src={CheckRecommended}
                        alt="icon-check-on"
                        className="option-feature-icon"
                      />
                      <div className="option-feature-name premium">
                        Responsive Design
                      </div>
                    </div>
                    <div className="d-flex flex-row align-items-center frame-feature-items">
                      <img
                        src={CheckRecommended}
                        alt="icon-check-on"
                        className="option-feature-icon"
                      />
                      <div className="option-feature-name premium">
                        Free Design Update
                      </div>
                    </div>
                    <div className="d-flex flex-row align-items-center frame-feature-items">
                      <img
                        src={CheckRecommended}
                        alt="icon-check-on"
                        className="option-feature-icon"
                      />
                      <div className="option-feature-name premium">
                        Base to Component
                      </div>
                    </div>
                    <div className="d-flex flex-row align-items-center frame-feature-items">
                      <img
                        src={CheckRecommended}
                        alt="icon-check-on"
                        className="option-feature-icon"
                      />
                      <div className="option-feature-name premium">
                        Free for Commercial Use
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xs-12 col-md-12 col-lg-4 col-xl-4">
                <div className="frame-pricing buyout-pricing">
                  <div className="d-flex flex-column">
                    <span className="badges-pricing buyout-option">
                      BUYOUT OPTION
                    </span>
                    <div className="title-pricing">Exclusive Only For You</div>
                    <div className="subtitle-pricing">
                      You will be the first or last to have the design
                    </div>
                    <div className="d-flex flex-row align-items-center frame-feature-items mt-4">
                      <img
                        src={CheckWhite}
                        alt="icon-check-on"
                        className="option-feature-icon"
                      />
                      <div className="option-feature-name --on free">
                        Master File
                      </div>
                    </div>
                    <div className="d-flex flex-row align-items-center frame-feature-items">
                      <img
                        src={CheckWhite}
                        alt="icon-check-on"
                        className="option-feature-icon"
                      />
                      <div className="option-feature-name --on free">
                        Ready to Use
                      </div>
                    </div>
                    <div className="d-flex flex-row align-items-center frame-feature-items">
                      <img
                        src={CheckWhite}
                        alt="icon-check-on"
                        className="option-feature-icon"
                      />
                      <div className="option-feature-name --on free">
                        Developer Friendy
                      </div>
                    </div>
                    <div className="d-flex flex-row align-items-center frame-feature-items">
                      <img
                        src={CheckWhite}
                        alt="icon-check-on"
                        className="option-feature-icon"
                      />
                      <div className="option-feature-name --on free">
                        Customizable
                      </div>
                    </div>
                    <div className="d-flex flex-row align-items-center frame-feature-items">
                      <img
                        src={CheckWhite}
                        alt="icon-check-on"
                        className="option-feature-icon"
                      />
                      <div className="option-feature-name --on free">
                        Pixel Perfect
                      </div>
                    </div>
                    <div className="d-flex flex-row align-items-center frame-feature-items">
                      <img
                        src={CheckWhite}
                        alt="icon-check-on"
                        className="option-feature-icon"
                      />
                      <div className="option-feature-name --on free">
                        Responsive Design
                      </div>
                    </div>
                    <div className="d-flex flex-row align-items-center frame-feature-items">
                      <img
                        src={CheckWhite}
                        alt="icon-check-on"
                        className="option-feature-icon"
                      />
                      <div className="option-feature-name --on free">
                        Free Design Update
                      </div>
                    </div>
                    <div className="d-flex flex-row align-items-center frame-feature-items">
                      <img
                        src={CheckWhite}
                        alt="icon-check-on"
                        className="option-feature-icon"
                      />
                      <div className="option-feature-name --on free">
                        Base to Component
                      </div>
                    </div>
                    <div className="d-flex flex-row align-items-center frame-feature-items">
                      <img
                        src={CheckWhite}
                        alt="icon-check-on"
                        className="option-feature-icon"
                      />
                      <div className="option-feature-name --on free">
                        Free for Commercial Use
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
