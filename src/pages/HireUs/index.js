import React from "react";
import { useHistory } from "react-router-dom";

import "./hireUs.scss";
import Button from "components/Button";
import Header from "pages/LandingPage/Header/Header";

// assets
import DefineProblem from "assets/icons/define-problem.svg";
import Footer from "pages/LandingPage/Footer/footer";

export default function HireUs() {
  const pathHistory = useHistory();

  const routeUIKits = () => {
    let path = `/uikits`;
    pathHistory.push(path);
  };

  return (
    <div className="container-fluid bg-hire-us">
      <Header />
      <div className="container" style={{ marginBottom: 120 }}>
        <div className="row justify-content-between">
          <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
            <div className="d-flex flex-column justify-content-center mt-2">
              <p className="hire-us-title ">
                We Always Prioritize{" "}
                <span className="variant-text">Solving User Problems</span> With
                A Great Design Experience
              </p>
              <p className="hire-us-description">
                For professional UX/UI Designers like us, distance and time
                differences are not a problem. We just need to have a
                communication and a cup of coffee to solve your problem with the
                design experience.
              </p>
              <div className="d-flex flex-row bg-button">
                <Button
                  className="btn btn-primary btn-hire-us"
                  onClick={routeUIKits}
                >
                  Hire Now
                </Button>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-5 col-xl-5 mt-5">
            <div className="row pt-5">
              <p className="work-process">Our Work Process</p>
              <div className="d-flex flex-column">
                <div className="d-flex flex-row frame-process">
                  <img
                    className="custom-icon-hire"
                    src={DefineProblem}
                    alt="v"
                  />
                  <div className="d-flex flex-column">
                    <div className="title-work">Define Problem</div>
                    <div className="description-work">
                      We have to know what your problem to solve, and what your
                      expectation for the project.{" "}
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex flex-column">
                <div className="d-flex flex-row frame-process">
                  <img
                    className="custom-icon-hire"
                    src={DefineProblem}
                    alt="v"
                  />
                  <div className="d-flex flex-column">
                    <div className="title-work">Define Problem</div>
                    <div className="description-work">
                      We have to know what your problem to solve, and what your
                      expectation for the project.{" "}
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex flex-column">
                <div className="d-flex flex-row frame-process">
                  <img
                    className="custom-icon-hire"
                    src={DefineProblem}
                    alt="v"
                  />
                  <div className="d-flex flex-column">
                    <div className="title-work">Define Problem</div>
                    <div className="description-work">
                      We have to know what your problem to solve, and what your
                      expectation for the project.{" "}
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex flex-column">
                <div className="d-flex flex-row frame-process">
                  <img
                    className="custom-icon-hire"
                    src={DefineProblem}
                    alt="v"
                  />
                  <div className="d-flex flex-column">
                    <div className="title-work">Define Problem</div>
                    <div className="description-work">
                      We have to know what your problem to solve, and what your
                      expectation for the project.{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
