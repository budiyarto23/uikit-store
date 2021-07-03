import React, { useState } from "react";
import "./customDesign.scss";

import FormText from "components/Form/FormText/FormText";
import Button from "components/Button";
import Modal from "components/Modal/Modal";

import RequestIcon from "assets/icons/request-custom-ic.svg";

export default function PaymentConfirm() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [whatCustom, setCustom] = useState("");
  const [show, setShow] = useState(false);

  const handlerFullName = (event) => {
    setFullName(event.target.value);
  };

  const handlerEmail = (event) => {
    setEmail(event.target.value);
  };

  const handlerCustomDesc = (event) => {
    setCustom(event.target.value);
  };


  return (
    <div style={{ background: "#FFFBF8", height: "100vh" }}>
      <div className="container-fluid hack-margin-responsive" style={{  }}>
        <div className="row justify-content-center">
          <div
            className="col col-xl-5 col-lg-5 col-md-7 col-sm-12"
            style={{ paddingTop: "5%" }}
          >
            <div className="d-flex flex-column align-items-center frame-payment-confirm">
              <p className="payment-title text-center">Custom Design Request</p>
              <div className="d-flex flex-column frame-confirm-section">
                <FormText
                  name="firstName"
                  className=""
                  type="text"
                  value={fullName}
                  placeholder="Full Name"
                  onChange={handlerFullName}
                />
                <FormText
                  name="email"
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
                  value={whatCustom}
                  id="exampleFormControlTextarea1"
                  style={{ marginBottom: 24 }}
                  onChange={handlerCustomDesc}
                ></textarea>
                <p className="note-payment-confirm">
                    Setelah mengirim permintaan untuk custom design, Anda akan segera dihubungi via email untuk proses lebih lanjut.
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
