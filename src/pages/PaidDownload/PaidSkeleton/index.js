import React from "react";
import Skeleton from "react-loading-skeleton";

import "./paidSkeleton.scss";

export default function index() {
  return (
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
      <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4">
        <div className="paid-download-container-left">
          <h4>
            <Skeleton width={"50%"} className="mb-2" />
          </h4>
          <p>
            <Skeleton width={"100%"} className="mb-2" count={4} />
          </p>
          <h4>
            <Skeleton width={"50%"} className="mb-2 mt-2" />
          </h4>
          <div>
            <Skeleton
              width={"30%"}
              height={90}
              className="mt-2"
              style={{ marginRight: 30 }}
            />
            <Skeleton width={"50%"} />
          </div>
          <div>
            <Skeleton
              width={"30%"}
              height={90}
              className="mt-3"
              style={{ marginRight: 30 }}
            />
            <Skeleton width={"50%"} />
          </div>
          <div>
            <Skeleton
              width={"47%"}
              height={40}
              className="mt-5"
              style={{ marginRight: 20 }}
            />
            <Skeleton
              width={"47%"}
              height={40}
              className="mt-2"
            />
          </div>
          <div>
            <Skeleton
              height={100}
              className="mt-5"
            />
            </div>
        </div>
      </div>
    </div>
  );
}
