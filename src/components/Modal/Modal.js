import React, { useEffect, useCallback } from "react";

import "./Modal.css";

const Modal = (props) => {
  const { isOpen, onClose, children } = props;

  // If ESC is pressed
  // close the modal
  const escFunction = useCallback((event) => {
    if (event.keyCode === 27) {
      onClose();
    }
  }, []);

  // Add event listeners
  useEffect(() => {
    document.addEventListener("keydown", escFunction, false);

    return () => {
      document.removeEventListener("keydown", escFunction, false);
    };
  }, []);

  return isOpen ? (
    <div className="Modal-container">
      <div className="Modal">
        <span className="Close" onClick={onClose}>
          &#10005;
        </span>
        {children}
      </div>
    </div>
  ) : null;
};

export default Modal;
