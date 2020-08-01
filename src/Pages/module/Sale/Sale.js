import React, { useState, useEffect } from "react";
import classes from "./Sale.module.css";
import { SearchInput } from "./SearchInput/SearchInput";
import { AddItemsList } from "./AddItemsList/AddItemsList";
import { DetailItemsList } from "./DetailItemList/DetailItemsList";

const Sale = (props) => {
    let user = { name: "Wisam Mozalbat", id: "V. 27.030.643" };
    const list = [
        { id: 1, name: "Gazas", price: 0.7, cuantity: 10 },
        { id: 2, name: "Guantes", price: 1.7, cuantity: 10 },
        { id: 3, name: "Mascarillas", price: 4, cuantity: 10 },
        { id: 4, name: "Jeringas", price: 0.5, cuantity: 10 },
        { id: 5, name: "Yelco", price: 4, cuantity: 10 },
        { id: 6, name: "Codera", price: 10, cuantity: 10 },
        { id: 12, name: "Andadera", price: 1.7, cuantity: 10 },
        { id: 13, name: "Escabel", price: 4, cuantity: 10 },
        { id: 14, name: "Traqueotomo", price: 0.5, cuantity: 10 },
        { id: 15, name: "Camilla", price: 4, cuantity: 10 },
        { id: 16, name: "Gel antibacterial", price: 10, cuantity: 10 },
    ];
    const [nameValue, setNameValue] = useState("");
    const [codeValue, setCodeValue] = useState("");
    const [itemsSelected, setItemsSelected] = useState([]);
    // const [saleDetails, setSaleDetails] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    const onFilterByName = (name) => {
        setNameValue(name);
    };

    const onFilterByCode = (code) => {
        setCodeValue(code);
    };

    const onAddItem = (itemSelected) => {
        if (itemsSelected.findIndex((item) => item.id == itemSelected.id) < 0) {
            setItemsSelected((prevItems) => [
                ...prevItems,
                { ...itemSelected, selling: 1 },
            ]);
        }
    };

    const onRemoveItem = (itemId) => {
        let newitemsArray = itemsSelected.filter((item) => item.id != itemId);
        setItemsSelected([...newitemsArray]);
    };

    const onChangeItem = (id, value) => {
        let itemsSelectedCopy = [...itemsSelected];
        let itemIndex = itemsSelected.findIndex((item) => item.id == id);
        const copy = Object.assign({}, itemsSelected[itemIndex]);
        itemsSelectedCopy[itemIndex] = {
            ...copy,
            selling: value,
        };
        setItemsSelected(itemsSelectedCopy);
    };

    useEffect(() => {
        let total = 0;

        itemsSelected.map((item) => {
            return (total += item.price * item.selling);
        });

        setTotalPrice(total.toFixed(2));
    }, [itemsSelected]);

    console.log(totalPrice);

    console.log("sale details", itemsSelected);

    return (
        <div className={classes.Container}>
            <div className={classes.Header}>Venta</div>
            <div className={classes.Content}>
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
                            <AddItemsList
                                nameValue={nameValue}
                                codeValue={codeValue}
                                onAddItem={onAddItem}
                                items={list}
                            />
                        </div>
                    </div>
                </div>
                <div className={classes.RightContainer}>
                    <div className={classes.RightTitle}>detalle de venta</div>
                    <div className={classes.BreakLineContainer}>
                        <div className={classes.BreakLine} />
                    </div>
                    <div className={classes.RightContent}>
                        <div className={classes.ItemsAddedContainer}>
                            <div className={classes.ItemsAddedList}>
                                <DetailItemsList
                                    // detailHandler={setSaleDetailsHandler}
                                    onChangeHandler={onChangeItem}
                                    onRemoveItem={onRemoveItem}
                                    // saleDetails={saleDetails}
                                    items={itemsSelected}
                                />
                            </div>
                        </div>
                        <div className={classes.SaleDetailContainer}>
                            <div className={classes.SaleDetail}>
                                total price: ${totalPrice}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sale;
