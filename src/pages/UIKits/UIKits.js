import React, { useEffect } from "react";
import Header from "pages/LandingPage/Header/Header";
import Footer from "pages/LandingPage/Footer/footer";
import Card from "components/Card/card";

import "./uikits.scss";

export default function UIKits({ data }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const showAllDesign = data.map((card, index) => (
    <Card
      thumbnailImage={card.thumbnail}
      productName={card.name}
      productDescription={card.description}
      key={index.id}
      price={card.idrPrice}
      usdPrice={card.usdPrice}
      id={card.id}
    />
  ));

  const showWebKit = data
    .filter((webKit) => webKit.category === "web design")
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

    const showMobileKit = data
    .filter((mobileKit) => mobileKit.category === "mobile design")
    .map((mobile, index) => (
      <Card
        thumbnailImage={mobile.thumbnail}
        productName={mobile.name}
        productDescription={mobile.description}
        key={index.id}
        price={mobile.idrPrice}
        usdPrice={mobile.usdPrice}
        id={mobile.id}
      />
    ));

    const showDesignSystem = data
    .filter((designSystem) => designSystem.category === "design system")
    .map((designSystemItem, index) => (
      <Card
        thumbnailImage={designSystemItem.thumbnail}
        productName={designSystemItem.name}
        productDescription={designSystemItem.description}
        key={index.id}
        price={designSystemItem.idrPrice}
        usdPrice={designSystemItem.usdPrice}
        id={designSystemItem.id}
      />
    ));

  return (
    <div className="container-fluid p-0" style={{ backgroundColor: "#FFFBF8" }}>
      <Header />

      <div className="container">
        <div className="d-flex flex-column" style={{ paddingTop: 40, marginBottom: 120 }}>
          <ul className="nav nav-pills">
            <li className="nav-item pills-1">
              <a
                className="nav-link active nav-pills"
                data-toggle="pill"
                href="#flamingo"
                role="tab"
                aria-controls="pills-flamingo"
                aria-selected="true"
              >
                All Design
              </a>
            </li>
            <li className="nav-item pills-2">
              <a
                className="nav-link nav-pills"
                data-toggle="pill"
                href="#cuckoo"
                role="tab"
                aria-controls="pills-cuckoo"
                aria-selected="false"
              >
                Web UI Kits
              </a>
            </li>
            <li className="nav-item pills-3">
              <a
                className="nav-link nav-pills"
                data-toggle="pill"
                href="#ostrich"
                role="tab"
                aria-controls="pills-ostrich"
                aria-selected="false"
              >
                Mobile UI Kits
              </a>
            </li>
            <li className="nav-item pills-4">
              <a
                className="nav-link nav-pills"
                data-toggle="pill"
                href="#cendrawasih"
                role="tab"
                aria-controls="pills-cendrawasih"
                aria-selected="true"
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
              <div
                className="col-sm-12 col-md-12 col-lg-12 col-xl-12"
                style={{ marginTop: -20 }}
              >
                <div className="row">{showAllDesign}</div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="cuckoo"
              role="tabpanel"
              aria-labelledby="profile-tab"
            >
              <div
                className="col-sm-12 col-md-12 col-lg-12 col-xl-12"
                style={{ marginTop: -20 }}
              >
                <div className="row">{showWebKit}</div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="ostrich"
              role="tabpanel"
              aria-labelledby="ostrich-tab"
            >
              <div
                className="col-sm-12 col-md-12 col-lg-12 col-xl-12"
                style={{ marginTop: -20 }}
              >
                <div className="row">{showMobileKit}</div>
              </div>
            </div>
            <div
              className="tab-pane fade show"
              id="cendrawasih"
              role="tabpanel"
              aria-labelledby="cendrawasih-tab"
            >
              <div
                className="col-sm-12 col-md-12 col-lg-12 col-xl-12"
                style={{ marginTop: -20 }}
              >
                <div className="row">{showDesignSystem}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
