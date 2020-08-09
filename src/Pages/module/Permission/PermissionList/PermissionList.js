import React from "react";
import { UserRow } from "../UserRow/UserRow";
import { ModuleRow } from "../ModuleRow/ModuleRow";
import { useRouteMatch } from "react-router-dom";

import classes from "./PermissionList.module.css";

export const PermissionList = () => {
  let users = [
    {
      name: "Leonardo Rodrigues",
      username: "leonardojrr",
      ci: "28009205",
      password: "hola",
      modules: [1, 2, 3],
    },
    {
      name: "Wisam Mozalbat",
      username: "Wisinchu",
      ci: "27008321",
      password: "hola",
      modules: [1, 2, 3, 4],
    },
    {
      name: "Victoria Urdaneta",
      username: "vudaneta",
      ci: "26003003",
      password: "hola",
      modules: [1, 2, 3, 4, 5],
    },
    {
      name: "Oscar Colmenares",
      username: "graren",
      ci: "25456447",
      password: "hola",
      modules: [1, 2, 3, 4, 5, 6],
    },
    {
      name: "Oscar Colmenares",
      username: "graren",
      ci: "25456447",
      password: "hola",
      modules: [1, 2, 3, 4, 5, 6],
    },
    {
      name: "Oscar Colmenares",
      username: "graren",
      ci: "25456447",
      password: "hola",
      modules: [1, 2, 3, 4, 5, 6],
    },
    {
      name: "Oscar Colmenares",
      username: "graren",
      ci: "25456447",
      password: "hola",
      modules: [1, 2, 3, 4, 5, 6, 7],
    },
    {
      name: "Oscar Colmenares",
      username: "graren",
      ci: "25456447",
      password: "hola",
      modules: [1, 2, 3, 4, 5, 6],
    },
  ];

  return (
    <div className={classes.Container}>
      <div className={classes.FieldsColumn}>
        <div className={classes.Fields}>
          <span>Nombre</span>
          <span>Usuario</span>
          <span>Cedula</span>
        </div>
        <div className={classes.List}>
          {users.map((user, index) => (
            <UserRow key={index} user={user} />
          ))}
        </div>
      </div>
      <div className={classes.ModuleColumn}>
        <div className={classes.Fields}>
          <span>Modulos</span>
        </div>
        <div className={classes.List}>
          {users.map((user) => (
            <ModuleRow modules={user.modules} />
          ))}
        </div>
      </div>
    </div>
  );
};
