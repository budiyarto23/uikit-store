import React, { useState, useCallback, useEffect } from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import ImageViewer from "react-simple-image-viewer";

import CheckOn from "assets/icons/check-available.svg";
import CheckOff from "assets/icons/check-not-available.svg";
import BackIcon from "assets/icons/back-icon.svg";
import Point from "assets/icons/point.svg";
import formatNumber from "utils/formatNumber";
import usdFormat from "utils/formatUSD";

export default function UIPreview({ data }) {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const { id } = useParams();
  const history = useHistory();

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container-fluid p-0" style={{ background: "#FFFBF8" }}>
      {data
        .filter((card) => card.id === id)
        .map((cards, index) => (
          <div className="container pt-5" key={index}>
            <Link className="back-btn mb-5" onClick={() => history.goBack()}>
              <img src={BackIcon} alt="back-icon" />
              Back
            </Link>
            <div className="container-detail mt-3">
              <div className="column-8">
                <div className="detail-title">{cards.name}</div>
                <div className="detail-description">{cards.description}</div>
                <ul className="nav nav-pills">
                  <li className="nav-item detail-pill pr-2">
                    <a
                      className="nav-link active nav-pills"
                      data-toggle="pill"
                      href="#feature"
                      role="tab"
                      aria-controls="pills-flamingo"
                      aria-selected="true"
                    >
                      Feature
                    </a>
                  </li>
                  <li className="nav-item detail-pill">
                    <a
                      className="nav-link nav-pills"
                      data-toggle="pill"
                      href="#benefit"
                      role="tab"
                      aria-controls="pills-cuckoo"
                      aria-selected="false"
                    >
                      Benefit
                    </a>
                  </li>
                </ul>
                <div className="tab-content mt-3">
                  <div
                    className="tab-pane fade show active "
                    id="feature"
                    role="tabpanel"
                    aria-labelledby="profile-tab"
                  >
                    {cards.idrPrice !== 0 ? (
                      <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4">
                          <div className="d-flex flex-row align-items-center frame-feature">
                            <img
                              src={CheckOn}
                              alt="icon-check-on"
                              className="feature-icon"
                            />
                            <div className="feature-name">Master File</div>
                          </div>
                          <div className="d-flex flex-row align-items-center frame-feature">
                            <img
                              src={CheckOn}
                              alt="icon-check-on"
                              className="feature-icon"
                            />
                            <div className="feature-name">Ready to Use</div>
                          </div>
                          <div className="d-flex flex-row align-items-center frame-feature">
                            <img
                              src={CheckOn}
                              alt="icon-check-on"
                              className="feature-icon"
                            />
                            <div className="feature-name">
                              Developer Friendly
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4">
                          <div className="d-flex flex-row align-items-center frame-feature">
                            <img
                              src={CheckOn}
                              alt="icon-check-on"
                              className="feature-icon"
                            />
                            <div className="feature-name">Customizeable</div>
                          </div>
                          <div className="d-flex flex-row align-items-center frame-feature">
                            <img
                              src={CheckOn}
                              alt="icon-check-on"
                              className="feature-icon"
                            />
                            <div className="feature-name">Pixel Perfect</div>
                          </div>
                          <div className="d-flex flex-row align-items-center frame-feature">
                            <img
                              src={CheckOn}
                              alt="icon-check-on"
                              className="feature-icon"
                            />
                            <div className="feature-name">
                              Responsive Design
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4">
                          <div className="d-flex flex-row align-items-center frame-feature">
                            <img
                              src={CheckOn}
                              alt="icon-check-on"
                              className="feature-icon"
                            />
                            <div className="feature-name">
                              Free Design Update
                            </div>
                          </div>
                          <div className="d-flex flex-row align-items-center frame-feature">
                            <img
                              src={CheckOn}
                              alt="icon-check-on"
                              className="feature-icon"
                            />
                            <div className="feature-name">
                              Base to Component
                            </div>
                          </div>
                          <div className="d-flex flex-row align-items-center frame-feature">
                            <img
                              src={CheckOn}
                              alt="icon-check-on"
                              className="feature-icon"
                            />
                            <div className="feature-name">Commercial Use</div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4">
                          <div className="d-flex flex-row align-items-center frame-feature">
                            <img
                              src={CheckOn}
                              alt="icon-check-on"
                              className="feature-icon"
                            />
                            <div className="feature-name">Master File</div>
                          </div>
                          <div className="d-flex flex-row align-items-center frame-feature">
                            <img
                              src={CheckOn}
                              alt="icon-check-on"
                              className="feature-icon"
                            />
                            <div className="feature-name">Ready to Use</div>
                          </div>
                          <div className="d-flex flex-row align-items-center frame-feature">
                            <img
                              src={CheckOn}
                              alt="icon-check-on"
                              className="feature-icon"
                            />
                            <div className="feature-name">
                              Developer Friendly
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4">
                          <div className="d-flex flex-row align-items-center frame-feature">
                            <img
                              src={CheckOn}
                              alt="icon-check-on"
                              className="feature-icon"
                            />
                            <div className="feature-name">Customizeable</div>
                          </div>
                          <div className="d-flex flex-row align-items-center frame-feature">
                            <img
                              src={CheckOn}
                              alt="icon-check-on"
                              className="feature-icon"
                            />
                            <div className="feature-name">Pixel Perfect</div>
                          </div>
                          <div className="d-flex flex-row align-items-center frame-feature">
                            <img
                              src={CheckOff}
                              alt="icon-check-on"
                              className="feature-icon"
                            />
                            <div className="feature-name">
                              Responsive Design
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4">
                          <div className="d-flex flex-row align-items-center frame-feature">
                            <img
                              src={CheckOff}
                              alt="icon-check-on"
                              className="feature-icon"
                            />
                            <div className="feature-name">
                              Free Design Update
                            </div>
                          </div>
                          <div className="d-flex flex-row align-items-center frame-feature">
                            <img
                              src={CheckOff}
                              alt="icon-check-on"
                              className="feature-icon"
                            />
                            <div className="feature-name">
                              Base to Component
                            </div>
                          </div>
                          <div className="d-flex flex-row align-items-center frame-feature">
                            <img
                              src={CheckOff}
                              alt="icon-check-on"
                              className="feature-icon"
                            />
                            <div className="feature-name">Commercial Use</div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  <div
                    className="tab-pane fade"
                    id="benefit"
                    role="tabpanel"
                    aria-labelledby="ostrich-tab"
                  >
                    <div className="row">
                      {cards.benefits.map((benefit, index) => (
                        <div
                          className="col-sm-12 col-md-6 col-lg-4 col-xl-4"
                          key={index}
                        >
                          <div className="d-flex flex-row align-items-center frame-feature">
                            <img
                              src={Point}
                              alt="icon-check-on"
                              className="feature-icon"
                            />
                            <div className="feature-name">{benefit}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="column-4">
                <div className="price-container">
                  <div className="detail-price-label">Price</div>
                  <div className="d-flex flex-row align-items-center">
                    {cards.idrPrice !== 0 ? (
                      <div className="detail-price-rupiah">
                        {formatNumber(cards.idrPrice)}
                      </div>
                    ) : (
                      <div className="detail-price-free">Free</div>
                    )}
                    {cards.idrPrice !== 0 ? (
                      <div className="detail-price-dollar">{`/ ${usdFormat(
                        cards.usdPrice
                      )}`}</div>
                    ) : (
                      <p className="d-none">Free</p>
                    )}
                  </div>
                  <div className="d-flex flex-column hack-flex-md bg-light">
                    {/* <a className="btn btn-primary hack-md-btn hack-sm-btn" href={`/${id}/paid-download`} target="_blank" rel="noreferrer">Download</a>
                    <div className="m-2"></div>
                    <a className="btn btn-outline hack-md-btn hack-sm-btn" href={`/${id}/custom-request`} target="_blank" rel="noreferrer">Custom Request</a> */}
                  </div>
                </div>
              </div>
            </div>

            <div className="row mt-4 mb-5">
              {cards.detailImage.map((src, index) => (
                <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 mb-3">
                  <div className="card-detail card-featured-detail mb-2">
                    <figure className="img-wrapper-detail">
                      <img
                        src={src}
                        onClick={() => openImageViewer(index)}
                        key={index}
                        alt={`index of ${index}`}
                        className="cover-img"
                      />
                    </figure>
                  </div>
                </div>
              ))}

              {isViewerOpen && (
                <ImageViewer
                  src={cards.detailImage}
                  currentIndex={currentImage}
                  onClose={closeImageViewer}
                  backgroundStyle={{
                    backgroundColor: "rgba(0,0,0,0.6)",
                    zIndex: "+11",
                  }}
                />
              )}
            </div>
          </div>
        ))}
    </div>
  );
}
