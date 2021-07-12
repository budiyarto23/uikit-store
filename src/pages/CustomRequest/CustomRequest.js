import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import "./customRequest.scss";
import Button from "components/Button";
import idrFormat from "utils/formatNumber";
import usdFormat from "utils/formatUSD";
import CustomRequestSkeleton from "pages/CustomRequest/CustomSkeleton";
import { getUiKits, postCustomKit } from "config/redux/action";

export default function CustomRequest() {
  const { loading, kitsData } = useSelector((state) => ({
    loading: state.utils.isLoading,
    kitsData: state.kits.kitsCollection,
  }));
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();
  const date = new Date().getTime();
  const status = "PENDING"
  const [unique, setUnique] = useState(0);
  const thisKit = kitsData.filter((item) => item.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getUiKits());
    setUnique(Math.floor(Math.random() * 1000 + 10));
    // eslint-disable-next-line
  }, []);

  const addCustomKit = async () => {
    await dispatch(
      postCustomKit({
        date,
        thisKit,
        unique,
        status,
      })
    )
      .then(() => history.push("/"))
      .catch((err) => err);
  };

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
        <p className="paid-main-title text-center">Custom Request</p>
        <p className="paid-main-subtitle text-center mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam
        </p>
        {loading && <CustomRequestSkeleton />}
        {!loading && kitsData
          .filter((item) => item.id === id)
          .map((val, index) => (
            <div className="row justify-content-center" key={index}>
              <div className="col-sm-12 col-md-6 col-lg-5 col-xl-5">
                <div className="paid-download-container-left">
                  <div className="paid-preview-img">
                    <img
                      className="item-preview-img"
                      src={val.data.images[0]}
                      alt="tstst"
                    />
                  </div>
                  <div className="paid-title-name">{val.data.productName}</div>
                  <div className="paid-description-name">
                    {val.data.productDescription}
                  </div>
                  <div className="d-flex flex-row mt-3">
                    {val.data.idrPrice !== 0 ? (
                      <>
                        <p className="total-value-payment">
                          {idrFormat(val.data.idrPrice)} -
                        </p>
                        <p
                          className="total-value-payment"
                          style={{ marginLeft: 6 }}
                        >
                          {usdFormat(val.data.usdPrice)}
                        </p>
                      </>
                    ) : (
                      <p className="total-value-payment">Free</p>
                    )}
                  </div>
                  <Button
                    type="button"
                    className="btn btn-primary buy-now-button mt-4"
                      onClick={addCustomKit}
                    //   isLoading={false}
                  >
                    Send Request Via WhatsApp
                  </Button>
                  <Button
                    type="button"
                    className="btn btn-outline buy-now-button-free mt-4"
                      onClick={addCustomKit}
                    //   isLoading={false}
                  >
                    Send Request Via Email
                  </Button>
                  <div className="paid-container-note">
                    <div className="title-buyout mt-2">Buy Out Option</div>
                    <div className="description-buyout mb-2">
                      This UI Kits will be removed from the store and will no
                      longer be available for purchase.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
