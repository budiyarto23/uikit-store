import React from "react";
import Skeleton from "react-loading-skeleton";

import "./customSkeleton.scss";

export default function index() {
  return (
    <>
      <div className="row justify-content-center">
        <div className="col-sm-12 col-md-6 col-lg-5 col-xl-5">
          <div className="paid-download-container-left"> 
            <Skeleton width={"100%"} height={300} />
            <h3>
              <Skeleton width={"80%"} className="mt-4" />
            </h3>
            <p>
              <Skeleton width={"60%"} className="mt-2" />
              <Skeleton width={"60%"} className="" />
              <Skeleton width={"50%"} className="" />
            </p>
            <h3>
              <Skeleton width={"40%"} className="mt-2" />
            </h3>
            <Skeleton width={"100%"} height={150} className="mt-4" />
          </div>
        </div>
      </div>
    </>
  );
}
