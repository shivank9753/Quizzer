import React, { useCallback, useEffect } from "react";
import { GrClose } from "react-icons/gr";

const ModelOverlay = ({ show, onClose, children }) => {
  const closeOnEscapeKeyDown = useCallback(
    (e) => {
      if ((e.charCode || e.keyCode) === 27) {
        onClose();
      }
    },
    [onClose]
  );
  useEffect(() => {
    document.body.addEventListener("keydown", closeOnEscapeKeyDown);
    return function cleanup() {
      document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
    };
  }, [closeOnEscapeKeyDown]);

  if (!show) {
    return null;
  }

  return (
    <div
      className="fixed bg-black bg-opacity-50 flex justify-center items-center top-0 bottom-0 left-0 right-0"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg shadow-lg p-5 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
      <button onClick={onClose}>
        <GrClose className="absolute top-1 right-1 text-lg duration-300 hover:text-2xl" />
      </button>
    </div>
  );
};

export default ModelOverlay;
