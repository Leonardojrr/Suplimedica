import React from "react";

import classes from "./Client.module.css";

import { MdAdd } from "react-icons/md";

export const Client = (props) => {
    const { client, onViewDetails } = props;

    return (
        <div className={classes.ClientContainer} onClick={onViewDetails}>
            <div className={classes.ClientName}>{client.nombre}</div>
            <div className={classes.ClientId}>
                {client.ci.toLowerCase().startsWith("j")
                    ? "RIF: " + client.ci
                    : "CI: " + client.ci}
            </div>
        </div>
    );
};
