import React, { useState, useEffect } from "react";

import classes from "./Item.module.css";

import { MdAdd } from "react-icons/md";

export const Item = (props) => {
    const { nameValue, codeValue, onAdd } = props;

    return (
        <div className={classes.ItemContainer}>
            <div className={classes.ItemData}>
                <div className={classes.ItemTitle}>{nameValue}</div>
                <div className={classes.ItemCode}>{codeValue}</div>
            </div>
            <div className={classes.AddItemContainer} onClick={() => {}}>
                <MdAdd className={classes.AddItem} />
            </div>
        </div>
    );
};
