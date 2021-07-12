import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// package

import "./addUIKit.scss";
import FormText from "components/Form/FormText/FormText";
import Button from "components/Button";
import Modal from "components/Modal/Modal";
import PageNotFound from "pages/PageNotFound";
import { addNewKit, closeModal } from "config/redux/action";
// import InputFile from "components/Form/InputFile/InputFile";
// component

import ConfirmIcon from "assets/icons/confirm-payment-success-ic.svg";
// assets

function AddUIKit() {
  // consume from redux
  const { loading, modalOpen } = useSelector((state) => ({
    loading: state.isLoading,
    // userId: state.user.uid,
    modalOpen: state.modalOpen,
  }));
  const dispatch = useDispatch();

  const history = useHistory();
  const date = new Date().getTime();
  const [status, setStatus] = useState("");
  const [linkDownload, setLinkDownload] = useState("");
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [category, setCategory] = useState("");
  const [benefits, setBenefits] = useState([{ benefit: "" }]);
  const [idrPrice, setIDRPrice] = useState("");
  const [idrBuyout, setIDRBuyout] = useState("");
  const [usdPrice, setUSDPrice] = useState("");
  const [usdBuyout, setUSDBuyout] = useState("");
  const [discount, setDiscount] = useState("");
  const [images, setImages] = useState([]);

  const handlerStatus = (event) => {
    setStatus(event.target.value);
  };

  const handlerProductName = (event) => {
    setProductName(event.target.value);
  };

  const handlerProductDescription = (event) => {
    setProductDescription(event.target.value);
  };
  const handlerLinkDownload = (event) => {
    setLinkDownload(event.target.value);
  };

  const handlerSelectCategory = (event) => {
    setCategory(event.target.value);
  };

  const handleChangeInput = (index, event) => {
    const values = [...benefits];
    values[index][event.target.name] = event.target.value;
    setBenefits(values);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleAddInput = () => {
    setBenefits([...benefits, { benefit: "" }]);
    console.log(setBenefits);
  };

  const handleDeleteInput = (index) => {
    const values = [...benefits];
    values.splice(index, 1);
    setBenefits(values);
  };

  // dynamic form

  const handlerIDRPrice = (event) => {
    setIDRPrice(event.target.value);
  };

  const handlerIDRBuyout = (event) => {
    setIDRBuyout(event.target.value);
  };

  const handlerUSDPrice = (event) => {
    setUSDPrice(event.target.value);
  };

  const handlerUSDBuyout = (event) => {
    setUSDBuyout(event.target.value);
  };

  const handlerDiscount = (event) => {
    setDiscount(event.target.value);
  };

  // handle image

  const handleImageChange = (e) => {
    for (let i = 0; i < e.target.files.length; i++) {
      const newImage = e.target.files[i];
      newImage["id"] = Math.random();
      setImages((prevState) => [...prevState, newImage]);
    }
  };

  //

  const modalHide = () => {
    dispatch(closeModal());
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const inputAgain = () => {
    window.location.reload();
    // dispatch(closeModal());
    // setProductName("");
    // setProductDescription("");
    // setCategory("");
    // setLinkDownload("");
    // setBenefits([{ benefit: "" }]);
    // setStatus("");
    // setIDRPrice("");
    // setIDRBuyout("");
    // setUSDPrice("");
    // setUSDBuyout("");
    // setDiscount("");
    // setImages(Array([]));
  };

  const userId = JSON.parse(localStorage.getItem("userId"));

  const handleAddKit = async () => {
    const res = await dispatch(
      addNewKit({
        date,
        status,
        linkDownload,
        productName,
        productDescription,
        category,
        benefits,
        images,
        idrPrice,
        idrBuyout,
        usdPrice,
        usdBuyout,
        discount,
      })
    ).catch((err) => err);
    if (res) {
    } else {
    }
  };

  return (
    <div className="container-fluid" style={{ background: "#FFFBF8" }}>
      {userId ? (
        <div className="row justify-content-center">
          <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
            <div className="frame-add-kit mb-5">
              <div className="title-addkit">Add New Product</div>
              <div className="subtitle-addkit">
                Pastikan informasi produk yang Anda input benar
              </div>
              <div className="frame-input-form d-flex flex-column mt-4">
                <div className="form-item">
                  <div className="select-wrap">
                    <select
                      id="select"
                      className="form-item__element form-item__element--select select-category"
                      required
                      value={status}
                      onChange={handlerStatus}
                    >
                      <option disabled selected value="">
                        Select Product Status
                      </option>
                      <option value="Available">Available</option>
                      <option value="Not Available">Not Available</option>
                    </select>
                  </div>
                </div>

                <FormText
                  name="linkDownload"
                  id="linkDownload"
                  className=""
                  type="text"
                  value={linkDownload}
                  placeholder="Link Download"
                  onChange={handlerLinkDownload}
                />

                <FormText
                  name="ProductName"
                  id="product"
                  className=""
                  type="text"
                  value={productName}
                  placeholder="Product Name"
                  onChange={handlerProductName}
                />
                <textarea
                  className="form-control"
                  placeholder="Description here"
                  value={productDescription}
                  id="exampleFormControlTextarea1"
                  style={{ marginBottom: 30 }}
                  onChange={handlerProductDescription}
                />

                <div className="form-item">
                  <div className="select-wrap">
                    <select
                      id="select"
                      className="form-item__element form-item__element--select select-category"
                      required
                      value={category}
                      onChange={handlerSelectCategory}
                    >
                      <option disabled selected value="">
                        Select Category
                      </option>
                      <option value="Web UI">Web UI</option>
                      <option value="Mobile UI">Mobile UI</option>
                      <option value="Design System">Design System</option>
                    </select>
                  </div>
                </div>

                <form onSubmit={handleSubmit}>
                  {benefits.map((benefitItem, index) => (
                    <div className="mb-3" key={index}>
                      <div className="d-flex flex-row">
                        <input
                          type="text"
                          className="form-control mr-2"
                          name="benefit"
                          value={benefitItem.benefit}
                          // value={benefitItem}
                          placeholder="Benefit"
                          onChange={(event) => handleChangeInput(index, event)}
                        />
                        <Button
                          className={
                            benefits.length === 1
                              ? "d-none"
                              : "btn btn-light delete-form-btn"
                          }
                          onClick={() => handleDeleteInput(index)}
                        >
                          Delete
                        </Button>
                        <Button
                          className={
                            benefits.length === 9
                              ? "d-none"
                              : "btn btn-outline-primary add-form-btn"
                          }
                          onClick={() => handleAddInput()}
                        >
                          Add
                        </Button>
                      </div>
                    </div>
                  ))}
                </form>

                {/* <input
                  className="btn btn-light btn-file custom-btn-file form-control"
                  style={{ marginBottom: 28 }}
                  type="file"
                  accept="image/*"
                  name="proofPayment"
                  placeholder="Select preview image"
                  onChange={handleImageChange}
                  multiple={true}
                /> */}

                <div className="file-upload" style={{ marginBottom: 24 }}>
                  <div className="file-select position-relative">
                    <div className="file-select-button position-absolute">
                      Choose File
                    </div>
                    <div
                      className={
                        images.length === 0
                          ? "file-select-name"
                          : "file-select-name filled"
                      }
                    >
                      {images.length === 0 || undefined
                        ? `Preview Image`
                        : images.length === 1
                        ? `${images.length} image choosed`
                        : `${images.length} images choosed`}
                    </div>
                    <input
                      type="file"
                      className=""
                      multiple
                      onChange={handleImageChange}
                    />
                  </div>
                </div>

                {/* <div className="input-group position-relative" style={{ marginBottom: 16 }}>
                  <span className="input-group-btn form-control">
                    <label
                      className="btn btn-light btn-file custom-btn-file"
                      for="multiple_input_group"
                    >
                      <div className="input required">
                        <input id="multiple_input_group" type="file" accept="image/*" multiple onChange={handleImageChange} />
                      </div>
                      Browse Image
                    </label>
                  </span>
                </div> */}

                <FormText
                  name="idrPrice"
                  className=""
                  type="number"
                  value={idrPrice}
                  placeholder="IDR price"
                  onChange={handlerIDRPrice}
                />
                <FormText
                  name="idrBuyout"
                  className=""
                  type="number"
                  value={idrBuyout}
                  placeholder="IDR buyout price"
                  onChange={handlerIDRBuyout}
                />
                <FormText
                  name="usdPrice"
                  className=""
                  type="number"
                  value={usdPrice}
                  placeholder="USD price"
                  onChange={handlerUSDPrice}
                />
                <FormText
                  name="usdBuyout"
                  className=""
                  type="number"
                  value={usdBuyout}
                  placeholder="USD buyout price"
                  onChange={handlerUSDBuyout}
                />
                <FormText
                  name="discount"
                  className=""
                  type="number"
                  value={discount}
                  placeholder="Discount"
                  onChange={handlerDiscount}
                />
              </div>
              <div className="notes-before-submit">
                Cek ulang sebelum Anda submit produk
              </div>
              <Button
                type="button"
                className="btn btn-primary btn-add-kit btn-add-kit-disabled"
                style={{ marginRight: 16 }}
                onClick={handleAddKit}
                isLoading={loading}
                isDisabled={
                  !productName ||
                  !category ||
                  !productDescription ||
                  !benefits ||
                  !status ||
                  !idrPrice ||
                  !idrBuyout ||
                  !usdPrice ||
                  !usdBuyout ||
                  !status ||
                  !images ||
                  !discount
                }
              >
                Submit New Product
              </Button>
              <Button
                type="button"
                className="btn btn-light"
                onClick={() => history.goBack()}
              >
                Cancel
              </Button>

              {/* modal content */}
              <Modal
                type="modal-confirm"
                icon={ConfirmIcon}
                title="Product Berhasil Ditambahkan"
                description="Silahkan lihat dan cek detailnya di tabel collection"
                buttonAccept="Input Again"
                buttonCancel="Go to Table"
                onClose={modalHide}
                onDestination={inputAgain}
                show={modalOpen}
              />
            </div>
          </div>
        </div>
      ) : (
        <PageNotFound />
      )}
    </div>
  );
}

export default AddUIKit;
