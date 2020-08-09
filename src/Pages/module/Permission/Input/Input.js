import React, { useState, useEffect } from "react";
import { AiFillEye } from "react-icons/ai";

import classes from "./Input.module.css";

export const Input = (props) => {
  const [showpassword, setShowPassword] = useState(false);

  const changeShowPassword = () => {
    setShowPassword(!showpassword);
  };

  if (props.password) {
    return (
      <div className={classes.Container}>
        <span className={classes.Name}>{props.name}</span>
        <div className={classes.PasswordContainer}>
          <input
            type={showpassword ? "text" : "password"}
            onChange={props.handleChange}
            className={classes.Input}
            value={props.value}
          />
          <AiFillEye onClick={changeShowPassword} />
        </div>
      </div>
    );
  } else {
    return (
      <div className={classes.Container}>
        <span className={classes.Name}>{props.name}</span>
        <input
          onChange={props.handleChange}
          className={classes.Input}
          value={props.value === "undefined" ? "" : props.value}
        />
      </div>
    );
  }
};
