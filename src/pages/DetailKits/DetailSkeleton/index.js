import React from "react";
import Skeleton from "react-loading-skeleton";

import "./detailSkeleton.scss";

const DetailSkeleton = () => {
  return (
    <div className="container mb-5">
      <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-7 col-xl-7">
          <ul className="list">
            {Array(2)
              .fill()
              .map((item, index) => (
                <li
                  className="preview-image-skeleton mt-5 height-dekstop height-md height-sm"
                  key={index}
                >
                  <Skeleton height={"100%"} className="item-image-skeleton" />
                </li>
              ))}
          </ul>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-5 col-xl-5">
          <div className="paid-download-container-left mt-5">
            <Skeleton width={"90%"} height={40} />
            <h5>
              <Skeleton width={"80%"} className="mt-4" />
              <Skeleton width={"70%"} className="mt-2" />
              <Skeleton width={"60%"} className="mt-2" />
            </h5>
            <h2><Skeleton width={"80%"} className="mt-4" /></h2>
            <h5>
              <Skeleton width={"60%"} className="mt-2" />
              <Skeleton width={"50%"} className="mt-2" />
              {/* <Skeleton width={"60%"} className="mt-2" /> */}
            </h5>
            <Skeleton width={"30%"} height={40} className="mt-4" style={{ marginRight: 20 }} />
            <Skeleton width={"30%"} height={40} className="mt-4" />
            <h5>
              <Skeleton width={"60%"} className="mt-4" />
              <Skeleton width={"50%"} className="mt-2" />
              <Skeleton width={"60%"} className="mt-2" />
              <Skeleton width={"60%"} className="mt-3" />
              <Skeleton width={"50%"} className="mt-2" />
              <Skeleton width={"60%"} className="mt-2" />
            </h5> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailSkeleton;
