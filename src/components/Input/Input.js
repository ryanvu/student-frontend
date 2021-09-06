import React from "react";
import "./Input.scss";
const Input = ({ label, placeholder, onChange, name, value, type, error }) => {
  return (
    <div className="input__wrapper">
      <label className="input__label">{label}</label>
      <input
        className="input"
        type={type || "text"}
        placeholder={placeholder}
        onChange={onChange}
        name={name}
        value={value}
      />
      {error && <span className="input__err">{error}</span>}
    </div>
  );
};

export default Input;
