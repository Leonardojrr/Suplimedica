import React from "react";

import { MdAdd } from "react-icons/md";

import classes from "../IconsStyle.module.css";

export const AddIcon = (props) => {
    let { onClick } = props;

    return (
        <div className={classes.IconContainer} onClick={onClick}>
            <MdAdd className={classes.Icon} />
        </div>
    );
};