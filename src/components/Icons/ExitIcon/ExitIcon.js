import React from "react";

import { MdClose } from "react-icons/md";

import classes from "../IconsStyle.module.css";

export const ExitIcon = (props) => {
    let { onClick } = props;

    return (
        <div className={classes.IconContainer} onClick={onClick}>
            <MdClose className={classes.Icon} />
        </div>
    );
};
