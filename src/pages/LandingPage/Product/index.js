import React from "react";
import { useHistory } from "react-router-dom";

import "./product.scss";
import ProductWebsite from "assets/images/product-web.svg";
import ProductMobile from "assets/images/product-mobile.svg";
import ProductKit from "assets/images/product-kit.svg";
import Button from "components/Button";

export default function Product() {
  const toUIKits = useHistory();

  const routeToUIKits = () => {
    let path = `/uikits`;
    toUIKits.push(path);
  };
  return (
    <div className="container custom-bg-product mb-5">
      <p className="text-center title-product mt-5 mb-5">
        Pilih Design Sesuai Kebutuhan Anda
      </p>
        <div className="row product-responsive">
          <div className="col col-sm-12 col-md-6 col-lg-4 col-xl-4 product-margin-responsive">
            <div className="cards cards-responsive">
              <div className="card-item">
                <div className="card-image">
                  <img src={ProductWebsite} className="" alt="alternate" />
                </div>
                <div className="card-info">
                  <h2 className="card-title">Website Kits</h2>
                  <p className="card-text">
                  Berbagai jenis website design, mulai dari Portfolio, Company Profile, eCommerce dan lain sebagainya.
                  </p>
                  <Button
                    type="button"
                    className="btn btn-primary mt-3 product-bttn"
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
                  <img src={ProductMobile} className="" alt="alternate" />
                </div>
                <div className="card-info">
                  <h2 className="card-title">Mobile Kits</h2>
                  <p className="card-text">
                  Tersedia berbagai component yang siap untuk digunakan, dan tentunya sudah memnuhi standar UX Design.
                  </p>
                  <Button
                    type="button"
                    className="btn btn-primary mt-3 product-bttn"
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
                  <img src={ProductKit} className="" alt="alternate" />
                </div>
                <div className="card-info">
                  <h2 className="card-title">Design System</h2>
                  <p className="card-text">
                  Tersedia berbagai component yang siap untuk digunakan, dan tentunya sudah memnuhi standar UX Design.
                  </p>
                  <Button
                    type="button"
                    className="btn btn-primary mt-3 product-bttn"
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
