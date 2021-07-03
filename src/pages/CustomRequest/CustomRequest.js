import React, { useState, useEffect } from "react";
import "./customRequest.scss";
import { useParams } from "react-router-dom";

import FormText from "components/Form/FormText/FormText";
import Button from "components/Button";
import Modal from "components/Modal/Modal";
import RequestIcon from "assets/icons/request-custom-ic.svg";
import idrFormat from "utils/formatNumber";
import usdFormat from "utils/formatUSD";

export default function CustomRequest({ datanya }) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsCustom, setCustom] = useState("");
  const [show, setShow] = useState(false);
  const { id } = useParams();

  const handlerName = (event) => {
    setFullName(event.target.value);
  };

  const handlerEmail = (event) => {
    setEmail(event.target.value);
  };

  const handlerCustom = (event) => {
    setCustom(event.target.value);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      style={{
        background: "#FFFBF8",
        height: "auto",
        paddingBottom: 80,
        paddingTop: 60,
      }}
    >
      <div className="container-fluid">
        <div className="row justify-content-center">
          {datanya
            .filter((item) => item.id === id)
            .map((items, index) => (
              <div
                className="col col-xl-5 col-lg-5 col-md-7 col-sm-12"
                key={index}
              >
                <p className="paid-title text-left">Custom Design Request</p>
                <p className="paid-subtitle text-left">Custom Design Request</p>
                <div className="d-flex flex-column frame-request-custom">
                  <div className="bg-title-confirm d-flex flex-column justify-content-center">
                    <div className="frame-title-confirm">Product</div>
                  </div>
                  <div className="d-flex flex-column frame-paid-form">
                    <div className="" style={{ marginTop: "-10px" }}>
                      <div className="badges-product-category">
                        Website Kits
                      </div>
                    </div>
                    <div className="product-title-paid">{items.name}</div>
                    <div className="product-subtitle-paid">
                      {items.description}
                    </div>
                  </div>
                  <div className="d-flex flex-column mt-5 price-frame">
                    <div className="title-price-custom">Price</div>
                    <div className="d-flex flex-row align-items-center">
                      {items.idrPrice !== 0 ? (
                        <span className="price-custom-idr">
                          {idrFormat(items.idrPrice)}
                        </span>
                      ) : (
                        <div className="price-custom-free">Free</div>
                      )}
                      {items.usdPrice !== 0 ? (
                        <span className="price-custom-usd">
                          {`/ ${usdFormat(items.usdPrice)}`}
                        </span>
                      ) : (
                        <p className="d-none">Free</p>
                      )}
                    </div>
                    <a
                      type="link"
                      target="_blank"
                      rel="noreferrer"
                      href={`/detail/${id}`}
                      className="link-see-detail"
                    >
                      See Detail
                    </a>
                  </div>
                </div>
              </div>
            ))}
        </div>

        <div className="row justify-content-center">
          <div
            className="col col-xl-5 col-lg-5 col-md-7 col-sm-12"
            style={{ paddingTop: 30 }}
          >
            <div className="d-flex flex-column frame-request-custom">
              <div className="bg-title-confirm d-flex flex-column justify-content-center">
                <div className="frame-title-confirm">Fill Form Below</div>
              </div>
              <div className="d-flex flex-column form-request">
                <FormText
                  name="firstName"
                  className="form-request"
                  type="text"
                  value={fullName}
                  placeholder="Full Name"
                  onChange={handlerName}
                />
                <FormText
                  name="firstName"
                  className=""
                  type="email"
                  value={email}
                  placeholder="Email"
                  onChange={handlerEmail}
                  errorResponse="hjsdhjs"
                />
                <textarea
                  className="form-control"
                  placeholder="What you want to custom"
                  value={whatsCustom}
                  id="exampleFormControlTextarea1"
                  style={{ marginBottom: 14 }}
                  onChange={handlerCustom}
                ></textarea>
                <p className="note-request-custom">
                  Setelah mengirim permintaan untuk custom design, Anda akan
                  segera dihubungi via email untuk proses lebih lanjut.
                </p>
                <Button
                  type="button"
                  className="btn btn-primary"
                  style={{ marginTop: 12 }}
                  onClick={() => setShow(true)}
                >
                  Sent Custom Design Request
                </Button>
                <Modal
                  icon={RequestIcon}
                  title="Request Custom Design Terkirim"
                  description="Anda akan segera kami hubungi via email untuk proses lebih lanjut."
                  buttonName="OK"
                  onClose={() => setShow(false)}
                  show={show}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
