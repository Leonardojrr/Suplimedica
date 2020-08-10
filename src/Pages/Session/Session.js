import React, { useState, useContext } from "react";
import classes from "./Session.module.css";
import { useHistory } from "react-router-dom";
import { Input } from "../../Util/Input/Input";
import { SessionContext } from "../../context/SessionContext";

export const Session = (props) => {
    const sessionContext = useContext(SessionContext);
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
        // let resp = await fetch("http://localhost:3000/login", {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify({
        //         username: state.username,
        //         password: state.password,
        //     }),
        // }).then((resp) => resp.json());

        await sessionContext.setUser({
            name: "Wisam",
            modules: [1, 2, 3, 4, 5, 6, 7],
        });
        // await sessionContext.setUser(resp.data);
        // console.log(resp);

        // if (resp.status === 200) {
        history.push("/module");
        // }
    };

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
