import React, { useState, useEffect } from "react";
import classes from "./Purchase.module.css";
import { SearchInput } from "../../../components/SearchInput/SearchInput";
import { AddItemsList } from "./AddItemsList/AddItemsList";
import { DetailItemsList } from "./DetailItemList/DetailItemsList";
import { ProvidersList } from "./SelectProvider/ProvidersList/ProvidersList";
import { AddProviderModal } from "./AddProviderModal/AddProviderModal";

import { MdArrowBack } from "react-icons/md";

const Purchase = (props) => {
    const [providersList, setProvidersList] = useState([
        {
            nombre: "Wisam Mozalbat",
            ci: "V. 27.030.643",
            direccion: "tierra negra",
            numero: "04242108555",
        },
        {
            nombre: "Leonardo Rodrigues",
            ci: "V. 26.123.456",
            direccion: "tierra negra",
            numero: "04242108555",
        },
        {
            nombre: "Brandon Lugo",
            ci: "V. 25.234.567",
            direccion: "tierra negra",
            numero: "04242108555",
        },
        {
            nombre: "Suplimedica",
            ci: "J. 01234567-3",
            direccion: "tierra negra",
            numero: "04242108555",
        },
        {
            nombre: "Wasim",
            ci: "V. 30.030.643",
            direccion: "tierra negra",
            numero: "04242108555",
        },
        {
            nombre: "Fadi",
            ci: "E. 82.030.643",
            direccion: "tierra negra",
            numero: "04242108555",
        },
    ]);

    const list = [
        { id: 1213501, name: "Gazas", price: 0.7, cuantity: 10 },
        { id: 1213502, name: "Guantes", price: 1.7, cuantity: 10 },
        { id: 1213503, name: "Mascarillas", price: 4, cuantity: 10 },
        { id: 1213504, name: "Jeringas", price: 0.5, cuantity: 10 },
        { id: 1213505, name: "Yelco", price: 4, cuantity: 10 },
        { id: 1213506, name: "Codera", price: 10, cuantity: 10 },
        { id: 1213512, name: "Andadera", price: 1.7, cuantity: 10 },
        { id: 1213513, name: "Escabel", price: 4, cuantity: 10 },
        { id: 1213514, name: "Traqueotomo", price: 0.5, cuantity: 10 },
        { id: 1213515, name: "Camilla", price: 4, cuantity: 10 },
        { id: 1213516, name: "Gel antibacterial", price: 10, cuantity: 10 },
    ];

    const [nameValue, setNameValue] = useState("");
    const [codeValue, setCodeValue] = useState("");
    const [providerNameValue, setProviderNameValue] = useState("");
    const [providerIdValue, setProviderIdValue] = useState("");
    const [itemsSelected, setItemsSelected] = useState([]);
    const [providerSelected, setProviderSelected] = useState({});
    const [providerConfirmed, setProviderConfirmed] = useState(false);
    const [totalPrice, setTotalPrice] = useState(0);
    const [modalIsOpen, setModalIsOpen] = useState(false);

    useEffect(() => {
        let total = 0;

        itemsSelected.map((item) => {
            return (total += item.price * item.selling);
        });

        setTotalPrice(total.toFixed(2));
    }, [itemsSelected]);

    const onOpenAddProviderModal = () => {
        setModalIsOpen(true);
    };

    const onCloseAddProviderModal = () => {
        setModalIsOpen(false);
    };

    const onFilterByProviderName = (name) => {
        setProviderNameValue(name);
    };

    const onFilterProviderId = (id) => {
        setProviderIdValue(id);
    };

    const onFilterByName = (name) => {
        setNameValue(name);
    };

    const onFilterByCode = (code) => {
        setCodeValue(code);
    };

    const onSelectProvider = (provider) => {
        setProviderSelected(provider);
    };
    const onConfirmProviderSelected = () => {
        setProviderConfirmed(true);
    };

    const onAddNewProvider = (newProvider) => {
        if (
            providersList.findIndex(
                (provider) => provider.ci === newProvider.ci
            ) < 0
        )
            setProvidersList((prevProvidersList) => [
                ...prevProvidersList,
                newProvider,
            ]);
        else {
            alert("Este proveedor ya existe!");
        }
    };

    const onAddItem = (itemSelected) => {
        if (
            itemsSelected.findIndex((item) => item.id === itemSelected.id) < 0
        ) {
            setItemsSelected((prevItems) => [
                ...prevItems,
                { ...itemSelected, selling: 1 },
            ]);
        }
    };

    const onRemoveItem = (itemId) => {
        let newitemsArray = itemsSelected.filter((item) => item.id !== itemId);
        setItemsSelected([...newitemsArray]);
    };

    const onChangeItem = (id, value) => {
        let itemsSelectedCopy = [...itemsSelected];
        let itemIndex = itemsSelected.findIndex((item) => item.id === id);
        const copy = Object.assign({}, itemsSelected[itemIndex]);
        itemsSelectedCopy[itemIndex] = {
            ...copy,
            selling: value,
        };
        setItemsSelected(itemsSelectedCopy);
    };

    const onConfirmSale = () => {
        console.log(
            "sale done",
            providerSelected,
            (totalPrice * 1.16).toFixed(2)
        );
    };

    let saleDetailComponents = null;
    let selectProviderComponent = null;
    let providerDetails = null;

    if (providerSelected.nombre) {
        providerDetails = (
            <div className={classes.ProviderContent}>
                <div className={classes.ProviderDataContainer}>
                    <div className={classes.ProviderData}>
                        <div
                            className={classes.ProviderFieldDetail}
                            style={{ fontSize: 40 }}
                        >
                            {providerSelected.nombre}
                        </div>
                        <div className={classes.ProviderFieldDetail}>
                            {providerSelected.ci.toLowerCase().startsWith("j")
                                ? "RIF: " + providerSelected.ci
                                : "CI: " + providerSelected.ci}
                        </div>
                        <div className={classes.ProviderFieldDetail}>
                            {providerSelected.direccion
                                ? "direccion: " + providerSelected.direccion
                                : null}
                        </div>
                        <div className={classes.ProviderFieldDetail}>
                            {providerSelected.numero
                                ? "numero: " + providerSelected.numero
                                : null}
                        </div>
                    </div>
                </div>
                <div className={classes.ContinueButtonContainer}>
                    <div
                        className={classes.ContinueButton}
                        onClick={onConfirmProviderSelected}
                    >
                        continuar
                    </div>
                </div>
            </div>
        );
    }

    let saleDate = new Date().toLocaleString();

    if (!providerConfirmed) {
        selectProviderComponent = (
            <div className={classes.Content}>
                <div className={classes.LeftContainer}>
                    <div className={classes.LeftContent}>
                        <div className={classes.LeftTitle}>
                            Seleccione algun proveedor
                        </div>
                        <div className={classes.BreakLineContainer}>
                            <div className={classes.BreakLine} />
                        </div>
                        <div className={classes.Inputs}>
                            <SearchInput
                                label={"Nombre"}
                                onChange={(value) => {
                                    onFilterByProviderName(value);
                                }}
                            />
                            <SearchInput
                                label={"Identificación"}
                                onChange={(value) => {
                                    onFilterProviderId(value);
                                }}
                            />
                        </div>
                        <div className={classes.BreakLineContainer}>
                            <div className={classes.BreakLine} />
                        </div>
                        <div className={classes.ItemsList}>
                            <ProvidersList
                                onModalOpen={onOpenAddProviderModal}
                                nameValue={providerNameValue}
                                idValue={providerIdValue}
                                onSelectProvider={onSelectProvider}
                                providers={providersList}
                            />
                        </div>
                    </div>
                </div>
                <div className={classes.RightContainer}>
                    <div className={classes.RightTitle}>
                        datos del proveedor
                    </div>
                    <div className={classes.BreakLineContainer}>
                        <div className={classes.BreakLine} />
                    </div>
                    {providerDetails}
                </div>
            </div>
        );
    }

    // console.log();

    if (providerConfirmed) {
        saleDetailComponents = (
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
                            <div className={classes.AddProduct}>
                                añadir producto a este proveedor
                            </div>
                        </div>
                    </div>
                </div>
                <div className={classes.RightContainer}>
                    <div className={classes.RightTitle}>detalle de compra</div>
                    <div className={classes.BreakLineContainer}>
                        <div className={classes.BreakLine} />
                    </div>
                    <div className={classes.RightContent}>
                        <div className={classes.ItemsAddedContainer}>
                            <div className={classes.ItemsAddedList}>
                                <DetailItemsList
                                    onChangeHandler={onChangeItem}
                                    onRemoveItem={onRemoveItem}
                                    items={itemsSelected}
                                />
                            </div>
                        </div>
                        <div className={classes.SaleDetailContainer}>
                            <div className={classes.SaleDetail}>
                                <div className={classes.DetailProviderData}>
                                    <div>
                                        Nombre:{" "}
                                        <span style={{ fontWeight: 100 }}>
                                            {providerSelected.nombre}
                                        </span>
                                    </div>
                                    <div>
                                        {providerSelected.ci.startsWith("J")
                                            ? "RIF: "
                                            : "CI: "}
                                        <span style={{ fontWeight: 100 }}>
                                            {providerSelected.ci}
                                        </span>
                                    </div>
                                    <div>
                                        Fecha:{" "}
                                        <span style={{ fontWeight: 100 }}>
                                            {saleDate}
                                        </span>
                                    </div>
                                </div>
                                <div className={classes.DetailSaleTotal}>
                                    <div>
                                        Total: $
                                        <span style={{ fontWeight: 100 }}>
                                            {totalPrice}
                                        </span>
                                    </div>
                                    <div>
                                        IVA: $
                                        <span style={{ fontWeight: 100 }}>
                                            {(totalPrice * 0.16).toFixed(2)}
                                        </span>
                                    </div>
                                    <div>
                                        MONTO A PAGAR: $
                                        <span style={{ fontWeight: 100 }}>
                                            {(totalPrice * 1.16).toFixed(2)}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div
                                className={classes.ConfirmSaleContainer}
                                onClick={onConfirmSale}
                            >
                                confirmar compra
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    let goBack = null;

    const goToSelectProvider = () => {
        setProviderConfirmed(false);
        setProviderSelected("");
    };

    if (providerConfirmed) {
        goBack = (
            <div
                className={classes.BackButtonContainer}
                onClick={goToSelectProvider}
            >
                <MdArrowBack className={classes.BackButton} />
            </div>
        );
    }

    return (
        <React.Fragment>
            <AddProviderModal
                modalVisible={modalIsOpen}
                onCloseModal={onCloseAddProviderModal}
                onAddNewProvider={onAddNewProvider}
            />
            <div className={classes.Container}>
                {goBack}
                <div className={classes.Header}>Compra</div>
                {selectProviderComponent}
                {saleDetailComponents}
            </div>
        </React.Fragment>
    );
};

export default Purchase;
