import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Header from "pages/LandingPage/Header/Header";
import Footer from "pages/LandingPage/Footer/footer";
import Card from "components/Card/card";
import CardSkeleton from "components/Card/CardSkeleton";
import { getUiKits } from "config/redux/action";

import "./uikits.scss";

export default function UIKits({ data }) {
  // const kitsData = useSelector(state => state.kitsCollection);
  const { loading, kitsData } = useSelector((state) => ({
    loading: state.isLoading,
    kitsData: state.kitsCollection,
  }));
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getUiKits());
    // eslint-disable-next-line
  }, []);

  const showAllDesign = kitsData.map((card, index) => (
    <Card
      thumbnailImage={card.data.images[0]}
      productName={card.data.productName}
      productDescription={card.data.productDescription}
      key={index.data.key}
      price={card.data.idrPrice}
      usdPrice={card.data.usdPrice}
      id={card.data.key}
    />
  ));

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
    .filter((designSystem) => designSystem.data.category === "Design System")
    .map((designSystemItem, index) => (
      <Card
        thumbnailImage={designSystemItem.data.images[0]}
        productName={designSystemItem.data.productName}
        productDescription={designSystemItem.data.productDescription}
        key={index.id}
        price={designSystemItem.data.idrPrice}
        usdPrice={designSystemItem.data.usdPrice}
        id={designSystemItem.id}
      />
    ));

  return (
    <div className="container-fluid p-0" style={{ backgroundColor: "#FFFBF8" }}>
      <Header />

      <div className="container">
        <div
          className="d-flex flex-column"
          style={{ paddingTop: 40, marginBottom: 120 }}
        >
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
                <div className="row">
                  { loading && <CardSkeleton /> }
                  { !loading && showAllDesign }
                </div>
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
                <div className="row">{ loading && <CardSkeleton /> }
                  { !loading && showWebKit }</div>
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
                <div className="row">{ loading && <CardSkeleton /> }
                  { !loading && showMobileKit }</div>
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
                <div className="row">{ loading && <CardSkeleton /> }
                  { !loading && showDesignSystem }</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
