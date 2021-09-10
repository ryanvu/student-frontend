import React from "react";
import "./Error.scss";
const Error = ({ message }) => {
  return (
    <div className="error">
      <span className="error__msg">{message}</span>
    </div>
  );
};

export default Error;
