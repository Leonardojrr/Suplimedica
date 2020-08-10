import React, { useState } from "react";
import classes from "./Session.module.css";
import { useHistory } from "react-router-dom";
import { Input } from "../../Util/Input/Input";

export const Session = (props) => {
  let history = useHistory();
  let { onLogIn } = props;

  const [state, setState] = useState({
    username: "",
    password: "",
    redirect: false,
  });

  const changeUsername = (e) => {
    setState({ ...state, username: e });
  };

  const changePassword = (e) => {
    setState({ ...state, password: e });
  };

  const changeRedirect = (e) => {
    setState({ ...state, redirect: !state.redirect });
  };

  const login = async () => {
    //Fetch
    let resp = await fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: state.username,
        password: state.password,
      }),
    }).then((resp) => resp.json());

    console.log(resp);
  };

  if (state.redirect) {
    history.push("/module");
  }

  return (
    <div className={classes.Container}>
      <div className={classes.ContentContainer}>
        <div className={classes.Title}>Inicio de Sesion</div>
        <div className={classes.InputsContainer}>
          <div className={classes.InputContainer}>
            <Input
              label={"Nombre de usuario"}
              onChange={changeUsername}
              value={state.username}
            />
          </div>
          <div className={classes.InputContainer}>
            <Input
              label={"Contraseña"}
              onChange={changePassword}
              value={state.password}
            />
          </div>
        </div>
        <div className={classes.ButtonContainer}>
          <div className={classes.Button} onClick={login}>
            Iniciar Sesion
          </div>
        </div>
      </div>
    </div>
  );
};
