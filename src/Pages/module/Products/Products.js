import React, { Fragment, useState, useEffect } from "react";
import { InventoryList } from "./InventoryList/InventoryList";
import { AddNewProduct } from "./InventoryList/AddNewProduct/AddNewProduct";

import classes from "./Products.module.css";
import { DetailModal } from "./InventoryList/DetailModal/DetailModal";
import { EditDetailModal } from "./InventoryList/EditDetailModal/EditDetailModal";
import { SearchInput } from "../../../components/SearchInput/SearchInput";
import { DropableSearchHeader } from "../../../components/DropableSearchHeader/DropableSearchHeader";
import { Header } from "../../../components/Header/Header";
import { AddIcon } from "../../../components/Icons/AddIcon/AddIcon";
import { LoaderModal } from "../../../components/Loader/Loader";

const Products = (props) => {
  const [items, setItems] = useState([]);
  const [productProviders, setProductProviders] = useState([]);
  const [searchBarVisible, setSearchBarVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [addModalVisible, setAddModalVisible] = useState(false);
  const [itemSelected, setItemSelected] = useState({});
  const [nameValue, setItemNameValue] = useState("");
  const [codeValue, setItemCodeValue] = useState("");
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

  const onCloseAddModalVisible = () => {
    setAddModalVisible(false);
  };

  const onOpenAddNewProduct = () => {
    setAddModalVisible(true);
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

  const onAddNewProduct = () => {
    setAddModalVisible(false);
  };

  return (
    <React.Fragment>
      <div className={classes.Container}>
        <div className={classes.HeaderContainer}>
          <Header title={"Productos internos"} />
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
          <div className={classes.IconsContainer}>
            <AddIcon onClick={onOpenAddNewProduct} />
          </div>
        </div>
        <div
          className={classes.ContentContainer}
          style={{
            height: searchBarVisible ? "70%" : "75%",
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
          productProviders={productProviders}
          item={itemSelected}
        />

        <EditDetailModal
          modalVisible={editModalVisible}
          onClose={onCloseEditModal}
          updateList={getProducts}
          item={itemSelected}
        />
        <AddNewProduct
          updateList={getProducts}
          onClose={onCloseAddModalVisible}
          modalVisible={addModalVisible}
          onAddProduct={onAddNewProduct}
        />
        <LoaderModal visible={isLoading} />
      </div>
    </React.Fragment>
  );
};

export default Products;
