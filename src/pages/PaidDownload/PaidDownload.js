import React, { useState, useEffect } from "react";
import "./paidDownload.scss";
import { useParams } from "react-router-dom";

import Modal from "components/Modal/Modal";
import Button from "components/Button";
import FormText from "components/Form/FormText/FormText";
// import InfoIcon from "assets/icons/info-icons.svg";
import BankBCA from "assets/images/bca.svg";
import BankBRI from "assets/images/bri.svg";
import OVO from "assets/images/ovo.svg";
import Gopay from "assets/images/gopay.svg";
import Dana from "assets/images/dana.svg";
import PayPal from "assets/images/paypal.svg";
import CheckoutIcon from "assets/icons/checkout-success-ic.svg";
import FreeDownloadIcon from "assets/icons/download-ic.svg";
import usdFormat from "utils/formatUSD";
import idrFormat from "utils/formatNumber";

export default function PaidDownload({ data }) {
  const { id } = useParams();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [show, setShow] = useState(false);
  const [shows, setShows] = useState(false);
  const [paymentMethodSelected, setFormData] = useState("Not selected");
  const [on, setOnState] = useState(false);
  // const goPath = useHistory();

  // const routeUIKits = () => {
  //   let path = "/admin/add-kit";
  //   goPath.push(path);
  // };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handlerName = (event) => {
    setFullName(event.target.value);
  };

  const handlerEmail = (event) => {
    setEmail(event.target.value);
  };

  const paymentOptionLocal = [
    {
      name: "Bank BCA",
      logo: BankBCA,
    },
    {
      name: "Bank BRI",
      logo: BankBRI,
    },
    {
      name: "OVO",
      logo: OVO,
    },
    {
      name: "Gopay",
      logo: Gopay,
    },
    {
      name: "DANA",
      logo: Dana,
    },
    {
      name: "PayPal",
      logo: PayPal,
    },
  ];

  const toggleBuyout = () => setOnState((oi) => !oi);

  return (
    <div
      className="container-fluid"
      style={{ background: "#FFFBF8", height: "auto", paddingTop: 60, }}
    >
      {data
        .filter((item) => item.id === id)
        .map((val, index) => (
          <div key={index}>
            <div className="row justify-content-center">
              <div className="col col-xl-5 col-lg-5 col-md-7 col-sm-12">
                <p className="paid-title text-left">Checkout</p>
                <p className="paid-subtitle text-left">Checkout dengan aman</p>
                <div className="d-flex flex-column frame-paid-download">
                  <div className="bg-title-paid d-flex flex-column justify-content-center">
                    <div className="frame-title-paid">Your Identity</div>
                  </div>
                  <div className="d-flex flex-column frame-paid-form">
                    <FormText
                      name="firstName"
                      className="paid-form"
                      type="text"
                      value={fullName}
                      placeholder="Full Name"
                      onChange={handlerName}
                    />
                    <FormText
                      name="firstName"
                      className="paid-form"
                      type="email"
                      value={email}
                      placeholder="Email"
                      onChange={handlerEmail}
                      errorResponse="hjsdhjs"
                    />
                    <div className="note-paid-download">
                      Pastikan email aktif, karena akan menerima link untuk
                      download design
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row justify-content-center">
              <div
                className="col col-xl-5 col-lg-5 col-md-7 col-sm-12"
                style={{ paddingTop: "30px" }}
              >
                <div className="d-flex flex-column frame-paid-download-1">
                  <div className="bg-title-paid d-flex flex-column justify-content-center">
                    <div className="frame-title-paid">Produk</div>
                  </div>
                  <div className="d-flex flex-column frame-paid-form">
                    <div className="" style={{ marginTop: "-10px" }}>
                      <div className="badges-product-category">
                        {val.category}
                      </div>
                    </div>
                    <div className="product-title-paid">{val.name}</div>
                    <div className="product-subtitle-paid">
                      {val.description}
                    </div>
                  </div>
                  <div className="d-flex flex-column mt-5 price-frame">
                    <div className="d-flex flex-column frame-standart-price">
                      <div className="title-price">Price</div>
                      <div className="d-flex flex-row mt-1">
                        {val.idrPrice !== 0 ? (
                          <span className="standart-price-idr">
                            {idrFormat(val.idrPrice)}
                          </span>
                        ) : (
                          <span className="price-not-paid">Free</span>
                        )}
                        {val.usdPrice !== 0 ? (
                          <span className="standart-price-usd">{`/ ${usdFormat(
                            val.usdPrice
                          )}`}</span>
                        ) : (
                          <span className="d-none">Free</span>
                        )}
                      </div>
                      <a
                        type="link"
                        // target="_blank"
                        // rel="noreferrer"
                        href={`/detail/${id}`}
                        className="see-detail-paid"
                      >
                        See Detail
                      </a>
                    </div>
                    <div className="d-flex flex-column frame-buyout">
                      {val.idrPrice !== 0 ? (
                        <div>
                          <div className="price-divider-paid"></div>
                          <div className="buyout-option-title">
                            Buyout Option
                          </div>
                          <div className="buyout-option-decsription">
                            This UI Kits will be removed from the store and will
                            no longer be available for purchase.
                          </div>
                          <div className="d-flex flex-row">
                            <span className="buyout-price-idr">
                              {idrFormat(val.buyoutIdr)}
                            </span>
                            <span className="buyout-price-idr">
                              {` / ${usdFormat(val.buyoutUsd)}`}
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
                      ) : (
                        <div className="d-none">Hidden element</div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {val.idrPrice !== 0 ? (
              <div className="row justify-content-center">
                <div
                  className="col col-xl-5 col-lg-5 col-md-7 col-sm-12"
                  style={{ paddingTop: "30px" }}
                >
                  <div className="d-flex flex-column frame-paid-download">
                    <div className="bg-title-paid d-flex flex-column justify-content-center">
                      <div className="frame-title-paid">Payment Method</div>
                    </div>
                    <div className="d-flex flex-column frame-paid-payment">
                      <div
                        className="d-flex flex-row align-items-center"
                        style={{ marginTop: "10px" }}
                      >
                        <div className="d-flex flex-column">
                          <div className="note-paid-payment-info">
                            Choose PayPal if your location not in Indonesia.
                          </div>
                        </div>
                      </div>

                      {paymentOptionLocal.map((val, index) => (
                        <div
                          key={index}
                          className={paymentMethodSelected === val.name ? "d-flex flex-row align-items-center justify-content-between frame-payment-option actived" : "d-flex flex-row align-items-center justify-content-between frame-payment-option"}
                        >
                          <div className="form-check" style={{ marginLeft: 6 }}>
                            <input
                              className="form-check-input"
                              type="radio"
                              name="flexRadioDefault"
                              id={`flexRadioDefault${val.name}`}
                              checked={paymentMethodSelected === val.name}
                              value={val.name}
                              onClick={() => setFormData(val.name)}
                            />
                            <label
                              className={paymentMethodSelected === val.name ? "form-check-label payment-label text-actived" : "form-check-label payment-label"}
                              htmlFor={`flexRadioDefault1${val.name}`}
                            >
                              {val.name}
                            </label>
                          </div>
                          <img
                            src={val.logo}
                            alt="bank-bca"
                            className="bca-icon"
                            style={{ height: 22, width: 90 }}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <span className="d-none">Never Mind</span>
            )}

            <div className="row justify-content-center">
              <div
                className="col col-xl-5 col-lg-5 col-md-7 col-sm-12"
                style={{ paddingTop: 30, marginBottom: 90 }}
              >
                {val.idrPrice !== 0 ? (
                  <div>
                    <div className="d-flex flex-column frame-paid-download-1">
                      <div className="bg-title-paid d-flex flex-column justify-content-center">
                        <div className="frame-title-paid">Payment</div>
                      </div>
                      <div
                        className="d-flex flex-column frame-paid-form"
                        style={{ marginTop: "20px" }}
                      >
                        <div className="d-flex flex-row">
                          <div className="title-payment">Price</div>
                          <p className="value-payment">
                            {idrFormat(val.idrPrice)}
                          </p>
                          <p
                            className="value-payment"
                            style={{ marginLeft: 6 }}
                          >{` / ${usdFormat(val.usdPrice)}`}</p>
                        </div>
                        <div className="d-flex flex-row">
                          <div className="title-payment">Buyout Option</div>
                          {val.buyoutIdr !== 0 && on ? (
                            <p className="value-payment">
                              {idrFormat(val.buyoutIdr)}
                            </p>
                          ) : (
                            <p className="value-payment">-</p>
                          )}
                          {val.buyoutIdr !== 0 && on ? (
                            <p
                              className="value-payment"
                              style={{ marginLeft: 6 }}
                            >{` / ${usdFormat(val.buyoutUsd)}`}</p>
                          ) : (
                            <p className="d-none">Free</p>
                          )}
                        </div>
                        <div className="d-flex flex-row">
                          <div className="title-payment">Discount</div>
                          <p className="value-payment">-</p>
                        </div>
                        <div className="d-flex flex-row">
                          <div className="title-payment">Payment Method</div>
                          {paymentMethodSelected === "Not selected" ? (
                            <p className="value-payment-not-selected">
                              {paymentMethodSelected}
                            </p>
                          ) : (
                            <p className="value-payment" style={{ width: 90 }}>
                              {paymentMethodSelected}
                            </p>
                          )}
                        </div>
                        <div className="d-flex flex-row">
                          <div className="title-payment">Total Amount</div>
                          <p className="total-value-payment">
                            {on === false
                              ? idrFormat(val.idrPrice)
                              : idrFormat(val.idrPrice + val.buyoutIdr)}
                          </p>
                          <p
                            className="total-value-payment"
                            style={{ marginLeft: 6 }}
                          >
                            {on === false
                              ? ` / ${usdFormat(val.usdPrice)}`
                              : ` / ${usdFormat(val.usdPrice + val.buyoutUsd)}`}
                          </p>
                        </div>
                      </div>
                      <div
                        className="d-flex flex-column mt-4 price-frame"
                        style={{ padding: "0px 20px 30px 20px" }}
                      >
                        <div className="note-before-checkout">
                          Setelah melakukan pembayaran, silahkan lakukan
                          konfirmasi pembayaran dengan cara mengirim bukti
                          transfer.
                        </div>
                        <div className="frame-before-checkout">
                          <Button
                            type="button"
                            className="btn btn-primary buy-now-button"
                            onClick={() => setShow(true)}
                            isLoading={false}
                          >
                            Buy Now
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div>
                    <div className="d-flex flex-column frame-paid-download-1">
                      <div className="bg-title-paid d-flex flex-column justify-content-center">
                        <div className="frame-title-paid">Payment</div>
                      </div>
                      <div
                        className="d-flex flex-column frame-paid-form"
                        style={{ marginTop: "20px" }}
                      >
                        <p className="title-free-note">It's All Free for You</p>
                        <p className="subtitle-free-note mx-auto">You can support us with buy premium UI Kits or hire us. Thanks a lot.</p>
                      </div>
                      <div
                        className="d-flex flex-column mt-4 price-frame"
                        style={{ padding: "0px 20px 30px 20px" }}
                      >
                        <div className="frame-before-checkout mt-4">
                          <Button
                          type="button"
                          className="btn btn-primary buy-now-button"
                          onClick={() => setShows(true)}
                          isLoading={false}
                        >
                          Free Download
                        </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Open modal paid download */}

            {val.idrPrice !== 0 ? (
              <Modal
                // type="modal-confirm"
                icon={CheckoutIcon}
                title="Berhasil Membuat Pesanan"
                description="Silahkan cek email Anda untuk detail pesanan dan cara melakukan permbayaran"
                // buttonCancel="NO"
                buttonAccept="CANCEL"
                onClose={() => setShow(false)}
                // onDestination={routeUIKits}
                show={show}
              />
            ) : (
              <Modal
                icon={FreeDownloadIcon}
                title="Link Download Berhasil Dikirim"
                description="Silahkan cek email Anda dan kunjungi link yang diberikan untuk mendownload design"
                buttonName="OK"
                onClose={() => setShows(false)}
                show={shows}
              />
            )}
          </div>
        ))}
    </div>
  );
}
