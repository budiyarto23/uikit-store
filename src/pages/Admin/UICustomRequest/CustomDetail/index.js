import React, { useState, useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// package
import { useParams, useHistory, Link } from "react-router-dom";
import ImageViewer from "react-simple-image-viewer";
// component
import BackIcon from "assets/icons/back-icon.svg";
import usdFormat from "utils/formatUSD";
import idrFormat from "utils/formatNumber";
import { getCustomKits } from "config/redux/action";

import "./customDetail.scss";

export default function AddUIKit() {
  // const [decisionSelected, setFormData] = useState("Need Follow Up");
  const { loading, kitsCustom } = useSelector((state) => ({
    loading: state.utils.isLoading,
    kitsCustom: state.kits.kitsCustom,
  }));
  const dispatch = useDispatch();
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

  // const finalDecision = [
  //   {
  //     decision: "FOLLOW UP",
  //   },
  //   {
  //     decision: "REJECT",
  //   },
  // ];

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getCustomKits());
    // eslint-disable-next-line
  }, []);

  return (
    <div className="container-fluid" style={{ background: "#F3F4F6", minHeight: "100vh" }}>
      {loading && (
        <div className="row justify-content-center">
          <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
            <div className="main-frame mt-5 mb-5" style={{ height: 541 }}>
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
        kitsCustom
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
                      <div className="title-addkit">Request Custom Detail</div>
                      <div className="badge-status-confirm">
                        {cards.data.status}
                      </div>
                    </div>
                    <div className="subtitle-addkit">
                      All information about request custom here.
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
                    </div>

                    <div className="title-section mb-3">Custom Request Information</div>
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
                  </div>
                </div>
              ))}
            </div>
          ))}
    </div>
  );
}
