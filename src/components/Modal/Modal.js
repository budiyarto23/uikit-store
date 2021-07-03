import React from "react";
import Button from "components/Button";
import propTypes from "prop-types";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";
import "./modal.scss";

const Modal = (props) => {

  return ReactDOM.createPortal(
    <CSSTransition
      in={props.show}
      unmountOnExit
      timeout={{ enter: 0, exit: 300 }}
    >
      {props.type === "modal-confirm" ? (
        <div className="modal" onClick={props.onClose}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
            style={{ borderRadius: 12 }}
          >
            <div className="modal-container d-flex flex-column align-items-center">
              <img src={props.icon} alt="sdkl" className="modal-icon" />
              <div className="modal-title">{props.title}</div>
              <div className="modal-description">{props.description}</div>
              <div className="d-flex flex-row mx-auto">
                <Button
                  type="button"
                  className="btn btn-outline-primary btn-modal-secondary"
                  onClick={props.onClose}
                  style={{ paddingLeft: 20, paddingRight: 20 }}
                >
                  {props.buttonCancel}
                </Button>
                <Button
                  type="button"
                  className="btn btn-primary btn-modal-primary"
                  onClick={props.onDestination}
                  style={{ paddingLeft: 20, paddingRight: 20 }}
                >
                  {props.buttonAccept}
                </Button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="modal" onClick={props.onClose}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
            style={{ borderRadius: 12 }}
          >
            <div className="modal-container d-flex flex-column align-items-center">
              <img src={props.icon} alt="sdkl" className="modal-icon" />
              <div className="modal-title">{props.title}</div>
              <div className="modal-description">{props.description}</div>
              <Button
                type="button"
                className="btn btn-primary"
                onClick={props.onClose}
                style={{ paddingLeft: 30, paddingRight: 30 }}
              >
                {props.buttonAccept}
              </Button>
            </div>
          </div>
        </div>
      )}
    </CSSTransition>,
    document.getElementById("root")
  );
};

Modal.propTypes = {
  type: propTypes.oneOf(["modal-confirm"]),
  onDestination: propTypes.func,
  onClose: propTypes.func,
  // onClick: propTypes.func,
  icon: propTypes.string,
  title: propTypes.string,
  description: propTypes.string,
  buttonCancel: propTypes.string,
  buttonAccept: propTypes.string,
  buttonLink: propTypes.string,
  buttonName: propTypes.string,
};

export default Modal;
