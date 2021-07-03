import React, { useState, useCallback } from "react";
// package
import { useParams, useHistory, Link } from "react-router-dom";
import ImageViewer from "react-simple-image-viewer";
// component
import BackIcon from "assets/icons/back-icon.svg";
import usdFormat from "utils/formatUSD";
import idrFormat from "utils/formatNumber";

import "./customDetail.scss";

export default function AddUIKit({ data }) {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const { id } = useParams();
  const history = useHistory();
  const [decisionSelected, setFormData] = useState("Need Follow Up");

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
      decision: "FOLLOW UP",
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
                  <div className="title-addkit">Request Custom</div>
                  <div
                    className={
                      decisionSelected === "REJECT"
                        ? "badge-status-confirm reject"
                        : decisionSelected === "FOLLOW UP"
                        ? "badge-status-confirm confirm"
                        : "badge-status-confirm"
                    }
                  >
                    {decisionSelected}
                  </div>
                </div>
                <div className="subtitle-addkit">
                  All information about cutom request will be here.
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
                        <div className="title-1">Request Date:</div>
                        <div className="value-1">{cards.name}</div>
                      </div>
                      <div className="d-flex flex-row mt-2">
                        <div className="title-1">Response Date:</div>
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

                <div className="title-section mb-3">Product Information</div>
                <div className="d-flex flex-row justify-content-between mt-2">
                  <div className="title-2">Prodcut Name:</div>
                  <div className="value-2">{cards.name}</div>
                </div>
                <div className="d-flex flex-row justify-content-between mt-2">
                  <div className="title-2">Category & Price:</div>
                  {cards.idrPrice ? (
                    <div className="value-2">
                      {`${cards.category} & ${idrFormat(
                        cards.idrPrice
                      )} / ${usdFormat(cards.usdPrice)}`}
                    </div>
                  ) : (
                    <div className="value-2">{`${cards.category} & Free`}</div>
                  )}
                </div>
                <div className="title-section mt-4 mb-3">User Information</div>
                <div className="d-flex flex-row justify-content-between mt-2">
                  <div className="title-2">Full Name:</div>
                  <div className="value-2">{cards.name}</div>
                </div>
                <div className="d-flex flex-row justify-content-between mt-2">
                  <div className="title-2">Email:</div>
                  <div className="value-2">{cards.name}</div>
                </div>
                <div className="d-flex flex-row justify-content-between mt-2">
                  <div className="title-2">Purpose:</div>
                  <div className="value-2">
                    Lorem ipsum is a text helper for any profession. Lorem ipsum
                    is a text helper.
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}
