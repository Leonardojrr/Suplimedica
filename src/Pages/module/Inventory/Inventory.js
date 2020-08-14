import React, { Fragment, useState, useEffect } from "react";
import { InventoryList } from "./InventoryList/InventoryList";

import { AiOutlineArrowDown } from "react-icons/ai";
import { AiOutlineArrowUp } from "react-icons/ai";

import classes from "./Inventory.module.css";
import { DetailModal } from "./InventoryList/DetailModal/DetailModal";
import { SearchInput } from "../../../components/SearchInput/SearchInput";
import { DropableSearchHeader } from "../../../components/DropableSearchHeader/DropableSearchHeader";
import { Header } from "../../../components/Header/Header";
import { LoaderModal } from "../../../components/Loader/Loader";

const Inventory = (props) => {
  const [items, setItems] = useState([]);

  const [searchBarVisible, setSearchBarVisible] = useState(false);

  const [modalVisible, setModalVisible] = useState(false);
  const [itemSelected, setItemSelected] = useState({});
  const [nameValue, setItemNameValue] = useState("");
  const [codeValue, setItemCodeValue] = useState("");
  const [productProviders, setProductProviders] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    setIsLoading(true);
    const res = await fetch("http://localhost:3000/product", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((resp) => resp.json());
    setIsLoading(false);
    setItems(res.data);
  };

  const onViewDetails = async (item) => {
    setIsLoading(true);
    const res = await fetch(
      "http://localhost:3000/product/" + item.id_producto,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((resp) => resp.json());
    setIsLoading(false);
    setProductProviders(res.data);
    setItemSelected(item);
    setModalVisible(true);
  };

  const onCloseModal = () => {
    setItemSelected({});
    setModalVisible(false);
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
          <Header title={"Inventario"} />
          <DropableSearchHeader
            searchBarVisible={searchBarVisible}
            onToggle={() => setSearchBarVisible((actualValue) => !actualValue)}
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
        </div>
        <div
          className={classes.ContentContainer}
          style={{
            maxHeight: searchBarVisible ? "70%" : "75%",
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
          productProviders={productProviders}
          item={itemSelected}
        />
      </div>
      <LoaderModal visible={isLoading} />
    </React.Fragment>
  );
};

export default Inventory;
