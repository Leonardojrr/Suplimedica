import React, { useState, Fragment } from "react";
import { useRouteMatch, NavLink, Router, Route } from "react-router-dom";
import classes from "./UserRow.module.css";
import { UpdateUser } from "../UpdateUser/UpdateUser";

export const UserRow = (props) => {
  let match = useRouteMatch();
  const { name, username, ci, password, address, number, modules } = props.user;

  return (
    <Fragment>
      <NavLink
        className={classes.Link}
        to={`${match.url}/update?name=${name}&username=${username}&ci=${ci}&password=${password}&address=${address}&number=${number}&modules=${modules}`}
      >
        <div className={classes.Fields}>
          <span>{name}</span>
          <span>{username}</span>
          <span>{ci}</span>
        </div>
      </NavLink>
    </Fragment>
  );
};
