import React from "react";

import classes from "./Item.module.css";

import { MdAdd } from "react-icons/md";

export const Item = (props) => {
  const { item, onAddItem = () => {} } = props;

  return (
    <div className={classes.ItemContainer}>
      <div className={classes.ItemData}>
        <div className={classes.ItemTitle}>{item.nombre}</div>
        <div className={classes.ItemCode}>{item.codigo}</div>
      </div>
      <div
        className={classes.AddItemContainer}
        onClick={() => {
          onAddItem(item);
        }}
      >
        <MdAdd className={classes.AddItem} />
      </div>
    </div>
  );
};
