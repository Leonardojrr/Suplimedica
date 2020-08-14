import React, { useState } from "react";

import classes from "./Item.module.css";

import { FiMinus } from "react-icons/fi";
import { BsPlus } from "react-icons/bs";
import { MdClose } from "react-icons/md";

export const Item = (props) => {
  const { item, onChange, onRemove, onChangeCost } = props;
  const [inputValue, setInputValue] = useState(1);
  const [costValue, setCostValue] = useState(0);

  const plusInputValue = () => {
    setInputValue(Number(inputValue) + 1);
    onChange(item.id_producto, Number(inputValue + 1));
  };

  const onCostValueChange = (newVal) => {
    if (newVal.match(/[\.]/g)) {
      if (
        Number(newVal) < 0 ||
        /[^0-9\.]/.test(newVal) ||
        newVal.match(/[\.]/g).length > 1
      ) {
        alert("Costo invalido");
      } else {
        onChangeCost(item.id_producto, Number(newVal));
        setCostValue(newVal);
      }
    } else {
      if (Number(newVal) < 0 || /[^0-9\.]/.test(newVal)) {
        alert("Costo invalido");
      } else {
        onChangeCost(item.id_producto, Number(newVal));
        setCostValue(newVal);
      }
    }
  };

  const minusInputValue = () => {
    if (Number(inputValue) - 1 > 0) {
      setInputValue(Number(inputValue) - 1);
      onChange(item.id_producto, Number(inputValue - 1));
    }
  };

  const changeInputValue = (value) => {
    onChange(item.id_producto, Number(value));
  };

  const changeInputValueHandler = (val) => {
    if (Number(val) < 0) {
      alert("datos invalidos");
      setInputValue(1);
    } else {
      setInputValue(val);
      changeInputValue(val);
    }
  };

  return (
    <div className={classes.ItemContainer}>
      <div className={classes.ItemData}>
        <div className={classes.ItemTitle}>{item.nombre}</div>
        {/*input para introducir el costo*/}
        <div className={classes.ItemPrice}>
          $
          <input
            className={classes.ItemPriceInput}
            value={costValue}
            onChange={(text) => onCostValueChange(text.target.value)}
          />
        </div>
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
          <div className={classes.PlusButtonContainer} onClick={plusInputValue}>
            <BsPlus className={classes.LessButton} />
          </div>
        </div>
        <div>disponible: {item.cantidad}</div>
      </div>
      <div
        className={classes.DeleteButtonContainer}
        onClick={() => onRemove(item.id_producto)}
      >
        <MdClose className={classes.DeleteButton} />
      </div>
    </div>
  );
};
