import React from "react";

import { MdEdit } from "react-icons/md";

import classes from "../IconsStyle.module.css";

export const EditIcon = (props) => {
    let { onClick } = props;

    return (
        <div className={classes.IconContainer} onClick={onClick}>
            <MdEdit className={classes.Icon} />
        </div>
    );
};
