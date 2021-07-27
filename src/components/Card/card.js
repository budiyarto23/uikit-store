import React from "react";
import propTypes from "prop-types";
import { Link } from "react-router-dom";
import "./card.scss";
import idrFormat from "utils/formatNumber";
import usdFormat from "utils/formatUSD";

export default function Card(props) {
  const maxLengthDesc = 86;
  const maxLengthTitle = 26;

  return (
    <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4">
      <Link to={`/detail/${props.id}`} style={{ textDecoration: "none" }}>
        <div className="card-product">
          <div className="card-item-product">
            <div className="embed-responsive">
              <img
                src={props.thumbnailImage}
                className="card-img-top"
                alt="alternate"
              />
            </div>
            <div className="card-info-product">
              <h2 className="card-title-product">
                {props.productName.length > maxLengthTitle
                  ? `${props.productName.substring(0, maxLengthTitle)}...`
                  : props.productName}
              </h2>
              <p className="card-text-product">
                {props.productDescription.length > maxLengthDesc
                  ? `${props.productDescription.substring(0, maxLengthDesc)}...`
                  : props.productDescription}
              </p>
              <div className="divider-horizontal"></div>
              <div className="d-flex flex-row align-items-center mb-2">
                {/* {parseInt(props.price) === 0 ? ( */}
                {props.price === 0 ? (
                  <span className="badges--free">FREE DOWNLOAD</span>
                ) : (
                  <span className="rupiah-price">{idrFormat(props.price)}&nbsp; -</span>
                )} 
                {/* {parseInt(props.usdPrice) === 0 ? ( */}
                {props.usdPrice === 0 ? (
                  ""
                ) : (
                  <div className="dollar-price">
                    {usdFormat(props.usdPrice)}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

Card.propTypes = {
  thumbnailImage: propTypes.string,
  productName: propTypes.string,
  productDescription: propTypes.string,
  price: propTypes.number,
  usdPrice: propTypes.number,
  link: propTypes.string,
  id: propTypes.string,
};
