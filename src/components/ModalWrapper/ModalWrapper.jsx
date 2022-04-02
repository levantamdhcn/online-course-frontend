import React from 'react';
import ReactDOM from 'react-dom';

const ModalWrapper = ({ title, show, toggleShow, children }) => {
  if (!show) {
    return <></>;
  }

  const handleClose = () => {
    toggleShow(false);
  };
  return ReactDOM.createPortal(
    <div className="ModalWrapper">
      <div className="ModalWrapper__bg" onClick={handleClose}></div>
      <div className="ModalWrapper__content">
        <div className="ModalWrapper__content-title">
          <p>{title}</p>
          <div
            onClick={handleClose}
            className="ModalWrapper__content-close icon-close size-icon-5 hover-effect"
          ></div>
        </div>
        {children}
      </div>
    </div>,
    document.body
  );
};

export default ModalWrapper;
