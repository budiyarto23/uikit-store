import React, { useEffect } from "react";
// import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import "./popular.scss";
import Card from "components/Card/card.js";
import { getUiKits } from "config/redux/action";
import PopularSkeleton from "./PopularSkeleton";

export default function Popular() {
  const { loading, kitsData } = useSelector((state) => ({
    loading: state.utils.isLoading,
    kitsData: state.kits.kitsCollection,
  }));
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getUiKits());
    // eslint-disable-next-line
  }, []);

  const showWebKit = kitsData
    .filter((webKit) => webKit.data.category === "Web UI")
    .map((item, index) => (
      <Card
        thumbnailImage={item.data.images[0]}
        productName={item.data.productName}
        productDescription={item.data.productDescription}
        key={index.id}
        price={item.data.idrPrice}
        usdPrice={item.data.usdPrice}
        id={item.id}
      />
    ));

  const showMobileKit = kitsData
    .filter((mobileKit) => mobileKit.data.category === "Mobile UI")
    .map((mobile, index) => (
      <Card
        thumbnailImage={mobile.data.images[0]}
        productName={mobile.data.productName}
        productDescription={mobile.data.productDescription}
        key={index.id}
        price={mobile.data.idrPrice}
        usdPrice={mobile.data.usdPrice}
        id={mobile.id}
      />
    ));

  const showDesignSystem = kitsData
    .filter((mobileKit) => mobileKit.data.category === "Design System")
    .map((mobile, index) => (
      <Card
        thumbnailImage={mobile.data.images[0]}
        productName={mobile.data.productName}
        productDescription={mobile.data.productDescription}
        key={index.id}
        price={mobile.data.idrPrice}
        usdPrice={mobile.data.usdPrice}
        id={mobile.id}
      />
    ));

  return (
    <div className="container" style={{ marginTop: 100 }}>
      <div className="row mt-3">
        <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
          <p className="popular-title">The Most <span className="variant-text">Popular</span> For You</p>
          <p className="description-product">Lorem ispum this is description bebiebh</p>
          <ul className="nav nav-pills mt-4">
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

          <div className="tab-content tab-to-card">
            <div
              className="tab-pane fade show active"
              id="flamingo"
              role="tabpanel"
              aria-labelledby="flamingo-tab"
            >
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
                <div className="row">
                  {loading && <PopularSkeleton />}
                  {!loading && showWebKit}
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="cuckoo"
              role="tabpanel"
              aria-labelledby="profile-tab"
            >
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
                <div className="row">
                  {loading && <PopularSkeleton />}
                  {!loading && showMobileKit}
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="ostrich"
              role="tabpanel"
              aria-labelledby="ostrich-tab"
            >
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
                <div className="row">
                  {loading && <PopularSkeleton />}
                  {!loading && showDesignSystem}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
