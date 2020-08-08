import React from "react";
import { useRouteMatch } from "react-router-dom";

import classes from "./PermissionList.module.css";

function PermissionList() {
  let match = useRouteMatch();

  return (
    <div className={classes.Container}>
      <div className={classes.Fields}></div>
      <div className={classes.List}></div>
    </div>
  );
}

export default PermissionList;
