import React from "react";
import classes from "./SearchInput.module.css";

import { Input } from "../../Util/Input/Input";

import { MdSearch } from "react-icons/md";

export const SearchInput = (props) => {
    const { label, onChange, style, inputStyle } = props;

    return (
        <div className={classes.InputContainer}>
            <div className={classes.Input}>
                <Input
                    style={style}
                    inputStyle={inputStyle}
                    label={label}
                    onChange={(value) => {
                        onChange(value);
                    }}
                />
            </div>
            <div className={classes.Search}>
                <MdSearch className={classes.SearchIcon} />
            </div>
        </div>
    );
};