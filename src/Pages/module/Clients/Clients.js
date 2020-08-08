import React, { useState } from "react";
import classes from "./Clients.module.css";

import { MdAdd } from "react-icons/md";
import { SearchInput } from "../../../components/SearchInput/SearchInput";
import { Header } from "../../../components/Header/Header";
import { ClientsList } from "./ClientsList/ClientsList";
import { DropableSearchHeader } from "../../../components/DropableSearchHeader/DropableSearchHeader";

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
      nombre: "Carlos Suarez",
      ci: "V. 25.234.567",
      direccion: "tierra negra",
      numero: "04242108555",
    },
    {
      nombre: "Suplimedica",
      ci: "J. 78.945.612-3",
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
      ci: "V. 82.030.643",
      direccion: "tierra negra",
      numero: "04242108555",
    },
  ]);

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
          <Header title={"Clientes"} />
          <DropableSearchHeader>
            <div className={classes.Input}>
              <SearchInput
                // style={{ height: 20 }}
                inputStyle={{ height: 20 }}
                label={"Nombre"}
                onChange={(value) => {
                  onFilterByItemName(value);
                }}
              />
            </div>
            <div className={classes.Input}>
              <SearchInput
                // style={{ width: 30 }}
                inputStyle={{ height: 20 }}
                label={"Código"}
                onChange={(value) => {
                  onFilterItemCode(value);
                }}
              />
            </div>
          </DropableSearchHeader>
        </div>

        {/* <div
          className={classes.ContentContainer}
          style={{
            height: searchBarVisible ? 600 : 700,
            marginTop: searchBarVisible ? 85 : 0,
          }}
        >
          <ClientsList
            clients={clientsList}
            // onViewDetails={onViewDetails}
            // onCloseModal={onCloseModal}
            nameValue={""}
            codeValue={""}
          />
        </div> */}
      </div>
    </React.Fragment>
  );
};

export default Clients;
