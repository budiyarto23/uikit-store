import React, { useState, useEffect } from "react";
import "./paidDownload.scss";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { getUiKits, postPaidDownload } from "config/redux/action";
import Button from "components/Button";
import BankBCA from "assets/images/bank-bca.svg";
import PayPal from "assets/images/paypal.svg";
import usdFormat from "utils/formatUSD";
import idrFormat from "utils/formatNumber";
import PaidDownloadSkeleton from "pages/PaidDownload/PaidSkeleton";

export default function PaidDownload() {
  const { loading, kitsData } = useSelector((state) => ({
    loading: state.utils.isLoading,
    kitsData: state.kits.kitsCollection,
  }));
  const dispatch = useDispatch();
  const { id } = useParams();
  const [on, setOnState] = useState(false);
  const [unique, setUnique] = useState(0);
  const date = new Date().getTime();
  var totalAmountIDR = 0;
  var totalAmountUSD = 0;
  const status = "PENDING";
  const thisKit = kitsData.filter((item) => item.id === id);


  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getUiKits());
    setUnique(Math.floor(Math.random() * 1000 + 10));
    // eslint-disable-next-line
  }, []);

  const downloadKit = async () => {
    await dispatch(
      postPaidDownload({
        date,
        thisKit,
        unique,
        totalAmountIDR,
        totalAmountUSD,
        status,
        on
      })
    )
      .then((res) => console.log("berhasil download", +res))
      .catch((err) => err);
  };

  const toggleBuyout = () => setOnState((oi) => !oi);

  return (
    <div
      className="container-fluid bg-paid-download">
      <p className="paid-main-title text-center">Checkout, Easy!!!</p>
      <p className="paid-main-subtitle text-center mx-auto">
      Enjoy the cool features and support us to keep forward and help many people
      </p>
      {loading && <PaidDownloadSkeleton />}
      {!loading &&
        kitsData
          .filter((item) => item.id === id)
          .map((val, index) => (
            <div key={index}>
              {val.data.idrPrice !== "0" ? (
                <div className="row justify-content-center">
                  <div className="col-sm-12 col-md-6 col-lg-5 col-xl-5">
                    <div className="paid-download-container-left">
                      <div className="paid-preview-img">
                        <img
                          className="item-preview-img"
                          src={val.data.images[0]}
                          alt="tstst"
                        />
                      </div>
                      <div className="paid-title-name">
                        {val.data.productName}
                      </div>
                      <div className="paid-description-name">
                        {val.data.productDescription}
                      </div>
                      <div className="d-flex flex-row mt-3">
                        <p className="total-value-payment">
                          {idrFormat(val.data.idrPrice)} -
                        </p>
                        <p
                          className="total-value-payment"
                          style={{ marginLeft: 6 }}
                        >
                          {usdFormat(val.data.usdPrice)}
                        </p>
                      </div>
                      <div className="paid-container-buyout">
                        <div className="title-buyout">Buy Out Option</div>
                        <div className="description-buyout">
                          You will be the first or last to have the design. The UI kits will be removed and no longer available on the store.
                        </div>
                        <div className="d-flex flex-row">
                          <span className="buyout-price-idr">
                            {idrFormat(val.data.idrBuyout)} -
                          </span>
                          <span className="buyout-price-idr">
                            {usdFormat(val.data.usdBuyout)}
                          </span>
                        </div>
                        <Button
                          className={
                            on
                              ? "btn btn-outline-buyout hack-btn-buyout added"
                              : "btn btn-outline-buyout hack-btn-buyout not-added"
                          }
                          on={on}
                          onClick={toggleBuyout}
                        >
                          {on === false ? "Add" : "Added"}
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4">
                    <div className="paid-download-container-left">
                      <div className="master-title-payment">Order Summary</div>
                      <div className="d-flex flex-row justify-content-between">
                        <div className="title-payment">Price</div>
                        <div className="d-flex flex-row">
                          <p className="value-payment">
                            {idrFormat(val.data.idrPrice)} -
                          </p>
                          <p
                            className="value-payment"
                            style={{ marginLeft: 6 }}
                          >
                            {usdFormat(val.data.usdPrice)}
                          </p>
                        </div>
                      </div>
                      <div className="d-flex flex-row justify-content-between">
                        <div className="title-payment">Buyout Option</div>
                        <div className="d-flex flex-row">
                          {on ? (
                            <>
                              <p className="value-payment">
                                {idrFormat(val.data.idrBuyout)} -
                              </p>
                              <p
                                className="value-payment"
                                style={{ marginLeft: 6 }}
                              >
                                {usdFormat(val.data.usdBuyout)}
                              </p>
                            </>
                          ) : (
                            <p className="value-payment">-</p>
                          )}
                        </div>
                      </div>

                      <div className="d-flex flex-row justify-content-between">
                        <div className="title-payment">Unique Code</div>
                        <p className="value-payment">{idrFormat(unique)}</p>
                      </div>
                      <div className="d-flex flex-row justify-content-between">
                        <div className="title-payment">Total Amount</div>
                        <div className="d-flex flex-row">
                          <p className="value-payment-bold">
                            {on 
                              ? (`${totalAmountIDR = idrFormat(
                                parseInt(val.data.idrPrice) + unique +
                                  parseInt(val.data.idrBuyout)
                              )} - `)
                              : (`${totalAmountIDR = idrFormat(
                                  parseInt(val.data.idrPrice) + unique
                                )} - `)}
                          </p>
                          <p
                            className="value-payment-bold"
                            style={{ marginLeft: 6 }}
                          >
                            {on 
                              ? (totalAmountUSD = usdFormat(
                                parseInt(val.data.usdPrice) +
                                  parseInt(val.data.usdBuyout)
                              ))
                              : (totalAmountUSD = usdFormat(
                                  val.data.usdPrice
                                ))}
                          </p>
                        </div>
                      </div>
                      <div className="master-title-payment mt-4">
                        Payment Method
                      </div>
                      <div className="d-flex flex-row mt-3">
                        <div className="box-bank-logo">
                          <img src={BankBCA} alt="dks" className="bank-logo" />
                        </div>
                        <div className="d-flex flex-column ml-4">
                          <div className="bank-account-name">
                            A/n Ahmad Budiyarto
                          </div>
                          <div className="bank-account-number">
                            493483483843487
                          </div>
                          <div className="payment-method-note">
                            Local payment - Indonesian only
                          </div>
                        </div>
                      </div>
                      <div className="d-flex flex-row mt-4">
                        <div className="box-bank-logo">
                          <img src={PayPal} alt="dks" className="bank-logo" />
                        </div>
                        <div className="d-flex flex-column ml-4">
                          <div className="bank-account-name">
                            ahmadbudiyarto @gmail.com
                          </div>
                          <div className="payment-method-note payment-method-note-mobile">
                            International payment - around the world
                          </div>
                        </div>
                      </div>
                        <Button
                          type="button"
                          className="btn btn-primary buy-now-button-1"
                          onClick={downloadKit}
                          // isLoading={false}
                        >
                          Confirm Payment via WhatsApp
                        </Button>
                        <Button
                          type="button"
                          className="btn btn-outline buy-now-button-2"
                          // onClick={() => setShow(true)}
                          // isLoading={false}
                        >
                          Confirm Payment via Email
                        </Button>
                        <div className="title-buyout mt-5">Notes</div>
                        <div className="description-buyout mb-2" style={{ lineHeight: 2 }}>
                        - You just choose one payment nominal, IDR or USD. <br/> - Admin operational at 08 AM - 09 PM WIB (GMT +7)
                        </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="row justify-content-center">
                  <div className="col-sm-12 col-md-7 col-lg-5 col-xl-5">
                    <div className="paid-download-container-left">
                      <div className="paid-preview-img">
                        <img
                          className="item-preview-img"
                          src={val.data.images[0]}
                          alt="tstst"
                        />
                      </div>
                      <div className="paid-title-name">
                        {val.data.productName}
                      </div>
                      <div className="paid-description-name">
                        {val.data.productDescription}
                      </div>
                      <div className="d-flex flex-row mt-5">
                        <p className="total-value-payment">FREE DOWNLOAD</p>
                      </div>
                      <Button
                        type="button"
                        className="btn btn-primary buy-now-button"
                        //   onClick={() => setShow(true)}
                        //   isLoading={false}
                      >
                        Request Link Download
                      </Button>
                      <div className="title-buyout mt-5">Notes</div>
                        <div className="description-buyout mb-2" style={{ lineHeight: 2 }}>
                        - Please, don't sell this design to keep support us <br/> - Admin operational at 08 AM - 09 PM WIB (GMT +7)
                        </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
    </div>
  );
}
