import React from "react";
import Skeleton from "react-loading-skeleton";

import "./popularSkeleton.scss";

const PopularSkeleton = () => {
  return (
    <section>
      <ul className="list">
        {Array(3)
          .fill()
          .map((item, index) => (
            <li className="card-skeleton" key={index}>
              <Skeleton height={200} className="card-image-skeleton" />
              <h4 className="card-title-skeleton">
                <Skeleton height={30} width={`80%`} />
              </h4>
              <p className="card-description-skeleton">
                <Skeleton width={`60%`} />
                <Skeleton width={`60%`} />
              </p>
              <div className="btn-skeleton">
                <Skeleton width={`25%`} height={40} className="margin-btn-skeleton" />
                <Skeleton width={`25%`} height={40} />
              </div>
            </li>
          ))}
      </ul>
    </section>
  );
};

export default PopularSkeleton;
