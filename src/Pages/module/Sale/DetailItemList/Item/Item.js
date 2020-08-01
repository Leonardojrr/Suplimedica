import React, { useState } from "react";

import classes from "./Item.module.css";

import { FiMinus } from "react-icons/fi";
import { BsPlus } from "react-icons/bs";
import { MdClose } from "react-icons/md";

// import { Input } from "../../../../../Util/Input/Input";

export const Item = (props) => {
    const { item, onChange, onRemove } = props;
    const [inputValue, setInputValue] = useState(1);

    const plusInputValue = () => {
        if (Number(inputValue) + 1 <= item.cuantity) {
            setInputValue(Number(inputValue) + 1);
            onChange(item.id, Number(inputValue + 1));
        } else {
            alert("no se posee esta cantidad de " + item.name);
        }
    };

    const minusInputValue = () => {
        if (Number(inputValue) - 1 > 0) {
            setInputValue(Number(inputValue) - 1);
            onChange(item.id, Number(inputValue - 1));
        }
    };

    const changeInputValue = (value) => {
        onChange(item.id, Number(value));
    };

    const changeInputValueHandler = (val) => {
        if (Number(val) > item.cuantity) {
            alert("no se posee esta cantidad de " + item.name);
            setInputValue(1);
        } else {
            setInputValue(val);
            changeInputValue(val);
        }
    };

    return (
        <div className={classes.ItemContainer}>
            <div className={classes.ItemData}>
                <div className={classes.ItemTitle}>{item.name}</div>
                <div className={classes.ItemPrice}>${item.price}</div>
            </div>
            <div className={classes.ItemCuantity}>
                <div className={classes.InputContainer}>
                    <div
                        className={classes.LessButtonContainer}
                        onClick={minusInputValue}
                    >
                        <FiMinus className={classes.LessButton} />
                    </div>
                    <input
                        className={classes.Input}
                        value={inputValue}
                        onChange={(txt) => {
                            changeInputValueHandler(txt.target.value);
                        }}
                    />
                    <div
                        className={classes.PlusButtonContainer}
                        onClick={plusInputValue}
                    >
                        <BsPlus className={classes.LessButton} />
                    </div>
                </div>
                <div>disponible: {item.cuantity}</div>
            </div>
            <div
                className={classes.DeleteButtonContainer}
                onClick={() => onRemove(item.id)}
            >
                <MdClose className={classes.DeleteButton} />
            </div>
        </div>
    );
};
