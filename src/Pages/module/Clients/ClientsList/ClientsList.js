import React, { useState, useEffect } from "react";

import classes from "./ClientsList.module.css";
import { Client } from "./Client/Client";
import { Item } from "./Client/Client";

// import { MdAdd } from "react-icons/md";

export const ClientsList = (props) => {
    const { clients = [], onViewDetails } = props;
    const [nameValue, setNameValue] = useState("");
    const [idValue, setIdValue] = useState("");

    useEffect(() => {
        setNameValue(props.nameValue);
    }, [props.nameValue]);

    useEffect(() => {
        setIdValue(props.idValue);
    }, [props.idValue]);

    let clientsList = [];
    console.log(clients);

    if (clients.length > 0) {
        clients.map((client) => {
            if (
                client.nombre.toLowerCase().includes(nameValue.toLowerCase()) &&
                client.ci
                    .toLowerCase()
                    .replace(/[\.\-\s]+/g, "")
                    .toString()
                    .includes(idValue.toLowerCase().replace(/[\.\-\s]+/g, ""))
            ) {
                return clientsList.push(
                    <Client
                        key={client.ci}
                        client={client}
                        onSelectClient={onViewDetails}
                    />
                );
            }
            return null;
        });
    }

    const itemNotFound = <div>No se han encontrado coincidencias</div>;

    return <div className={classes.Content}>{clientsList}</div>;
};
