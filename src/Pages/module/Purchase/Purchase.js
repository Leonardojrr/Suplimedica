import React, { useState, useEffect, useContext } from "react";
import classes from "./Purchase.module.css";
import { SearchInput } from "../../../components/SearchInput/SearchInput";
import { AddItemsList } from "./AddItemsList/AddItemsList";
import { DetailItemsList } from "./DetailItemList/DetailItemsList";
import { ProvidersList } from "./SelectProvider/ProvidersList/ProvidersList";
import { AddProviderModal } from "./AddProviderModal/AddProviderModal";
import { SessionContext } from "../../../context/SessionContext";
import { LoaderModal } from "../../../components/Loader/Loader";

import { MdArrowBack } from "react-icons/md";
import { AddProductModal } from "./AddProductModal/AddProductModal";

const Purchase = (props) => {
  const sessionContext = useContext(SessionContext);
  const [providersList, setProvidersList] = useState([]);
  const [productsList, setProductsList] = useState([]);
  const [nameValue, setNameValue] = useState("");
  const [codeValue, setCodeValue] = useState("");
  const [providerNameValue, setProviderNameValue] = useState("");
  const [providerIdValue, setProviderIdValue] = useState("");
  const [itemsSelected, setItemsSelected] = useState([]);
  const [providerSelected, setProviderSelected] = useState({});
  const [providerConfirmed, setProviderConfirmed] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [addProductModalVisible, setAddProductModalVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getProviders();
  }, []);

  useEffect(() => {
    if (providerConfirmed) {
      getProducts(providerSelected.id_persona);
    }
  }, [providerConfirmed]);

  const getProviders = async () => {
    setIsLoading(true);

    const res = await fetch("http://localhost:3000/provider", {
      method: "GET",
      headers: { "Content-Type": "aplication/json" },
    }).then((resp) => resp.json());
    setIsLoading(false);

    setProvidersList(res);
  };

  const getProducts = async (id) => {
    if (id) {
      setIsLoading(true);

      const res = await fetch("http://localhost:3000/provider/product/" + id, {
        method: "GET",
        headers: { "Content-Type": "aplication/json" },
      }).then((resp) => resp.json());
      setIsLoading(false);

      setProductsList(res);
    }
  };

  useEffect(() => {
    let total = 0;

    itemsSelected.map((item) => {
      return (total += item.costo * item.buying);
    });

    setTotalPrice(total.toFixed(2));
  }, [itemsSelected]);

  const onOpenAddProviderModal = () => {
    setModalIsOpen(true);
  };

  const onCloseAddProviderModal = () => {
    setModalIsOpen(false);
  };

  const onOpenAddProductModal = () => {
    setAddProductModalVisible(true);
  };

  const onCloseAddProductModal = () => {
    setAddProductModalVisible(false);
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

  const onAddNewProvider = async (newProvider) => {
    if (
      providersList.findIndex(
        (provider) => provider.ci_persona === newProvider.ci
      ) < 0
    ) {
      setIsLoading(true);

      const res = await fetch("http://localhost:3000/provider", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...newProvider,
        }),
      }).then((resp) => resp.json());
      setIsLoading(false);

      if (res.status === 200) {
        setProvidersList([
          ...providersList,
          {
            nombre_persona: newProvider.name,
            direccion_persona: newProvider.address,
            ci_persona: newProvider.ci,
            numero_persona: newProvider.number,
          },
        ]);
      }
    } else {
      alert("Este proveedor ya existe!");
    }
  };

  const addProductToProvider = async (product) => {
    setIsLoading(true);

    const res = await fetch("http://localhost:3000/provider/product", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id_provider: providerSelected.id_persona,
        id_product: product.id_producto,
      }),
    }).then((resp) => resp.json());
    setIsLoading(false);

    if (res.status === 200) {
      setProductsList([...productsList, product]);
    }
  };

  const onAddItem = (itemSelected) => {
    if (
      itemsSelected.findIndex(
        (item) => item.id_producto === itemSelected.id_producto
      ) < 0
    ) {
      setItemsSelected((prevItems) => [
        ...prevItems,
        { ...itemSelected, buying: 1, costo: 0 },
      ]);
    }
  };

  const onRemoveItem = (itemId) => {
    let newitemsArray = itemsSelected.filter(
      (item) => item.id_producto !== itemId
    );
    setItemsSelected([...newitemsArray]);
  };

  const onChangeItem = (id, value) => {
    let itemsSelectedCopy = [...itemsSelected];
    let itemIndex = itemsSelected.findIndex((item) => item.id_producto === id);
    const copy = Object.assign({}, itemsSelected[itemIndex]);
    itemsSelectedCopy[itemIndex] = {
      ...copy,
      buying: value,
    };
    setItemsSelected(itemsSelectedCopy);
  };

  const onChangeItemCost = (id, costo) => {
    let itemsSelectedCopy = [...itemsSelected];
    let itemIndex = itemsSelected.findIndex((item) => item.id_producto === id);
    const copy = Object.assign({}, itemsSelected[itemIndex]);
    itemsSelectedCopy[itemIndex] = {
      ...copy,
      costo: costo,
    };
    setItemsSelected(itemsSelectedCopy);
  };

  const onConfirmSale = async () => {
    if (itemsSelected.filter((producto) => producto.costo <= 0).length > 0) {
      alert("Costo invalido de algun producto");
      return null;
    }
    setIsLoading(true);

    const res = await fetch("http://localhost:3000/operation/buy", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id_persona: providerSelected.id_persona,
        fecha_operacion: new Date().toLocaleString(),
        total_operacion: (totalPrice * 1.16).toFixed(2),
        id_usuario: sessionContext.user.id_usuario,
        productos: [...itemsSelected],
      }),
    }).then((resp) => resp.json());
    setIsLoading(false);

    if (res.status === 200) {
      setItemsSelected([]);
      setProviderSelected({});
      setProviderConfirmed(false);
      setTotalPrice(0);
      getProviders();
      getProducts();
    }
  };

  let saleDetailComponents = null;
  let selectProviderComponent = null;
  let providerDetails = null;

  if (providerSelected.nombre_persona) {
    providerDetails = (
      <div className={classes.ProviderContent}>
        <div className={classes.ProviderDataContainer}>
          <div className={classes.ProviderData}>
            <div
              className={classes.ProviderFieldDetail}
              style={{ fontSize: 40 }}
            >
              {providerSelected.nombre_persona}
            </div>
            <div className={classes.ProviderFieldDetail}>
              {providerSelected.ci_persona.toLowerCase().startsWith("j")
                ? "RIF: " + providerSelected.ci_persona
                : "CI: " + providerSelected.ci_persona}
            </div>
            <div className={classes.ProviderFieldDetail}>
              {providerSelected.direccion_persona
                ? "direccion: " + providerSelected.direccion_persona
                : null}
            </div>
            <div className={classes.ProviderFieldDetail}>
              {providerSelected.numero_persona
                ? "numero: " + providerSelected.numero_persona
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
            <div className={classes.LeftTitle}>Seleccione algun proveedor</div>
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
          <div className={classes.RightTitle}>datos del proveedor</div>
          <div className={classes.BreakLineContainer}>
            <div className={classes.BreakLine} />
          </div>
          {providerDetails}
        </div>
      </div>
    );
  }

  if (providerConfirmed && providerSelected.nombre_persona) {
    saleDetailComponents = (
      <div className={classes.Content}>
        <div className={classes.LeftContainer}>
          <div className={classes.LeftContent}>
            <div className={classes.LeftTitle}>Búsqueda de productos</div>
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
                items={productsList}
              />
              <div
                className={classes.AddProduct}
                onClick={onOpenAddProductModal}
              >
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
                  onChangeCost={onChangeItemCost}
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
                      {providerSelected.nombre_persona}
                    </span>
                  </div>
                  <div>
                    {providerSelected.ci_persona.startsWith("J")
                      ? "RIF: "
                      : "CI: "}
                    <span style={{ fontWeight: 100 }}>
                      {providerSelected.ci_persona}
                    </span>
                  </div>
                  <div>
                    Fecha: <span style={{ fontWeight: 100 }}>{saleDate}</span>
                  </div>
                </div>
                <div className={classes.DetailSaleTotal}>
                  <div>
                    Total: $
                    <span style={{ fontWeight: 100 }}>{totalPrice}</span>
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
    setProviderSelected({});
  };

  if (providerConfirmed) {
    goBack = (
      <div className={classes.BackButtonContainer} onClick={goToSelectProvider}>
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
      <AddProductModal
        providerProducts={productsList}
        onAddNewProduct={addProductToProvider}
        modalVisible={addProductModalVisible}
        onCloseModal={onCloseAddProductModal}
      />
      <LoaderModal visible={isLoading} />
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
