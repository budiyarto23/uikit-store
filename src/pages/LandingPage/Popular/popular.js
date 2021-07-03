import React from "react";
import "./popular.scss";
import Card from "components/Card/card.js";

export default function Popular({ data }) {
  const showWebKits = data
    .filter((webKits) => webKits.category === "web design")
    .map((items, index) => (
      <Card
        thumbnailImage={items.thumbnail}
        productName={items.name}
        productDescription={items.description}
        key={index.id}
        price={items.idrPrice}
        usdPrice={items.usdPrice}
        id={items.id}
      />
    ));

  const showMobileKits = data
    .filter((mobileKits) => mobileKits.category === "mobile design")
    .map((items, index) => (
      <Card
        thumbnailImage={items.thumbnail}
        productName={items.name}
        productDescription={items.description}
        key={index.id}
        price={items.idrPrice}
        usdPrice={items.usdPrice}
        id={items.id}
      />
    ));

  const showDesignSystem = data
    .filter((designSystem) => designSystem.category === "design system")
    .map((item, index) => (
      <Card
        thumbnailImage={item.thumbnail}
        productName={item.name}
        productDescription={item.description}
        key={index.id}
        price={item.idrPrice}
        usdPrice={item.usdPrice}
        id={item.id}
      />
    ));

  return (
    <div className="container" style={{ marginTop: 110 }}>
      <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
        <div className="row mt-3">
          <p className="text-center popular-title">Design Paling Favorit</p>
          <div className="d-flex flex-column align-items-center justify-content-center mt-3 mb-5">
            <ul className="nav nav-pills">
              <li className="nav-item pill-1">
                <a
                  className="nav-link active nav-pills"
                  data-toggle="pill"
                  href="#flamingo"
                  role="tab"
                  aria-controls="pills-flamingo"
                  aria-selected="true"
                >
                  Web UI Kits
                </a>
              </li>
              <li className="nav-item pill-2">
                <a
                  className="nav-link nav-pills"
                  data-toggle="pill"
                  href="#cuckoo"
                  role="tab"
                  aria-controls="pills-cuckoo"
                  aria-selected="false"
                >
                  Mobile UI Kits
                </a>
              </li>
              <li className="nav-item pill-3">
                <a
                  className="nav-link nav-pills"
                  data-toggle="pill"
                  href="#ostrich"
                  role="tab"
                  aria-controls="pills-ostrich"
                  aria-selected="false"
                >
                  Design System
                </a>
              </li>
            </ul>

            <div className="tab-content mt-5">
              <div
                className="tab-pane fade show active"
                id="flamingo"
                role="tabpanel"
                aria-labelledby="flamingo-tab"
              >
                <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
                  <div className="row">{showWebKits}</div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="cuckoo"
                role="tabpanel"
                aria-labelledby="profile-tab"
              >
                <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
                  <div className="row">{showMobileKits}</div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="ostrich"
                role="tabpanel"
                aria-labelledby="ostrich-tab"
              >
                <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
                  <div className="row">{showDesignSystem}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
