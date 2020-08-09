import React from "react";
import { getModules } from "../getModules";

import classes from "./ModuleRow.module.css";

export const ModuleRow = (props) => {
  return (
    <div className={classes.Container}>
      {props.modules.map((module) => getModules(module))}
    </div>
  );
};
