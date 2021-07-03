import React from "react";
import propTypes from "prop-types";
import { Link } from "react-router-dom";
import "./card.scss";
import idrFormat from "utils/formatNumber";
import usdFormat from "utils/formatUSD";

export default function Card(props) {
  const maxLengthDesc = 90;
  const maxLengthTitle = 26;

  return (
    <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4">
      <div className="card-product">
        <div className="card-item-product">
          <div className="embed-responsive">
            <Link to={`/detail/${props.id}`} style={{ textDecoration: "none" }}>
              <img
                src={props.thumbnailImage}
                className="card-img-top"
                alt="alternate"
              />
            </Link>
          </div>
          <div className="card-info-product">
            <Link
              to={`/detailkits/${props.id}`}
              style={{ textDecoration: "none" }}
            >
              <h2 className="card-title-product">
                {props.productName.length > maxLengthTitle
                  ? `${props.productName.substring(0, maxLengthTitle)}...`
                  : props.productName}
              </h2>
            </Link>
            <p className="card-text-product">
              {props.productDescription.length > maxLengthDesc
                ? `${props.productDescription.substring(0, maxLengthDesc)}...`
                : props.productDescription}
            </p>
            {/* <div className="divider-horizontal"></div> */}
            <div className="d-flex flex-row align-items-center mb-2">
              {props.price === 0 ? (
                <span className="badges badges--free">GRATIS</span>
              ) : (
                <span className="badges">{idrFormat(props.price)}</span>
              )}
              {props.usdPrice === 0 ? (
                ""
              ) : (
                <div className="dollar-price" style={{ marginRight: 10 }}>
                  {usdFormat(props.usdPrice)}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
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
