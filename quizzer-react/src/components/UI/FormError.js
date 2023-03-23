import React from "react";

const FormError = ({ children }) => {
  return <div className="p-2 text-xs text-red-400">{children}</div>;
};

export default FormError;
