import React, { useState, useEffect } from "react";

import classes from "./ClientsList.module.css";
import { Client } from "./Client/Client";
import { Item } from "./Client/Client";

// import { MdAdd } from "react-icons/md";

export const ClientsList = (props) => {
    const { clients = [], onViewDetails, onCloseModal } = props;
    const [nameValue, setNameValue] = useState("");
    const [ciValue, setCodeValue] = useState("");

    useEffect(() => {
        setNameValue(props.nameValue);
    }, [props.nameValue]);

    useEffect(() => {
        setCodeValue(props.codeValue);
    }, [props.codeValue]);

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
                    .includes(ciValue.toLowerCase().replace(/[\.\-\s]+/g, ""))
            ) {
                return clientsList.push(
                    <Client
                        key={client.ci}
                        client={client}
                        onSelectClient={() => {}}
                    />
                );
            }
            return null;
        });
    }

    const itemNotFound = <div>No se han encontrado coincidencias</div>;

    return <div className={classes.Content}>{clientsList}</div>;
};
