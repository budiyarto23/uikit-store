import React, { useState, useCallback, useEffect } from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import ImageViewer from "react-simple-image-viewer";
import { useSelector, useDispatch } from "react-redux";

// component
import { getDownloadKits } from "config/redux/action";
import BackIcon from "assets/icons/back-icon.svg";
import usdFormat from "utils/formatUSD";
import idrFormat from "utils/formatNumber";

import "./downloadDetail.scss";

export default function AddUIKit() {
  const { loading, kitsDownload } = useSelector((state) => ({
    loading: state.utils.isLoading,
    kitsDownload: state.kits.kitsDownload,
  }));
  const dispatch = useDispatch();
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const { id } = useParams();
  const history = useHistory();
  // const [decisionSelected, setFormData] = useState("Need Confirmation");

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  // const finalDecision = [
  //   {
  //     decision: "CONFIRM",
  //   },
  //   {
  //     decision: "REJECT",
  //   },
  // ];

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getDownloadKits());
    // eslint-disable-next-line
  }, []);

  return (
    <div
      className="container-fluid"
      style={{ background: "#F3F4F6", minHeight: "100vh" }}
    >
      {loading && (
        <div className="row justify-content-center">
          <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
            <div className="main-frame mt-5 mb-5" style={{ height: 626 }}>
              <div
                className="d-flex justify-content-center mt-5 mb-4"
                style={{ paddingTop: 180 }}
              >
                <div className="spinner-grow text-primary" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
              <div className="text-center loading-text">Wait a moment.</div>
            </div>
          </div>
        </div>
      )}
      {!loading &&
        kitsDownload
          .filter((card) => card.id === id)
          .map((cards, index) => (
            <div className="row justify-content-center">
              {cards.data.thisKit.map((item, id) => (
                <div
                  className="col-sm-12 col-md-12 col-lg-6 col-xl-6"
                  key={index}
                >
                  <div className="main-frame mt-5 mb-5">
                    <Link className="back-btn" onClick={() => history.goBack()}>
                      <img src={BackIcon} alt="back-icon" />
                      Back
                    </Link>
                    <div className="d-flex flex-row justify-content-between mt-3">
                      <div className="title-addkit">Download Detail</div>
                      <div className="badge-status-confirm">
                        {cards.data.status}
                      </div>
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
                            src={item.data.images[0]}
                            alt={item.data.images[0]}
                            onClick={() => openImageViewer(index)}
                          />
                        </div>
                        {isViewerOpen && (
                          <ImageViewer
                            src={item.data.images}
                            currentIndex={currentImage}
                            onClose={closeImageViewer}
                            backgroundStyle={{
                              backgroundColor: "rgba(0,0,0,0.6)",
                              zIndex: "+11",
                            }}
                          />
                        )}
                        <div className="d-flex flex-column">
                          <div className="unique-number mt-2">
                            {item.data.productName}
                          </div>
                          <div className="d-flex flex-row mt-3">
                            <div className="title-1">Date:</div>
                            <div className="value-1">{cards.data.date}</div>
                          </div>
                          <div className="d-flex flex-row mt-2">
                            <div className="title-1">Confirm Date:</div>
                            <div className="value-1">{"-"}</div>
                          </div>
                        </div>
                      </div>

                      {/* <div className="d-flex flex-row mt-4">
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
                  </div> */}
                    </div>

                    <div className="title-section mb-3">Order Information</div>
                    <div className="d-flex flex-row justify-content-between mt-2">
                      <div className="title-2">Price:</div>
                      <div className="value-2">{`${idrFormat(
                        item.data.idrPrice
                      )} / ${usdFormat(item.data.usdPrice)}`}</div>
                    </div>
                    <div className="d-flex flex-row justify-content-between mt-2">
                      <div className="title-2">Buyout Option:</div>
                      {cards.data.on ? (
                        <div className="value-2">{`${idrFormat(
                          item.data.idrBuyout
                        )} / ${usdFormat(item.data.usdBuyout)}`}</div>
                      ) : (
                        <div className="value-2">-</div>
                      )}
                    </div>
                    <div className="d-flex flex-row justify-content-between mt-2">
                      <div className="title-2">Unique Code:</div>
                      <div className="value-2">{cards.data.unique}</div>
                    </div>
                    <div className="d-flex flex-row justify-content-between mt-4 frame-total-amount">
                      <div className="title-total-amount">Total Amount:</div>
                      <div className="value-total-amount">{`${cards.data.totalAmountIDR} / ${cards.data.totalAmountUSD}`}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
    </div>
  );
}
