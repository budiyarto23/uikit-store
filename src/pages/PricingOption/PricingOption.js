import React from "react";

import Header from "pages/LandingPage/Header/Header";
import CheckOn from "assets/icons/check-available.svg";
import CheckOff from "assets/icons/check-not-available.svg";
import CheckWhite from "assets/icons/check-white.svg";
import "./pricingOption.scss";

export default function PricingOption() {
  return (
    <div style={{ background: "#FFFBF8", height: "auto" }}>
      <Header />
      <div className="container" style={{ paddingTop: 50, paddingBottom: 60 }}>
        <p className="pricing-title text-center mx-auto">
          Pilihan Harga yang Bisa Anda Sesuaikan
        </p>
        <p className="pricing-subtitle text-center">
          Pilhilah jenis harga yang sesuai dengan kebutuhan Anda
        </p>
        <div className="row">
          <div className="col-xs-12 col-md-12 col-lg-4 col-xl-4">
            <div className="frame-pricing">
              <div className="d-flex flex-column">
                <span className="badges-pricing free">FREEMIUM</span>
                <div className="title-pricing">Exactly free</div>
                <div className="subtitle-pricing">
                  Download UI Kits gratis sesuai keinginan Anda
                </div>
                <div className="d-flex flex-row align-items-center frame-feature-items mt-4">
                  <img
                    src={CheckOn}
                    alt="icon-check-on"
                    className="option-feature-icon"
                  />
                  <div className="option-feature-name">Master File</div>
                </div>
                <div className="d-flex flex-row align-items-center frame-feature-items">
                  <img
                    src={CheckOn}
                    alt="icon-check-on"
                    className="option-feature-icon"
                  />
                  <div className="option-feature-name">Ready to Use</div>
                </div>
                <div className="d-flex flex-row align-items-center frame-feature-items">
                  <img
                    src={CheckOn}
                    alt="icon-check-on"
                    className="option-feature-icon"
                  />
                  <div className="option-feature-name">Developer Friendy</div>
                </div>
                <div className="d-flex flex-row align-items-center frame-feature-items">
                  <img
                    src={CheckOn}
                    alt="icon-check-on"
                    className="option-feature-icon"
                  />
                  <div className="option-feature-name">Customizable</div>
                </div>
                <div className="d-flex flex-row align-items-center frame-feature-items">
                  <img
                    src={CheckOn}
                    alt="icon-check-on"
                    className="option-feature-icon"
                  />
                  <div className="option-feature-name">Pixel Perfect</div>
                </div>
                <div className="d-flex flex-row align-items-center frame-feature-items">
                  <img
                    src={CheckOff}
                    alt="icon-check-on"
                    className="option-feature-icon"
                  />
                  <div className="option-feature-name">Responsive Design</div>
                </div>
                <div className="d-flex flex-row align-items-center frame-feature-items">
                  <img
                    src={CheckOff}
                    alt="icon-check-on"
                    className="option-feature-icon"
                  />
                  <div className="option-feature-name">Free Design Update</div>
                </div>
                <div className="d-flex flex-row align-items-center frame-feature-items">
                  <img
                    src={CheckOff}
                    alt="icon-check-on"
                    className="option-feature-icon"
                  />
                  <div className="option-feature-name">Base to Component</div>
                </div>
                <div className="d-flex flex-row align-items-center frame-feature-items">
                  <img
                    src={CheckOff}
                    alt="icon-check-on"
                    className="option-feature-icon"
                  />
                  <div className="option-feature-name">
                    Free for Commercial Use
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="col-xs-12 col-md-12 col-lg-4 col-xl-4">
            <div className="frame-pricing premium">
              <div className="d-flex flex-column">
                <span className="badges-pricing premium">PREMIUM</span>
                <div className="title-pricing premium">Exactly free</div>
                <div className="subtitle-pricing premium">
                  Download UI Kits gratis sesuai keinginan Anda
                </div>
                <div className="d-flex flex-row align-items-center frame-feature-items mt-4">
                  <img
                    src={CheckWhite}
                    alt="icon-check-on"
                    className="option-feature-icon"
                  />
                  <div className="option-feature-name premium">Master File</div>
                </div>
                <div className="d-flex flex-row align-items-center frame-feature-items">
                  <img
                    src={CheckWhite}
                    alt="icon-check-on"
                    className="option-feature-icon"
                  />
                  <div className="option-feature-name premium">Ready to Use</div>
                </div>
                <div className="d-flex flex-row align-items-center frame-feature-items">
                  <img
                    src={CheckWhite}
                    alt="icon-check-on"
                    className="option-feature-icon"
                  />
                  <div className="option-feature-name premium">Developer Friendy</div>
                </div>
                <div className="d-flex flex-row align-items-center frame-feature-items">
                  <img
                    src={CheckWhite}
                    alt="icon-check-on"
                    className="option-feature-icon"
                  />
                  <div className="option-feature-name premium">Customizable</div>
                </div>
                <div className="d-flex flex-row align-items-center frame-feature-items">
                  <img
                    src={CheckWhite}
                    alt="icon-check-on"
                    className="option-feature-icon"
                  />
                  <div className="option-feature-name premium">Pixel Perfect</div>
                </div>
                <div className="d-flex flex-row align-items-center frame-feature-items">
                  <img
                    src={CheckWhite}
                    alt="icon-check-on"
                    className="option-feature-icon"
                  />
                  <div className="option-feature-name premium">Responsive Design</div>
                </div>
                <div className="d-flex flex-row align-items-center frame-feature-items">
                  <img
                    src={CheckWhite}
                    alt="icon-check-on"
                    className="option-feature-icon"
                  />
                  <div className="option-feature-name premium">Free Design Update</div>
                </div>
                <div className="d-flex flex-row align-items-center frame-feature-items">
                  <img
                    src={CheckWhite}
                    alt="icon-check-on"
                    className="option-feature-icon"
                  />
                  <div className="option-feature-name premium">Base to Component</div>
                </div>
                <div className="d-flex flex-row align-items-center frame-feature-items">
                  <img
                    src={CheckWhite}
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
            <div className="frame-pricing">
              <div className="d-flex flex-column">
                <span className="badges-pricing buyout-option">BUYOUT OPTION</span>
                <div className="title-pricing">Exactly free</div>
                <div className="subtitle-pricing">
                  Download UI Kits gratis sesuai keinginan Anda
                </div>
                <div className="d-flex flex-row align-items-center frame-feature-items mt-4">
                  <img
                    src={CheckOn}
                    alt="icon-check-on"
                    className="option-feature-icon"
                  />
                  <div className="option-feature-name">Master File</div>
                </div>
                <div className="d-flex flex-row align-items-center frame-feature-items">
                  <img
                    src={CheckOn}
                    alt="icon-check-on"
                    className="option-feature-icon"
                  />
                  <div className="option-feature-name">Ready to Use</div>
                </div>
                <div className="d-flex flex-row align-items-center frame-feature-items">
                  <img
                    src={CheckOn}
                    alt="icon-check-on"
                    className="option-feature-icon"
                  />
                  <div className="option-feature-name">Developer Friendy</div>
                </div>
                <div className="d-flex flex-row align-items-center frame-feature-items">
                  <img
                    src={CheckOn}
                    alt="icon-check-on"
                    className="option-feature-icon"
                  />
                  <div className="option-feature-name">Customizable</div>
                </div>
                <div className="d-flex flex-row align-items-center frame-feature-items">
                  <img
                    src={CheckOn}
                    alt="icon-check-on"
                    className="option-feature-icon"
                  />
                  <div className="option-feature-name">Pixel Perfect</div>
                </div>
                <div className="d-flex flex-row align-items-center frame-feature-items">
                  <img
                    src={CheckOn}
                    alt="icon-check-on"
                    className="option-feature-icon"
                  />
                  <div className="option-feature-name">Responsive Design</div>
                </div>
                <div className="d-flex flex-row align-items-center frame-feature-items">
                  <img
                    src={CheckOn}
                    alt="icon-check-on"
                    className="option-feature-icon"
                  />
                  <div className="option-feature-name">Free Design Update</div>
                </div>
                <div className="d-flex flex-row align-items-center frame-feature-items">
                  <img
                    src={CheckOn}
                    alt="icon-check-on"
                    className="option-feature-icon"
                  />
                  <div className="option-feature-name">Base to Component</div>
                </div>
                <div className="d-flex flex-row align-items-center frame-feature-items">
                  <img
                    src={CheckOn}
                    alt="icon-check-on"
                    className="option-feature-icon"
                  />
                  <div className="option-feature-name">
                    Free for Commercial Use
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
