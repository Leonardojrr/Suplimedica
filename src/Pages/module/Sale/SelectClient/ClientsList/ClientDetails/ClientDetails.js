import React from "react";

import classes from "./ClientDetails.module.css";

export const ClientDetails = (props) => {
    const { client, onSelectClient = () => {} } = props;

    return (
        <div
            className={classes.ClientContainer}
            onClick={() => {
                onSelectClient(client);
            }}
        >
            <div className={classes.ClientData}>
                <div className={classes.ClientTitle}>{client.name}</div>
                <div className={classes.ClientCode}>{client.id}</div>
            </div>
        </div>
    );
};
