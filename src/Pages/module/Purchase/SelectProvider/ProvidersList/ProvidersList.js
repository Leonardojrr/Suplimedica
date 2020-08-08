import React, { useState, useEffect } from "react";

import classes from "./ProvidersList.module.css";
import { ProviderDetails } from "./ProviderDetails/ProviderDetails";

// import { MdAdd } from "react-icons/md";

export const ProvidersList = (props) => {
    const { onSelectProvider = () => {}, onModalOpen } = props;
    const [nameValue, setNameValue] = useState(props.nameValue);
    const [idValue, setIdValue] = useState(props.idValue);
    const [providers, setProviders] = useState(props.providers);

    useEffect(() => {
        setNameValue(props.nameValue);
    }, [props.nameValue]);

    useEffect(() => {
        setIdValue(props.idValue);
    }, [props.idValue]);

    useEffect(() => {
        setProviders(props.providers);
    }, [props.providers]);

    let providersList = [];

    console.log(providers);

    providers.map((provider) => {
        if (
            provider.name.toLowerCase().includes(nameValue.toLowerCase()) &&
            provider.id
                .toLowerCase()
                .replace(/[\.\-\s]+/g, "")
                .toString()
                .includes(idValue.toLowerCase().replace(/[\.\-\s]+/g, ""))
        ) {
            return providersList.push(
                <ProviderDetails
                    key={provider.id}
                    provider={provider}
                    onSelectProvider={onSelectProvider}
                />
            );
        }
        return null;
    });

    const providerNotFound = <div>No se han encontrado coincidencias</div>;

    return (
        <div className={classes.Container}>
            <div className={classes.ProvidersContainer}>
                {providersList.length > 0 ? providersList : providerNotFound}
            </div>
            <div className={classes.AddNewProvider} onClick={onModalOpen}>
                Añadir nuevo proveedor
            </div>
        </div>
    );
};
