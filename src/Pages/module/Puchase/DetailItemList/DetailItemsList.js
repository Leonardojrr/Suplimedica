import React, { useState, useEffect } from "react";

import classes from "./DetailItemsList.module.css";
import { Item } from "./Item/Item";

// import { MdAdd } from "react-icons/md";

export const DetailItemsList = (props) => {
    const { onChangeHandler, onRemoveItem } = props;
    // const [itemsList, setItemsList] = useState([]);

    let itemsList = [];

    props.items.map((item) => {
        if (
            itemsList.findIndex(
                (element) => element.props.item.id === item.id
            ) < 0
        ) {
            return itemsList.push(
                <Item
                    key={item.id}
                    item={item}
                    onChange={onChangeHandler}
                    onRemove={onRemoveItem}
                />
            );
        } else {
            return null;
        }
    });

    const itemNotFound = (
        <div className={classes.NotSelected}>Seleccione algun producto</div>
    );

    return (
        <React.Fragment>
            {itemsList.length > 0 ? (
                <div className={classes.ItemsContainer}>{itemsList}</div>
            ) : (
                itemNotFound
            )}
        </React.Fragment>
    );
};
