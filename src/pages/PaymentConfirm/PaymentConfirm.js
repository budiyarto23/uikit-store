import React, { useState } from "react";
import "./paymentConfirm.scss";

import FormText from "components/Form/FormText/FormText";
import InputFile from "components/Form/InputFile/InputFile";
import Button from "components/Button";
import Modal from "components/Modal/Modal";
import Header from "pages/LandingPage/Header/Header";

import ConfirmIcon from "assets/icons/confirm-payment-success-ic.svg";

export default function PaymentConfirm() {
  const [invoiceNumber, setInvoice] = useState("");
  const [email, setEmail] = useState("");
  const [forPurpose, setForPurpose] = useState("");
  const [show, setShow] = useState(false);

  const handlerInvoice = (event) => {
    setInvoice(event.target.value);
  };

  const handlerEmail = (event) => {
    setEmail(event.target.value);
  };

  const handlerPurpose = (event) => {
    setForPurpose(event.target.value);
  };

  return (
    <div style={{ background: "#FFFBF8", height: "auto" }}>
      <Header />
      <div className="container-fluid hack-margin-responsive pb-5">
        <div className="row justify-content-center">
          <div
            className="col col-xl-5 col-lg-5 col-md-7 col-sm-12"
          >
            <div className="d-flex flex-column align-items-center frame-payment-confirm">
              <p className="payment-title text-center">Payment Confirm</p>
              <p className="payment-subtitle text-center">Segera konfirmasi pembayaran Anda untuk bisa mendownload produk</p>
              <div className="d-flex flex-column frame-confirm-section">
                <FormText
                  name="firstName"
                  className=""
                  type="number"
                  value={invoiceNumber}
                  placeholder="Invoice Number"
                  onChange={handlerInvoice}
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
                <InputFile
                  type="file"
                  accept="image/*"
                  name="proofPayment"
                  value={forPurpose}
                  onChange={handlerPurpose}
                />
                <p className="note-payment-confirm">
                  Setelah mengirim permintaan untuk custom design, Anda akan
                  segera dihubungi via email untuk proses lebih lanjut.
                </p>
                <Button
                  type="button"
                  className="btn btn-primary"
                  style={{ marginTop: 12 }}
                  onClick={() => setShow(true)}
                >
                  Sent Confirm Payment
                </Button>
                <Modal
                  icon={ConfirmIcon}
                  title="Konfirmasi Pembayaran Terkirim"
                  description="Anda akan segera menerima email untuk mendownload design yang Anda beli"
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
