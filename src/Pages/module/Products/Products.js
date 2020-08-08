import React, { Fragment, useState } from "react";
import { InventoryList } from "./InventoryList/InventoryList";

import classes from "./Products.module.css";
import { DetailModal } from "./InventoryList/DetailModal/DetailModal";
import { EditDetailModal } from "./InventoryList/EditDetailModal/EditDetailModal";
import { SearchInput } from "../../../components/SearchInput/SearchInput";
import { DropableSearchHeader } from "../../../components/DropableSearchHeader/DropableSearchHeader";
import { Header } from "../../../components/Header/Header";
import { AddIcon } from "../../../components/Icons/AddIcon/AddIcon";

const Products = (props) => {
    const items = [
        {
            codigo: 1,
            nombre: "Producto 1 pero si lo fuerzas no te dire mas nada",
            marca: "Marca 1",
            precio: 1,
            cantidad: 100,
        },
        {
            codigo: 2,
            nombre: "Producto 2",
            marca: "Marca 2",
            precio: 2,
            cantidad: 100,
        },
        {
            codigo: 3,
            nombre: "Producto 3",
            marca: "Marca 3",
            precio: 3,
            cantidad: 100,
        },
        {
            codigo: 4,
            nombre: "Producto 4",
            marca: "Marca 4",
            precio: 4,
            cantidad: 100,
        },
        {
            codigo: 5,
            nombre: "Producto 5",
            marca: "Marca 5",
            precio: 5,
            cantidad: 100,
        },
        {
            codigo: 6,
            nombre: "Producto 6",
            marca: "Marca 6",
            precio: 6,
            cantidad: 100,
        },
        {
            codigo: 7,
            nombre: "Producto 7",
            marca: "Marca 7",
            precio: 7,
            cantidad: 100,
        },
    ];

    const [searchBarVisible, setSearchBarVisible] = useState(false);

    const [modalVisible, setModalVisible] = useState(false);
    const [editModalVisible, setEditModalVisible] = useState(false);
    const [itemSelected, setItemSelected] = useState({});
    const [nameValue, setItemNameValue] = useState("");
    const [codeValue, setItemCodeValue] = useState("");

    const onViewDetails = (item) => {
        setItemSelected(item);
        setModalVisible(true);
    };

    const onCloseModal = () => {
        setItemSelected({});
        setModalVisible(false);
    };

    const onEditProduct = () => {
        setModalVisible(false);
        setEditModalVisible(true);
    };

    const onCloseEditModal = () => {
        setModalVisible(true);
        setEditModalVisible(false);
    };

    const onFilterByItemName = (name) => {
        setItemNameValue(name);
    };

    const onFilterItemCode = (code) => {
        setItemCodeValue(code);
    };

    return (
        <React.Fragment>
            <div className={classes.Container}>
                <div className={classes.HeaderContainer}>
                    <Header title={"Productos internos"} />
                    <DropableSearchHeader
                        searchBarVisible={searchBarVisible}
                        onToggle={() =>
                            setSearchBarVisible((actualValue) => !actualValue)
                        }
                    >
                        <div className={classes.Input}>
                            <SearchInput
                                inputStyle={{ height: 20 }}
                                label={"Nombre"}
                                onChange={(value) => {
                                    onFilterByItemName(value);
                                }}
                            />
                        </div>
                        <div className={classes.Input}>
                            <SearchInput
                                inputStyle={{ height: 20 }}
                                label={"Código"}
                                onChange={(value) => {
                                    onFilterItemCode(value);
                                }}
                            />
                        </div>
                    </DropableSearchHeader>
                    <div className={classes.IconsContainer}>
                        <AddIcon onClick={() => {}} />
                    </div>
                </div>
                <div
                    className={classes.ContentContainer}
                    style={{
                        height: searchBarVisible ? 600 : 700,
                        marginTop: searchBarVisible ? 85 : 0,
                    }}
                >
                    <InventoryList
                        items={items}
                        onViewDetails={onViewDetails}
                        onCloseModal={onCloseModal}
                        nameValue={nameValue}
                        codeValue={codeValue}
                    />
                </div>
                <DetailModal
                    modalVisible={modalVisible}
                    onClose={onCloseModal}
                    onEdit={onEditProduct}
                    item={itemSelected}
                />

                <EditDetailModal
                    modalVisible={editModalVisible}
                    onClose={onCloseEditModal}
                    item={itemSelected}
                />
            </div>
        </React.Fragment>
    );
};

export default Products;
