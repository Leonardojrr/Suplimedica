import React, { useState, useEffect } from "react";
import classes from "./Sale.module.css";
import { SearchInput } from "../../../components/SearchInput/SearchInput";
import { AddItemsList } from "./AddItemsList/AddItemsList";
import { DetailItemsList } from "./DetailItemList/DetailItemsList";
import { ClientsList } from "./SelectClient/ClientsList/ClientsList";
import { AddClientModal } from "./AddClientModal/AddClientModal";

import { MdArrowBack } from "react-icons/md";

const Sale = (props) => {
    const [clientsList, setClientsList] = useState([
        { name: "Wisam Mozalbat", id: "V. 27.030.643" },
        { name: "Leonardo Rodrigues", id: "V. 26.123.456" },
        { name: "Carlos Suarez", id: "V. 25.234.567" },
        { name: "Suplimedica", id: "J. 78.945.612-3" },
        { name: "Wasim", id: "V. 30.030.643" },
        { name: "Fadi", id: "V. 82.030.643" },
    ]);

    const list = [
        {
            id: 1,
            name: "Gazas de la mejor calidad, hechas en el zulia papa",
            price: 0.7,
            cuantity: 10,
        },
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
    const [clientNameValue, setClientNameValue] = useState("");
    const [clientIdValue, setClientIdValue] = useState("");
    const [itemsSelected, setItemsSelected] = useState([]);
    const [clientSelected, setClientSelected] = useState({});
    const [clientConfirmed, setClientConfirmed] = useState(false);
    const [totalPrice, setTotalPrice] = useState(0);
    const [modalIsOpen, setModalIsOpen] = useState(false);

    useEffect(() => {
        let total = 0;

        itemsSelected.map((item) => {
            return (total += item.price * item.selling);
        });

        setTotalPrice(total.toFixed(2));
    }, [itemsSelected]);

    const onOpenAddClientModal = () => {
        setModalIsOpen(true);
    };

    const onCloseAddClientModal = () => {
        setModalIsOpen(false);
    };

    const onFilterByClientName = (name) => {
        setClientNameValue(name);
    };

    const onFilterClientId = (id) => {
        setClientIdValue(id);
    };

    const onFilterByName = (name) => {
        setNameValue(name);
    };

    const onFilterByCode = (code) => {
        setCodeValue(code);
    };

    const onSelectClient = (client) => {
        setClientSelected(client);
    };
    const onConfirmClientSelected = () => {
        setClientConfirmed(true);
    };

    const onAddNewClient = (newClient) => {
        if (clientsList.findIndex((client) => client.id === newClient.id) < 0)
            setClientsList((prevClientsList) => [
                ...prevClientsList,
                newClient,
            ]);
        else {
            alert("Este cliente ya existe!");
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
            clientSelected,
            (totalPrice * 1.16).toFixed(2)
        );
    };

    let saleDetailComponents = null;
    let selectClientComponent = null;
    let clientDetails = null;

    if (clientSelected.name) {
        clientDetails = (
            <div className={classes.ClientContent}>
                <div className={classes.ClientDataContainer}>
                    <div className={classes.ClientData}>
                        <div
                            className={classes.ClientFieldDetail}
                            style={{ fontSize: 40 }}
                        >
                            {clientSelected.name}
                        </div>
                        <div className={classes.ClientFieldDetail}>
                            {clientSelected.id.toLowerCase().startsWith("j")
                                ? "RIF: " + clientSelected.id
                                : "CI: " + clientSelected.id}
                        </div>
                        <div className={classes.ClientFieldDetail}>
                            {clientSelected.address
                                ? "direccion: " + clientSelected.address
                                : null}
                        </div>
                        <div className={classes.ClientFieldDetail}>
                            {clientSelected.number
                                ? "numero: " + clientSelected.number
                                : null}
                        </div>
                    </div>
                </div>
                <div className={classes.ContinueButtonContainer}>
                    <div
                        className={classes.ContinueButton}
                        onClick={onConfirmClientSelected}
                    >
                        continuar
                    </div>
                </div>
            </div>
        );
    }

    let saleDate = new Date().toLocaleString();

    if (!clientConfirmed) {
        selectClientComponent = (
            <div className={classes.Content}>
                <div className={classes.LeftContainer}>
                    <div className={classes.LeftContent}>
                        <div className={classes.LeftTitle}>
                            Seleccione algun cliente
                        </div>
                        <div className={classes.BreakLineContainer}>
                            <div className={classes.BreakLine} />
                        </div>
                        <div className={classes.Inputs}>
                            <SearchInput
                                label={"Nombre"}
                                onChange={(value) => {
                                    onFilterByClientName(value);
                                }}
                            />
                            <SearchInput
                                label={"Identificación"}
                                onChange={(value) => {
                                    onFilterClientId(value);
                                }}
                            />
                        </div>
                        <div className={classes.BreakLineContainer}>
                            <div className={classes.BreakLine} />
                        </div>
                        <div className={classes.ItemsList}>
                            <ClientsList
                                onModalOpen={onOpenAddClientModal}
                                nameValue={clientNameValue}
                                idValue={clientIdValue}
                                onSelectClient={onSelectClient}
                                clients={clientsList}
                            />
                        </div>
                    </div>
                </div>
                <div className={classes.RightContainer}>
                    <div className={classes.RightTitle}>datos del cliente</div>
                    <div className={classes.BreakLineContainer}>
                        <div className={classes.BreakLine} />
                    </div>
                    {clientDetails}
                </div>
            </div>
        );
    }

    // console.log();

    if (clientConfirmed) {
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
                                    onChangeHandler={onChangeItem}
                                    onRemoveItem={onRemoveItem}
                                    items={itemsSelected}
                                />
                            </div>
                        </div>
                        <div className={classes.SaleDetailContainer}>
                            <div className={classes.SaleDetail}>
                                <div className={classes.DetailClientData}>
                                    <div>
                                        Nombre:{" "}
                                        <span style={{ fontWeight: 100 }}>
                                            {clientSelected.name}
                                        </span>
                                    </div>
                                    <div>
                                        {clientSelected.id.startsWith("J")
                                            ? "RIF: "
                                            : "CI: "}
                                        <span style={{ fontWeight: 100 }}>
                                            {clientSelected.id}
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
                                confirmar venta
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    let goBack = null;

    const goToSelectClient = () => {
        setClientConfirmed(false);
        setClientSelected("");
    };

    if (clientConfirmed) {
        goBack = (
            <div
                className={classes.BackButtonContainer}
                onClick={goToSelectClient}
            >
                <MdArrowBack className={classes.BackButton} />
            </div>
        );
    }

    return (
        <React.Fragment>
            <AddClientModal
                modalVisible={modalIsOpen}
                onCloseModal={onCloseAddClientModal}
                onAddNewClient={onAddNewClient}
            />
            <div className={classes.Container}>
                {goBack}
                <div className={classes.Header}>Venta</div>
                {selectClientComponent}
                {saleDetailComponents}
            </div>
        </React.Fragment>
    );
};

export default Sale;
