import React, { useState, useEffect } from "react";

import classes from "./AddItemList.module.css";
import { Item } from "./Item/Item";

import { MdAdd } from "react-icons/md";

export const AddItemList = (props) => {
    const { nameValue, codeValue, onAdd } = props;

    const list = [
        { id: 1, name: "Gazas" },
        { id: 2, name: "Guantes" },
        { id: 3, name: "Mascarillas" },
        { id: 4, name: "Jeringas" },
    ];

    return (
        <div className={classes.ItemsContainer}>
            <Item nameValue={"prod 1"} codeValue={"123456"} />
            <Item nameValue={"prod 1"} codeValue={"123456"} />
            <Item nameValue={"prod 1"} codeValue={"123456"} />
            <Item nameValue={"prod 1"} codeValue={"123456"} />
            <Item nameValue={"prod 1"} codeValue={"123456"} />
            <Item nameValue={"prod 1"} codeValue={"123456"} />
            <Item nameValue={"prod 1"} codeValue={"123456"} />
            <Item nameValue={"prod 1"} codeValue={"123456"} />
            <Item nameValue={"prod 1"} codeValue={"123456"} />
            <Item nameValue={"prod 1"} codeValue={"123456"} />
            <Item nameValue={"prod 1"} codeValue={"123456"} />
            <Item nameValue={"prod 1"} codeValue={"123456"} />
            <Item nameValue={"prod 1"} codeValue={"123456"} />
            <Item nameValue={"prod 1"} codeValue={"123456"} />
            <Item nameValue={"prod 1"} codeValue={"123456"} />
            <Item nameValue={"prod 1"} codeValue={"123456"} />
            <Item nameValue={"prod 1"} codeValue={"123456"} />
            <Item nameValue={"prod 1"} codeValue={"123456"} />
            <Item nameValue={"prod 1"} codeValue={"123456"} />
        </div>
    );
};
