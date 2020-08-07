import React from "react";
import classes from "./EditInput.module.css";

export const EditInput = (props) => {
    let { label, onChange, value } = props;

    return (
        <div className={classes.InputAndLabelContainer}>
            <div className={classes.InputLabel}>{label}</div>
            <div className={classes.InputContainer}>
                <input
                    disabled={false}
                    className={classes.Input}
                    value={value}
                    style={{ zIndex: 100 }}
                    onChange={(text) => onChange(text.target.value)}
                />
            </div>
        </div>
    );
};
