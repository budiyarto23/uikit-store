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
// component

import ConfirmIcon from "assets/icons/confirm-payment-success-ic.svg";
// assets

function AddUIKit() {
  const { loading, modalOpen } = useSelector((state) => ({
    loading: state.utils.isLoading,
    modalOpen: state.utils.modalOpen,
  }));
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const history = useHistory();
  const date = new Date().getTime();
  const [status, setStatus] = useState("");
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [industries, setIndustries] = useState([{ industry: "" }]);
  const [benefits, setBenefits] = useState([{ benefit: "" }]);
  const [category, setCategory] = useState("");
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

  const handlerSelectCategory = (event) => {
    setCategory(event.target.value);
  };

  const handleChangeInput = (index, event) => {
    const values = [...benefits];
    values[index][event.target.name] = event.target.value;
    setBenefits(values);
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

  const handleChangeIndustry = (index, event) => {
    const values = [...industries];
    values[index][event.target.name] = event.target.value;
    setIndustries(values);
  };

  const handleAddFormIndustry = () => {
    setIndustries([...industries, { industry: "" }]);
  };

  const handleDeleteFormIndustry = (index) => {
    const values = [...industries];
    values.splice(index, 1);
    setIndustries(values);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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
    history.push("/admin-home-page");
  };

  const inputAgain = () => {
    window.location.reload();
  };

  const userId = JSON.parse(localStorage.getItem("userId"));

  const handleAddKit = async () => {
    const res = await dispatch(
      addNewKit({
        date,
        status,
        productName,
        productDescription,
        industries,
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
    <div className="container-fluid" style={{ background: "#F3F4F6" }}>
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

                <form onSubmit={handleSubmit}>
                  {industries.map((indusrtyItem, index) => (
                    <div className="mb-3" key={index}>
                      <div className="d-flex flex-row">
                        <input
                          type="text"
                          className="form-control mr-2"
                          name="industry"
                          value={indusrtyItem.industry}
                          placeholder="Related Industry"
                          onChange={(event) =>
                            handleChangeIndustry(index, event)
                          }
                        />
                        <Button
                          className={
                            industries.length === 1
                              ? "d-none"
                              : "btn btn-light delete-form-btn"
                          }
                          onClick={() => handleDeleteFormIndustry(index)}
                        >
                          Delete
                        </Button>
                        <Button
                          className={
                            industries.length === 9
                              ? "d-none"
                              : "btn btn-outline-primary add-form-btn"
                          }
                          onClick={() => handleAddFormIndustry()}
                        >
                          Add
                        </Button>
                      </div>
                    </div>
                  ))}
                </form>

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
                  !industries ||
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
                title="Product Added Success"
                description="Please see the detail product in collection table"
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
