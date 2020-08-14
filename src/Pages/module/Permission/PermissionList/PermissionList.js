import React, { useState, useEffect, useContext } from "react";
import { UserRow } from "../UserRow/UserRow";
import { ModuleRow } from "../ModuleRow/ModuleRow";
import { SessionContext } from "../../../../context/SessionContext";

import classes from "./PermissionList.module.css";
import { LoaderModal } from "../../../../components/Loader/Loader";

export const PermissionList = (props) => {
  const sessionContext = useContext(SessionContext);
  const [userList, setUsersList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getUsers();
  }, []);

  //Fecth de los usuarios
  const getUsers = async () => {
    setIsLoading(true);
    const res = await fetch("http://localhost:3000/user", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }).then((resp) => resp.json());
    setIsLoading(false);
    if (res.status === 200) {
      let list = res.data.filter(
        (user) => user.id_usuario != sessionContext.user.id_usuario
      );

      setUsersList(list);
    } else {
      alert("Error al traer los usuarios");
    }
  };

  return (
    <div className={classes.Container}>
      <div className={classes.FieldsColumn}>
        <div className={classes.Fields}>
          <span>Nombre</span>
          <span>Usuario</span>
          <span>Cedula</span>
        </div>
        <div className={classes.List}>
          {userList.map((user, index) => (
            <UserRow key={index} user={user} />
          ))}
        </div>
      </div>
      <div className={classes.ModuleColumn}>
        <div className={classes.Fields}>
          <span>Modulos</span>
        </div>
        <div className={classes.List}>
          {userList.map((user, index) => (
            <ModuleRow key={index} modules={user.modules} />
          ))}
        </div>
      </div>
      <LoaderModal visible={isLoading} />
    </div>
  );
};
