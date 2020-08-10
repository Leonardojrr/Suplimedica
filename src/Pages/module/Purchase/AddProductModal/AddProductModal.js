import React, { useState, useEffect } from "react";

import classes from "./AddProductModal.module.css";

import { ExitIcon } from "../../../../components/Icons/ExitIcon/ExitIcon";

import { Input } from "../../../../Util/Input/Input";
import { SearchInput } from "../../../../components/SearchInput/SearchInput";

export const AddProductModal = (props) => {
    let { modalVisible, onCloseModal, onAddNewProvider } = props;
    const [productSelected, seTProductSelected] = useState({});
    const [products, setProduct] = useState([]);
    const [productNameValue, setProductNameValue] = useState("");
    const [productCodeValue, setProductCodeValue] = useState("");

    useEffect(async () => {
        const res = await fetch("http://localhost:3000/product", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        }).then((resp) => resp.json());
    }, []);

    const onFilterByProductName = (name) => {
        setProductNameValue(name);
    };

    const onFilterProductCode = (code) => {
        setProductCodeValue(code);
    };

    const onCancelHandler = () => {
        setProductNameValue("");
        setProductCodeValue("");
        onCloseModal();
    };
    let productsList = [];

    const onSelectProduct = () => {};

    products.map((product) => {
        if (
            product.nombre
                .toLowerCase()
                .includes(productNameValue.toLowerCase()) &&
            product.codigo
                .toString()
                .includes(
                    productCodeValue.toLowerCase().replace(/[\.\-\s]+/g, "")
                )
        ) {
            return productsList.push(
                <div key={product.codigo} onClick={onSelectProduct}>
                    <div>{product.nombre}</div>
                    <div>{product.codigo}</div>
                </div>
            );
        }
        return null;
    });

    return (
        <div
            className={classes.ModalContainer}
            style={{ display: modalVisible ? "block" : "none" }}
        >
            <div className={classes.Backdrop} onClick={onCloseModal}></div>
            <div className={classes.Modal}>
                <div className={classes.Header}>
                    <div className={classes.Title}>
                        Añadir a un nuevo cliente
                    </div>
                    <div className={classes.IconsContainer}>
                        <ExitIcon onClick={onCloseModal} />
                    </div>
                </div>
                <div className={classes.SearchBar}>
                    <div className={classes.Input}>
                        <SearchInput
                            inputStyle={{ height: 20 }}
                            label={"Nombre"}
                            onChange={(value) => {
                                onFilterByProductName(value);
                            }}
                        />
                    </div>
                    <div className={classes.Input}>
                        <SearchInput
                            inputStyle={{ height: 20 }}
                            label={"Código"}
                            onChange={(value) => {
                                onFilterProductCode(value);
                            }}
                        />
                    </div>
                </div>
                <div className={classes.ContentContainer}>{productsList}</div>
                <div className={classes.BottomContainer}>
                    <div
                        className={classes.CancelButton}
                        onClick={onCancelHandler}
                    >
                        Cancelar
                    </div>
                    <div
                        className={classes.AcceptButton}
                        // onClick={onAddProvider}
                    >
                        Añadir
                    </div>
                </div>
            </div>
        </div>
    );
};
