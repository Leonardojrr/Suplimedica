import React, { useState } from "react";

import classes from "./DropableSearchHeader.module.css";

import { AiOutlineArrowDown } from "react-icons/ai";
import { AiOutlineArrowUp } from "react-icons/ai";

export const DropableSearchHeader = (props) => {
    let { searchBarVisible = true, onToggle } = props;

    return (
        <div
            className={classes.SearchContainer}
            style={{ height: searchBarVisible ? "200%" : "100%" }}
        >
            <div
                className={classes.SearchInputsContainer}
                style={{ height: searchBarVisible ? "50%" : "100%" }}
            >
                {props.children}
            </div>
            <div className={classes.ToggleButtonContainer} onClick={onToggle}>
                <div className={classes.ToggleButton}>
                    {searchBarVisible ? (
                        <AiOutlineArrowUp className={classes.Icon} />
                    ) : (
                        <AiOutlineArrowDown className={classes.Icon} />
                    )}
                </div>
            </div>
        </div>
    );
};
