import React, { useState, useEffect } from "react";

import classes from "./AddItemsList.module.css";
import { Item } from "./Item/Item";

// import { MdAdd } from "react-icons/md";

export const AddItemsList = (props) => {
    const { items = [], onAddItem } = props;
    const [nameValue, setNameValue] = useState(props.nameValue);
    const [codeValue, setCodeValue] = useState(props.codeValue);

    useEffect(() => {
        setNameValue(props.nameValue);
    }, [props.nameValue]);

    useEffect(() => {
        setCodeValue(props.codeValue);
    }, [props.codeValue]);

    let itemsList = [];

    items.map((item) => {
        if (
            item.name.toLowerCase().includes(nameValue.toLowerCase()) &&
            item.id.toString().includes(codeValue)
        ) {
            return itemsList.push(
                <Item key={item.id} item={item} onAddItem={onAddItem} />
            );
        }
    });

    const itemNotFound = <div>No se han encontrado coincidencias</div>;

    return (
        <div className={classes.ItemsContainer}>
            {itemsList.length > 0 ? itemsList : itemNotFound}
        </div>
    );
};
