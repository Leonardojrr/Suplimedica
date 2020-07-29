import React, { useState } from "react";
import classes from "./Sale.module.css";
import { SearchInput } from "./SearchInput/SearchInput";
import { AddItemList } from "./AddItemList/AddItemList";

const Sale = (props) => {
    const [nameValue, setNameValue] = useState("");
    const [codeValue, setCodeValue] = useState("");

    const list = [
        { id: 1, name: "Gazas" },
        { id: 2, name: "Guantes" },
        { id: 3, name: "Mascarillas" },
        { id: 4, name: "Jeringas" },
        { id: 5, name: "Yelco" },
        { id: 6, name: "Codera" },
    ];

    const onFilterByName = (name) => {
        setNameValue(name);
    };

    const onFilterByCode = (code) => {
        setCodeValue(code);
    };

    let itemsSelected = [{ id: 1, name: "Gazas" }];

    const onAddItem = (itemSelected) => {
        if (
            itemsSelected.filter((item) => item.id === itemSelected.id)
                .length <= 0
        ) {
            itemsSelected.push(itemSelected);
        }
        console.log(itemsSelected);
    };

    return (
        <div className={classes.Container}>
            <div className={classes.Header}>Venta</div>
            <div className={classes.LeftContainer}>
                <div className={classes.LeftContent}>
                    <div className={classes.LeftTitle}>
                        Búsqueda de productos
                    </div>
                    <div className={classes.BreakLineContainer}>
                        <div className={classes.BreakLine} />
                    </div>
                    <div className={classes.Inputs}>
                        <SearchInput
                            label={"Nombre"}
                            onChange={(value) => {
                                onFilterByName(value);
                            }}
                        />
                        <SearchInput
                            label={"Código"}
                            onChange={(value) => {
                                onFilterByCode(value);
                            }}
                        />
                    </div>
                    <div className={classes.BreakLineContainer}>
                        <div className={classes.BreakLine} />
                    </div>
                    <div className={classes.ItemsList}>
                        <AddItemList
                            nameValue={nameValue}
                            codeValue={codeValue}
                            onAddItem={onAddItem}
                            items={list}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sale;
