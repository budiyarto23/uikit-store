import React from "react";
import Skeleton from "react-loading-skeleton";

import "./detailSkeleton.scss";

const DetailSkeleton = () => {
  return (
    <div className="container mb-5">
      <div className="container-detail-skeleton mt-5">
        <h1 className="">
          <Skeleton
            width={"50%"}
            className="pr-5"
            style={{ marginRight: 30 }}
          />
          <Skeleton width={"40%"} />
        </h1>
        <h1 className="">
          <Skeleton
            width={"40%"}
            className="pr-5"
            style={{ marginRight: 30 }}
          />
          <Skeleton width={"30%"} />
        </h1>
        <div className="d-flex flex-column">
          <Skeleton height={20} width={"45%"} className="mt-4" />
          <Skeleton height={20} width={"35%"} className="mt-2" />
          <Skeleton height={20} width={"30%"} className="mt-2" />
          <Skeleton height={30} width={"25%"} className="mt-4" />
        </div>
      </div>

      <ul className="list">
        {Array(2)
          .fill()
          .map((item, index) => (
            <li className="preview-image-skeleton mt-5" key={index}>
              <Skeleton height={300} className="item-image-skeleton" />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default DetailSkeleton;
