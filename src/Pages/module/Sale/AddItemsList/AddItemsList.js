import React, { useState, useEffect } from "react";

import classes from "./AddItemsList.module.css";
import { Item } from "./Item/Item";

// import { MdAdd } from "react-icons/md";

export const AddItemsList = (props) => {
  const { onAddItem } = props;
  const [nameValue, setNameValue] = useState(props.nameValue);
  const [codeValue, setCodeValue] = useState(props.codeValue);
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(props.items);
  }, [props.items]);

  useEffect(() => {
    setNameValue(props.nameValue);
  }, [props.nameValue]);

  useEffect(() => {
    setCodeValue(props.codeValue);
  }, [props.codeValue]);

  let itemsList = [];

  if (items.length > 0) {
    items.map((item) => {
      if (
        item.nombre.toLowerCase().includes(nameValue.toLowerCase()) &&
        item.codigo.toString().includes(codeValue)
      ) {
        return itemsList.push(
          <Item key={item.id_producto} item={item} onAddItem={onAddItem} />
        );
      }
      return null;
    });
  }

  const itemNotFound = <div>No se han encontrado coincidencias</div>;

  return (
    <div className={classes.ItemsContainer}>
      {itemsList.length > 0 ? itemsList : itemNotFound}
    </div>
  );
};
