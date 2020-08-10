import React, { useState, useEffect } from "react";
import classes from "./Input.module.css";

export const Input = (props) => {
  const {
    onChange,
    style = {},
    inputStyle = {},
    label,
    disabled = false,
    placeholderTextColor = "",
  } = props;

  const [inputValue, setInputValue] = useState("");
  const [focused, setFocused] = useState(false);

  const handleChange = (text) => {
    setInputValue(text.target.value);
    onChange(text.target.value);
  };

  const handleBlur = () => {
    setFocused(false);
  };

  const handleFocus = () => {
    setFocused(true);
  };

  const labelStyle = {
    position: "absolute",
    zIndex: 90,
    left: 10,
    top: !focused && inputValue === "" ? "50%" : 0,
    transform: !focused && inputValue === "" ? `translate(0, -50%)` : "none",
    fontSize: !focused && inputValue === "" ? 20 : 12,
    color: placeholderTextColor ? placeholderTextColor : "rgba(0,0,0,0.6)",
  };

  return (
    <div className={classes.InputContainer} style={{ ...style }}>
      <div className={classes.Placeholder} style={{ ...labelStyle }}>
        {label}
      </div>
      <input
        disabled={disabled}
        className={classes.Input}
        style={{ ...inputStyle, zIndex: 100 }}
        onBlur={handleBlur}
        onFocus={handleFocus}
        onChange={(val) => handleChange(val)}
      />
    </div>
  );
};
