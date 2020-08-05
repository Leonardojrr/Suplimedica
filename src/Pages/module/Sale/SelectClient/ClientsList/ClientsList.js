import React, { useState, useEffect } from "react";

import classes from "./ClientsList.module.css";
import { ClientDetails } from "./ClientDetails/ClientDetails";

// import { MdAdd } from "react-icons/md";

export const ClientsList = (props) => {
    const { onSelectClient = () => {}, onModalOpen } = props;
    const [nameValue, setNameValue] = useState(props.nameValue);
    const [idValue, setIdValue] = useState(props.idValue);
    const [clients, setClients] = useState(props.clients);

    useEffect(() => {
        setNameValue(props.nameValue);
    }, [props.nameValue]);

    useEffect(() => {
        setIdValue(props.idValue);
    }, [props.idValue]);

    useEffect(() => {
        setClients(props.clients);
    }, [props.clients]);

    let clientsList = [];

    console.log(clients);

    clients.map((client) => {
        if (
            client.name.toLowerCase().includes(nameValue.toLowerCase()) &&
            client.id
                .toLowerCase()
                .replace(/[\.\-\s]+/g, "")
                .toString()
                .includes(idValue.toLowerCase().replace(/[\.\-\s]+/g, ""))
        ) {
            return clientsList.push(
                <ClientDetails
                    key={client.id}
                    client={client}
                    onSelectClient={onSelectClient}
                />
            );
        }
        return null;
    });

    const clientNotFound = <div>No se han encontrado coincidencias</div>;

    return (
        <div className={classes.Container}>
            <div className={classes.ClientsContainer}>
                {clientsList.length > 0 ? clientsList : clientNotFound}
            </div>
            <div className={classes.AddNewClient} onClick={onModalOpen}>
                Añadir nuevo cliente
            </div>
        </div>
    );
};
