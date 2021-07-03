import React, { useState, useCallback } from "react";
// package
import { useParams, useHistory, Link } from "react-router-dom";
import ImageViewer from "react-simple-image-viewer";
// component
import BackIcon from "assets/icons/back-icon.svg";
import usdFormat from "utils/formatUSD";
import idrFormat from "utils/formatNumber";

import "./downloadDetail.scss";

export default function AddUIKit({ data }) {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const { id } = useParams();
  const history = useHistory();
  const [decisionSelected, setFormData] = useState("Need Confirmation");

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  const finalDecision = [
    {
      decision: "CONFIRM",
    },
    {
      decision: "REJECT",
    },
  ];

  return (
    <div className="container-fluid" style={{ background: "#FFFBF8" }}>
      {data
        .filter((card) => card.id === id)
        .map((cards, index) => (
          <div className="row justify-content-center">
            <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6" key={index}>
              <div className="main-frame mt-5 mb-5">
                <Link className="back-btn" onClick={() => history.goBack()}>
                  <img src={BackIcon} alt="back-icon" />
                  Back
                </Link>
                <div className="d-flex flex-row justify-content-between mt-3">
                  <div className="title-addkit">Download Detail</div>
                  <div className={
                      decisionSelected === "REJECT"
                        ? "badge-status-confirm reject"
                        : decisionSelected === "CONFIRM"
                        ? "badge-status-confirm confirm"
                        : "badge-status-confirm"
                    }>{decisionSelected}</div>
                </div>
                <div className="subtitle-addkit">
                  All information about product downloade here.
                </div>

                {/* content downloaded */}

                <div className="frame-inside mt-4">
                  <div className="d-flex flex-row">
                    <div className="frame-img ">
                      <img
                        className="item-img"
                        src={cards.detailImage}
                        alt={cards.id}
                        onClick={() => openImageViewer(index)}
                      />
                    </div>
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
                    <div className="d-flex flex-column">
                      <div className="unique-number">{cards.name}</div>
                      <div className="d-flex flex-row mt-2">
                        <div className="title-1">Title:</div>
                        <div className="value-1">{cards.name}</div>
                      </div>
                      <div className="d-flex flex-row mt-2">
                        <div className="title-1">This is not title:</div>
                        <div className="value-1">{cards.category}</div>
                      </div>
                    </div>
                  </div>

                  <div className="d-flex flex-row mt-4">
                    {finalDecision.map((val, index) => (
                      <div key={index} className="d-flex flex-row">
                        <div
                          className={
                            decisionSelected === val.decision
                              ? "d-flex align-items-center frame-follup-option actived"
                              : "d-flex align-items-center frame-follup-option"
                          }
                        >
                          <label
                            className={
                              decisionSelected === val.decision
                                ? "form-check-label label-custom-style actived"
                                : "form-check-label label-custom-style"
                            }
                            htmlFor={`flexRadioDefault1${val.decision}`}
                          >
                            <input
                              className="form-check-input custom-radio"
                              type="radio"
                              name="flexRadioDefault"
                              id={`flexRadioDefault${val.decision}`}
                              checked={decisionSelected === val.decision}
                              value={val.decision}
                              onClick={() => setFormData(val.decision)}
                            />
                            {val.decision}
                          </label>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="title-section mb-3">Buyer Information</div>
                <div className="d-flex flex-row justify-content-between mt-2">
                  <div className="title-2">Full Name:</div>
                  <div className="value-2">
                    Lorem ipsum is a text helper for any profession
                  </div>
                </div>
                <div className="d-flex flex-row justify-content-between mt-2">
                  <div className="title-2">Email:</div>
                  <div className="value-2">{cards.name}</div>
                </div>
                <div className="title-section mt-4 mb-3">Order Summary</div>
                <div className="d-flex flex-row justify-content-between mt-2">
                  <div className="title-2">Product:</div>
                  <div className="value-2">{cards.name}</div>
                </div>
                <div className="d-flex flex-row justify-content-between mt-2">
                  <div className="title-2">Price:</div>
                  {cards.idrPrice ? (
                    <div className="value-2">{`${idrFormat(
                      cards.idrPrice
                    )} / ${usdFormat(cards.usdPrice)}`}</div>
                  ) : (
                    <div className="value-2">Free</div>
                  )}
                </div>
                <div className="d-flex flex-row justify-content-between mt-2">
                  <div className="title-2">Buyout Option:</div>
                  {cards.idrPrice ? (
                    <div className="value-2">{`${idrFormat(
                      cards.buyoutIdr
                    )} / ${usdFormat(cards.buyoutUsd)}`}</div>
                  ) : (
                    <div className="value-2">-</div>
                  )}
                </div>
                <div className="d-flex flex-row justify-content-between mt-2">
                  <div className="title-2">Payment Method:</div>
                  <div className="value-2">{cards.name}</div>
                </div>
                {cards.idrPrice ? (
                  <div className="d-flex flex-row justify-content-between mt-4 frame-total-amount">
                    <div className="title-total-amount">Payment Method:</div>
                    <div className="value-total-amount">{`${idrFormat(
                      cards.buyoutIdr
                    )} / ${usdFormat(cards.buyoutUsd)}`}</div>
                  </div>
                ) : (
                  <div className="d-none"></div>
                )}
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}
