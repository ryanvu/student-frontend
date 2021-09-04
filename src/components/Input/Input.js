import React from "react";
import "./Input.scss";
const Input = ({ label, placeholder, onChange, name, value }) => {
  return (
    <div className="input__wrapper">
      <label className="input__label">{label}</label>
      <input
        className="input"
        type="text"
        placeholder={placeholder}
        onChange={onChange}
        name={name}
        value={value}
      />
    </div>
  );
};

export default Input;
