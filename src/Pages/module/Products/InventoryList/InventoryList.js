import React, { useState, useEffect } from "react";

import classes from "./InventoryList.module.css";
import { Item } from "./Item/Item";

// import { MdAdd } from "react-icons/md";

export const InventoryList = (props) => {
    const { items = [], onViewDetails, onCloseModal } = props;
    const [nameValue, setNameValue] = useState("");
    const [codeValue, setCodeValue] = useState("");

    useEffect(() => {
        setNameValue(props.nameValue);
    }, [props.nameValue]);

    useEffect(() => {
        setCodeValue(props.codeValue);
    }, [props.codeValue]);

    let itemsList = [];

    if (items.length > 0) {
        items.map((item) => {
            if (
                item.nombre.toLowerCase().includes(nameValue.toLowerCase()) &&
                item.codigo.toString().includes(codeValue)
            ) {
                return itemsList.push(
                    <Item
                        key={item.codigo}
                        item={item}
                        onViewDetails={onViewDetails}
                        onCloseModal={onCloseModal}
                    />
                );
            }
            return null;
        });
    }

    const itemNotFound = <div>No se han encontrado coincidencias</div>;

    return (
        <div className={classes.Content}>
            <div className={classes.LabelRow}>
                <div className={classes.Label}>codigo</div>
                <div className={classes.Label}>nombre</div>
                <div className={classes.Label}>marca</div>
                <div className={classes.Label}>precio</div>
                <div className={classes.Label}>cantidad</div>
                <div className={classes.ViewMore}>Detalle</div>
            </div>
            {itemsList}
        </div>
        // <div className={classes.ItemsContainer}>
        //     {/* {itemsList.length > 0 ? itemsList : itemNotFound} */}
        // </div>
    );
};
