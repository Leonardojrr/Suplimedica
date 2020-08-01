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

    // useEffect(() => {
    //     props.items.map((item) => {
    //         if (
    //             itemsList.findIndex(
    //                 (element) => element.props.item.id === item.id
    //             ) < 0
    //         ) {
    //             // console.log(itemsList, item);
    //             return setItemsList((prevItemsList) => [
    //                 ...prevItemsList,
    //                 <Item
    //                     key={item.id}
    //                     item={item}
    //                     onChange={onChangeHandler}
    //                 />,
    //             ]);
    //         } else {
    //             return null;
    //         }
    //     });
    // }, [props.items]);

    const itemNotFound = <div>Seleccione algun producto</div>;

    return (
        <div className={classes.ItemsContainer}>
            {itemsList.length > 0 ? itemsList : itemNotFound}
        </div>
    );
};
