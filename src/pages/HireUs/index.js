import React from "react";
import { useHistory } from "react-router-dom";

import "./hireUs.scss";
import Button from "components/Button";
import Header from "pages/LandingPage/Header/Header";
import Footer from "pages/LandingPage/Footer/footer";

// assets
import DefineProblem from "assets/icons/define-problem.svg";
import Design from "assets/icons/design.svg";
import Validate from "assets/icons/validate.svg";
import Delivery from "assets/icons/delivery.svg";

export default function HireUs() {
  const pathHistory = useHistory();

  const routeUIKits = () => {
    let path = `/uikits`;
    pathHistory.push(path);
  };

  return (
    <div className="container-fluid p-0 bg-hire-us">
      <Header />
      <div className="container" style={{ marginBottom: 120 }}>
        <div className="row justify-content-between">
          <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
            <div className="d-flex flex-column justify-content-center mt-2">
              <p className="hire-us-title ">
                We Always Prioritize{" "}
                <span className="variant-text">Solving User Problems</span> With
                A Design Experience
              </p>
              <p className="hire-us-description">
                For professional UI/UX Designers like us, distance and time
                differences are not a problem. We just need to have
                communication and a cup of coffee to solve user problems with
                the design experience.
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
              <p className="work-process text-underline">
                <ins>Our Work Process</ins>
              </p>

              <div className="frame-process">
                <img className="custom-icon-hire" src={DefineProblem} alt="v" />
                <div className="d-flex flex-column">
                  <div className="title-work">Define Problem</div>
                  <div className="description-work">
                    We have to know what your problem to solve, and what your
                    expectation for the project.
                  </div>
                </div>
              </div>

              <div className="frame-process">
                <img className="custom-icon-hire" src={Design} alt="v" />
                <div className="d-flex flex-column">
                  <div className="title-work">Design</div>
                  <div className="description-work">
                    After defining the problem and research, we start to create
                    a design from wireframe to high fidelity design.
                  </div>
                </div>
              </div>

              <div className="frame-process">
                <img className="custom-icon-hire" src={Validate} alt="v" />
                <div className="d-flex flex-column">
                  <div className="title-work">Validate</div>
                  <div className="description-work">
                    This step it’s very important because it helps us to
                    understand whether their design works for the users.
                  </div>
                </div>
              </div>

              <div className="frame-process">
                <img className="custom-icon-hire" src={Delivery} alt="v" />
                <div className="d-flex flex-column">
                  <div className="title-work">Delivery</div>
                  <div className="description-work">
                    The design delivers to the client with a full document to
                    customization, with Figma, Adobe XD file and etc.
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
