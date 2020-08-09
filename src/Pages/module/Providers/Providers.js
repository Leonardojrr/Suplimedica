import React, { useState } from "react";
import classes from "./Providers.module.css";

import { SearchInput } from "../../../components/SearchInput/SearchInput";
import { Header } from "../../../components/Header/Header";
import { ProvidersList } from "./ProvidersList/ProvidersList";
import { DropableSearchHeader } from "../../../components/DropableSearchHeader/DropableSearchHeader";
import { AddProviderModal } from "./ProvidersList/AddProviderModal/AddProviderModal";
import { DetailModal } from "./ProvidersList/DetailModal/DetailModal";
import { EditDetailModal } from "./ProvidersList/EditDetailModal/EditDetailModal";
import { AddIcon } from "../../../components/Icons/AddIcon/AddIcon";

const Providers = (props) => {
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

    const [searchBarVisible, setSearchBarVisible] = useState(false);

    const [addProviderModalVisible, setAddProviderModalVisible] = useState(
        false
    );
    const [editModalVisible, setEditModalVisible] = useState(false);
    const [detailModalVisible, setDetailModalVisible] = useState(false);
    const [providerSelected, setProviderSelected] = useState({});
    const [nameValue, setProviderNameValue] = useState("");
    const [idValue, setProviderIdValue] = useState("");

    const onOpenAddProviderModal = () => {
        setAddProviderModalVisible(true);
    };

    const onCloseAddProviderModal = () => {
        setAddProviderModalVisible(false);
    };

    const onOpenDetailModal = (provider) => {
        setProviderSelected(provider);
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
                    <Header title={"Proveedores"} />
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
                                label={"Identificacion"}
                                onChange={(value) => {
                                    onFilterProviderId(value);
                                }}
                            />
                        </div>
                    </DropableSearchHeader>
                    <div className={classes.IconsContainer}>
                        <AddIcon onClick={onOpenAddProviderModal} />
                    </div>
                </div>

                <div
                    className={classes.ContentContainer}
                    style={{
                        maxHeight: searchBarVisible ? "70%" : "75%",
                        marginTop: searchBarVisible ? 85 : 0,
                    }}
                >
                    <ProvidersList
                        providers={providersList}
                        nameValue={nameValue}
                        idValue={idValue}
                        onViewDetails={onOpenDetailModal}
                    />
                </div>
                <AddProviderModal
                    modalVisible={addProviderModalVisible}
                    onCloseModal={onCloseAddProviderModal}
                    onAddNewProvider={(provider) => console.log(provider)}
                />
                <DetailModal
                    modalVisible={detailModalVisible}
                    onClose={onCloseDetailModal}
                    onEdit={onOpenEditModal}
                    provider={providerSelected}
                />
                <EditDetailModal
                    modalVisible={editModalVisible}
                    onClose={onCloseEditModal}
                    provider={providerSelected}
                />
            </div>
        </React.Fragment>
    );
};

export default Providers;
