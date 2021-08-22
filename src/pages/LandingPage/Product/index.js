import React from "react";
import { useHistory } from "react-router-dom";

import "./product.scss";
import ProductWebsite from "assets/images/product-web.png";
import ProductMobile from "assets/images/product-mobile.png";
import ProductKit from "assets/images/product-kit.png";
import Button from "components/Button";

export default function Product() {
  const toUIKits = useHistory();

  const routeToUIKits = () => {
    let path = `/uikits`;
    toUIKits.push(path);
  };
  return (
    <div className="container custom-bg-product mb-5">
      <p className="title-product mt-5">
      Available <span className="variant-text">UI Kits</span> Categories
      </p>
      <p className="description-product">Three categories that can solve your problems.</p>
        <div className="row product-responsive">
          <div className="col col-sm-12 col-md-6 col-lg-4 col-xl-4 product-margin-responsive">
            <div className="cards cards-responsive">
              <div className="card-item">
                <div className="card-image">
                  <img src={ProductKit} className="" alt="alternate" />
                </div>
                <div className="card-info">
                  <h2 className="card-title">Mobile Kits</h2>
                  <p className="card-text">
                  Create a mobile app design with various styles, and custom with your styles
                  </p>
                  <Button
                    type="button"
                    className="btn btn-light btn-dsgn-system mt-3 product-bttn"
                    onClick={routeToUIKits}
                  >
                    Browse Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="col col-sm-12 col-md-6 col-lg-4 col-xl-4 product-margin-responsive">
            <div className="cards cards-responsive">
              <div className="card-item">
                <div className="card-image">
                  <img src={ProductWebsite} className="" alt="alternate" />
                </div>
                <div className="card-info">
                  <h2 className="card-title">Website Kits</h2>
                  <p className="card-text">
                  Create a beautiful website with a trendy style, available for any categories
                  </p>
                  <Button
                    type="button"
                    className="btn btn-light btn-web mt-3 product-bttn"
                    onClick={routeToUIKits}
                  >
                    Browse Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="col col-sm-12 col-md-6 col-lg-4 col-xl-4 product-margin-responsive hack-column-md">
            <div className="cards cards-responsive">
              <div className="card-item">
                <div className="card-image">
                  <img src={ProductMobile} className="" alt="alternate" />
                </div>
                <div className="card-info">
                  <h2 className="card-title">Design System</h2>
                  <p className="card-text">
                  There are various UI Kits components all ready to use, and already with amazing UX
                  </p>
                  <Button
                    type="button"
                    className="btn btn-secondary btn-mobile mt-3 product-bttn"
                    onClick={routeToUIKits}
                  >
                    Browse Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}
