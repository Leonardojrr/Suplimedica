import React, { useState, useEffect } from "react";
import classes from "./Clients.module.css";

import { SearchInput } from "../../../components/SearchInput/SearchInput";
import { Header } from "../../../components/Header/Header";
import { ClientsList } from "./ClientsList/ClientsList";
import { DropableSearchHeader } from "../../../components/DropableSearchHeader/DropableSearchHeader";
import { AddClientModal } from "./ClientsList/AddClientModal/AddClientModal";
import { DetailModal } from "./ClientsList/DetailModal/DetailModal";
import { EditDetailModal } from "./ClientsList/EditDetailModal/EditDetailModal";
import { AddIcon } from "../../../components/Icons/AddIcon/AddIcon";
import { LoaderModal } from "../../../components/Loader/Loader";

const Clients = (props) => {
  const [clientsList, setClientsList] = useState([]);

  const [searchBarVisible, setSearchBarVisible] = useState(false);
  const [addClientModalVisible, setAddClientModalVisible] = useState(false);
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [detailModalVisible, setDetailModalVisible] = useState(false);
  const [clientSelected, setClientSelected] = useState({});
  const [nameValue, setClientNameValue] = useState("");
  const [idValue, setClientIdValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getClients();
  }, []);

  useEffect(() => {
    let client = clientsList.filter(
      (client) => client.id_persona == clientSelected.id_persona
    );
    console.log(client);
    setClientSelected(client);
  }, [clientsList]);

  const getClients = async () => {
    setIsLoading(true);
    let res = await fetch("http://localhost:3000/client", {
      method: "GET",
      headers: { "Content-Type": "aplication/json" },
    }).then((resp) => resp.json());
    setIsLoading(false);
    if (res.status === 200) {
      setClientsList(res.data);
    }
  };

  const updateList = () => {
    getClients();
  };

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
  };

  const onFilterByClientName = (name) => {
    setClientNameValue(name);
  };

  const onFilterClientId = (code) => {
    setClientIdValue(code);
  };

  return (
    <React.Fragment>
      <div className={classes.Container}>
        <div className={classes.HeaderContainer}>
          <Header title={"Clientes"} />
          <DropableSearchHeader
            searchBarVisible={searchBarVisible}
            onToggle={() => setSearchBarVisible((actualValue) => !actualValue)}
          >
            <div className={classes.Input}>
              <SearchInput
                inputStyle={{ height: 20 }}
                label={"Nombre"}
                onChange={(value) => {
                  onFilterByClientName(value);
                }}
              />
            </div>
            <div className={classes.Input}>
              <SearchInput
                inputStyle={{ height: 20 }}
                label={"Identificacion"}
                onChange={(value) => {
                  onFilterClientId(value);
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
            maxHeight: searchBarVisible ? "70%" : "75%",
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
          updateList={updateList}
          onCloseModal={onCloseAddClientModal}
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
          updateList={updateList}
          client={clientSelected}
        />
        <LoaderModal visible={isLoading} />
      </div>
    </React.Fragment>
  );
};

export default Clients;
