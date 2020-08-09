import React from "react";

import classes from "./Input.module.css";

export const Input = (props) => {
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
};
