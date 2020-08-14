import React, { useState, useEffect } from "react";
import classes from "./Providers.module.css";

import { SearchInput } from "../../../components/SearchInput/SearchInput";
import { Header } from "../../../components/Header/Header";
import { ProvidersList } from "./ProvidersList/ProvidersList";
import { DropableSearchHeader } from "../../../components/DropableSearchHeader/DropableSearchHeader";
import { AddProviderModal } from "./ProvidersList/AddProviderModal/AddProviderModal";
import { DetailModal } from "./ProvidersList/DetailModal/DetailModal";
import { EditDetailModal } from "./ProvidersList/EditDetailModal/EditDetailModal";
import { AddIcon } from "../../../components/Icons/AddIcon/AddIcon";
import { LoaderModal } from "../../../components/Loader/Loader";

const Providers = (props) => {
  const [providersList, setProvidersList] = useState([]);

  const [searchBarVisible, setSearchBarVisible] = useState(false);
  const [addProviderModalVisible, setAddProviderModalVisible] = useState(false);
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [detailModalVisible, setDetailModalVisible] = useState(false);
  const [providerSelected, setProviderSelected] = useState({});
  const [nameValue, setProviderNameValue] = useState("");
  const [idValue, setProviderIdValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getProviders();
  }, []);

  useEffect(() => {
    let provider = providersList.filter(
      (provider) => provider.id_persona == providerSelected.id_persona
    );
    console.log(provider);
    setProviderSelected(provider);
  }, [providersList]);

  const getProviders = async () => {
    setIsLoading(true);
    let res = await fetch("http://localhost:3000/provider", {
      method: "GET",
      headers: { "Content-Type": "aplication/json" },
    }).then((resp) => resp.json());
    setIsLoading(false);

    setProvidersList(res);
  };

  const updateList = () => {
    getProviders();
  };

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
            onToggle={() => setSearchBarVisible((actualValue) => !actualValue)}
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
          updateList={updateList}
          onCloseModal={onCloseAddProviderModal}
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
          updateList={updateList}
          provider={providerSelected}
        />
        <LoaderModal visible={isLoading} />
      </div>
    </React.Fragment>
  );
};

export default Providers;
