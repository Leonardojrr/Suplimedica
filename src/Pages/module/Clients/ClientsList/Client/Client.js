import React from "react";

import classes from "./Client.module.css";

export const Client = (props) => {
    let { client, onSelectClient } = props;

    return (
        <div
            className={classes.ClientContainer}
            onClick={() => onSelectClient(client)}
        >
            <div className={classes.ClientName}>{client.nombre}</div>
            <div className={classes.ClientId}>
                {client.ci.toLowerCase().startsWith("j")
                    ? "RIF: " + client.ci
                    : "CI: " + client.ci}
            </div>
        </div>
    );
};
