import React, { useState } from "react";
import "./Select.scss";

const Select = ({ options, handleChange }) => {
  const [selected, setSelected] = useState("Select account type..");
  const [showDropdown, setShowDropdown] = useState(false);

  const select = (option) => {
    setSelected(option);
    handleChange(option);
    setShowDropdown((prev) => !prev);
  };

  return (
    <div className="select">
      <div className="select__selection">
        <span>{selected}</span>
        <span
          className="select__selection-arrow"
          onClick={() => {
            setShowDropdown((prev) => !prev);
          }}
        >
          🢓
        </span>
      </div>
      {showDropdown && (
        <div className="select__options">
          {options &&
            options.map((o, i) => {
              return (
                <div
                  onClick={() => select(o)}
                  key={i}
                  className="select__options-item"
                >
                  {o}
                </div>
              );
            })}
        </div>
      )}
    </div>
  );
};

export default Select;
