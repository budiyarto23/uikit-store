import React from "react";
import "./pageNotFound.scss";
import { useHistory } from "react-router-dom";
// library & package
import Button from "components/Button";
import ImgPageNotFound from "assets/images/page-not-found.svg.svg";
// assets

export default function PageNotFound() {
  const path = useHistory();

  // const routeUIKits = () => {
  //   path.push("/");
  // };

  return (
    <div className="mobile-view bg-not-found">
      <div className="container-fluid hack-margin-responsive">
        <div className="row justify-content-center">
          <div className="col col-xl-5 col-lg-5 col-md-7 col-sm-12">
            <div className="d-flex flex-column align-items-center">
              <img
                className="img-page-not-found"
                src={ImgPageNotFound}
                alt="test"
              />
              <div className="title-not-found">The Page Can’t Be Found</div>
              <div className="subtitle-not-found">
                Back to home for find your way.
              </div>
              <Button
                type="button"
                className="btn btn-primary"
                onClick={() => path.push("/")}
              >
                Back to Home
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
