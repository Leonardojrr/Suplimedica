import React, { useState } from "react";
import classes from "./Session.module.css";
import { withRouter } from "react-router-dom";
import { Input } from "../../Util/Input/Input";

const Session = (props) => {
    const [redirect, setRedirect] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    if (redirect) {
        props.history.push("/module");
    }

    return (
        <div className={classes.Container}>
            <div className={classes.ContentContainer}>
                <div className={classes.Title}>Inicio de Sesion</div>
                <div className={classes.InputsContainer}>
                    <div className={classes.InputContainer}>
                        <Input
                            label={"Nombre de usuario"}
                            onChange={setUsername}
                            value={username}
                        />
                    </div>
                    <div className={classes.InputContainer}>
                        <Input
                            label={"Contraseña"}
                            onChange={setPassword}
                            value={password}
                        />
                    </div>
                </div>
                <div className={classes.ButtonContainer}>
                    <div
                        className={classes.Button}
                        onClick={() => setRedirect(true)}
                    >
                        Iniciar Sesion
                    </div>
                </div>
            </div>
        </div>
    );
};

export default withRouter(Session);
