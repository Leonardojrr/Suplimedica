import React, { useState } from "react";
import classes from "./Clients.module.css";

import { MdAdd } from "react-icons/md";
import { SearchInput } from "../../../components/SearchInput/SearchInput";
import { Header } from "../../../components/Header/Header";
import { ClientsList } from "./ClientsList/ClientsList";
import { DropableSearchHeader } from "../../../components/DropableSearchHeader/DropableSearchHeader";
import { AddClientModal } from "./ClientsList/AddClientModal/AddClientModal";
import { DetailModal } from "./ClientsList/DetailModal/DetailModal";
import { EditDetailModal } from "./ClientsList/EditDetailModal/EditDetailModal";
import { AddIcon } from "../../../components/Icons/AddIcon/AddIcon";

const Clients = (props) => {
    const [clientsList, setClientsList] = useState([
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

    const [searchBarVisible, setSearchBarVisible] = useState(false);

    const [addClientModalVisible, setAddClientModalVisible] = useState(false);
    const [editModalVisible, setEditModalVisible] = useState(false);
    const [detailModalVisible, setDetailModalVisible] = useState(false);
    const [clientSelected, setClientSelected] = useState({});
    const [nameValue, setProviderNameValue] = useState("");
    const [idValue, setProviderIdValue] = useState("");

    const onOpenAddClientModal = () => {
        setAddClientModalVisible(true);
    };

    const onCloseAddClientModal = () => {
        setAddClientModalVisible(false);
    };

    const onOpenDetailModal = (client) => {
        setClientSelected(client);
        setDetailModalVisible(true);
    };
    const onCloseDetailModal = () => {
        setDetailModalVisible(false);
    };

    const onOpenEditModal = () => {
        setEditModalVisible(true);
        setDetailModalVisible(false);
    };
    const onCloseEditModal = () => {
        setEditModalVisible(false);
        setDetailModalVisible(true);
    };

    const onFilterByProviderName = (name) => {
        setProviderNameValue(name);
    };

    const onFilterProviderId = (code) => {
        setProviderIdValue(code);
    };

    return (
        <React.Fragment>
            <div className={classes.Container}>
                <div className={classes.HeaderContainer}>
                    <Header title={"Clientes"} />
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
                                    onFilterByProviderName(value);
                                }}
                            />
                        </div>
                        <div className={classes.Input}>
                            <SearchInput
                                inputStyle={{ height: 20 }}
                                label={"Código"}
                                onChange={(value) => {
                                    onFilterProviderId(value);
                                }}
                            />
                        </div>
                    </DropableSearchHeader>
                    <div className={classes.IconsContainer}>
                        <AddIcon onClick={onOpenAddClientModal} />
                    </div>
                </div>

                <div
                    className={classes.ContentContainer}
                    style={{
                        height: searchBarVisible ? 600 : 700,
                        marginTop: searchBarVisible ? 85 : 0,
                    }}
                >
                    <ClientsList
                        clients={clientsList}
                        nameValue={nameValue}
                        idValue={idValue}
                        onViewDetails={onOpenDetailModal}
                    />
                </div>
                <AddClientModal
                    modalVisible={addClientModalVisible}
                    onCloseModal={onCloseAddClientModal}
                    onAddNewClient={(client) => console.log(client)}
                />
                <DetailModal
                    modalVisible={detailModalVisible}
                    onClose={onCloseDetailModal}
                    onEdit={onOpenEditModal}
                    client={clientSelected}
                />
                <EditDetailModal
                    modalVisible={editModalVisible}
                    onClose={onCloseEditModal}
                    client={clientSelected}
                />
            </div>
        </React.Fragment>
    );
};

export default Clients;
