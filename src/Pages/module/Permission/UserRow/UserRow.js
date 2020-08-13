import React, { useState, Fragment } from "react";
import { useRouteMatch, NavLink, Router, Route } from "react-router-dom";
import classes from "./UserRow.module.css";

export const UserRow = (props) => {
  let match = useRouteMatch();
  let {
    id_persona,
    nombre_persona,
    nombre_usuario,
    ci_persona,
    direccion_persona,
    numero_persona,
    modules,
  } = props.user;

  return (
    <Fragment>
      <NavLink
        draggable={false}
        className={classes.Link}
        to={`${match.url}/update?id_persona=${id_persona}&nombre_persona=${nombre_persona}&nombre_usuario=${nombre_usuario}&ci_persona=${ci_persona}&direccion_persona=${direccion_persona}&numero_persona=${numero_persona}&modules=${modules}`}
      >
        <div className={classes.Fields}>
          <span>{nombre_persona}</span>
          <span>{nombre_usuario}</span>
          <span>{ci_persona}</span>
        </div>
      </NavLink>
    </Fragment>
  );
};
