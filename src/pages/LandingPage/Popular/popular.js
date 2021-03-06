import React, { useEffect } from "react";
// import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import "./popular.scss";
import Card from "components/Card/card.js";
import { getPopularKits } from "config/redux/action";
import PopularSkeleton from "./PopularSkeleton";

export default function Popular() {
  const { loading, kitsPopular } = useSelector((state) => ({
    loading: state.utils.isLoading,
    kitsPopular: state.kits.kitsPopular,
  }));
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getPopularKits());
    // eslint-disable-next-line
  }, []);

  const showWebKit = kitsPopular
    .filter((webKit) => webKit.data.status === "Available").filter((status) => status.data.category === "Web UI")
    .map((item, index) => (
      <Card
        thumbnailImage={item.data.images[0]}
        productName={item.data.productName}
        productDescription={item.data.productDescription}
        key={index}
        price={parseInt(item.data.idrPrice)}
        usdPrice={parseInt(item.data.usdPrice)}
        id={item.id}
      />
    ));

  const showMobileKit = kitsPopular
    .filter((mobileKit) => mobileKit.data.status === "Available").filter((status) => status.data.category === "Mobile UI")
    .map((mobile, index) => (
      <Card
        thumbnailImage={mobile.data.images[0]}
        productName={mobile.data.productName}
        productDescription={mobile.data.productDescription}
        key={index}
        price={parseInt(mobile.data.idrPrice)}
        usdPrice={parseInt(mobile.data.usdPrice)}
        id={mobile.id}
      />
    ));

  const showDesignSystem = kitsPopular
    .filter((mobileKit) => mobileKit.data.status === "Available").filter((status) => status.data.category === "Design System")
    .map((mobile, index) => (
      <Card
        thumbnailImage={mobile.data.images[0]}
        productName={mobile.data.productName}
        productDescription={mobile.data.productDescription}
        key={index}
        price={parseInt(mobile.data.idrPrice)}
        usdPrice={parseInt(mobile.data.usdPrice)}
        id={mobile.id}
      />
    ));

  return (
    <div className="container bg-popular">
      <div className="row mt-3">
        <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
          <p className="popular-title">The <span className="variant-text">Most Popular</span> For You</p>
          <p className="description-product">Don't miss the most popular UI Kits.</p>
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
