import React, { useState, useEffect, useContext } from "react";
import classes from "./Sale.module.css";
import { SearchInput } from "../../../components/SearchInput/SearchInput";
import { AddItemsList } from "./AddItemsList/AddItemsList";
import { DetailItemsList } from "./DetailItemList/DetailItemsList";
import { ClientsList } from "./SelectClient/ClientsList/ClientsList";
import { AddClientModal } from "./AddClientModal/AddClientModal";
import { SessionContext } from "../../../context/SessionContext";
import { LoaderModal } from "../../../components/Loader/Loader";

import { MdArrowBack } from "react-icons/md";
import { Toast } from "../../../components/Toast/Toast";

const Sale = (props) => {
  const sessionContext = useContext(SessionContext);
  const [clientsList, setClientsList] = useState([]);
  const [productsList, setProductsList] = useState([]);
  const [nameValue, setNameValue] = useState("");
  const [codeValue, setCodeValue] = useState("");
  const [clientNameValue, setClientNameValue] = useState("");
  const [clientIdValue, setClientIdValue] = useState("");
  const [itemsSelected, setItemsSelected] = useState([]);
  const [clientSelected, setClientSelected] = useState({});
  const [clientConfirmed, setClientConfirmed] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getClients();
  }, []);

  useEffect(() => {
    if (clientConfirmed) {
      getProducts();
    }
  }, [clientConfirmed]);

  const getClients = async () => {
    setIsLoading(true);
    const res = await fetch("http://localhost:3000/client", {
      method: "GET",
      headers: { "Content-Type": "aplication/json" },
    }).then((resp) => resp.json());
    setIsLoading(false);

    if (res.status === 200) {
      setClientsList(res.data);
    }
  };

  const getProducts = async () => {
    setIsLoading(true);

    const res = await fetch("http://localhost:3000/product/", {
      method: "GET",
      headers: { "Content-Type": "aplication/json" },
    }).then((resp) => resp.json());
    setIsLoading(false);

    setProductsList(res.data.filter((product) => product.cantidad > 0));
  };

  useEffect(() => {
    let total = 0;

    itemsSelected.map((item) => {
      return (total += item.precio * item.selling);
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

  const onAddNewClient = async (newClient) => {
    if (
      clientsList.findIndex((client) => client.ci_persona === newClient.ci) < 0
    ) {
      setIsLoading(true);

      const res = await fetch("http://localhost:3000/client", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...newClient,
        }),
      }).then((resp) => resp.json());
      setIsLoading(false);

      if (res.status === 200) {
        setClientsList([
          ...clientsList,
          {
            nombre_persona: newClient.name,
            direccion_persona: newClient.address,
            ci_persona: newClient.ci,
            numero_persona: newClient.number,
          },
        ]);
      }
    } else {
      alert("Este cliente ya existe!");
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
        { ...itemSelected, selling: 1 },
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
      selling: value,
    };
    setItemsSelected(itemsSelectedCopy);
  };

  const onConfirmSale = async () => {
    if (itemsSelected.filter((producto) => producto.costo <= 0).length > 0) {
      alert("Costo invalido de algun producto");
      return null;
    }
    setIsLoading(true);

    const res = await fetch("http://localhost:3000/operation/sell", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id_persona: clientSelected.id_persona,
        fecha_operacion: new Date().toLocaleString(),
        total_operacion: (totalPrice * 1.16).toFixed(2),
        id_usuario: sessionContext.user.id_usuario,
        productos: [...itemsSelected],
      }),
    }).then((resp) => resp.json());
    setIsLoading(false);

    if (res.status === 200) {
      setItemsSelected([]);
      setClientSelected({});
      setClientConfirmed(false);
      setTotalPrice(0);
      getClients();
      getProducts();
    }
  };

  let saleDetailComponents = null;
  let selectClientComponent = null;
  let clientDetails = null;

  if (clientSelected.nombre_persona) {
    clientDetails = (
      <div className={classes.ClientContent}>
        <div className={classes.ClientDataContainer}>
          <div className={classes.ClientData}>
            <div className={classes.ClientFieldDetail} style={{ fontSize: 40 }}>
              {clientSelected.nombre_persona}
            </div>
            <div className={classes.ClientFieldDetail}>
              {clientSelected.ci_persona.toLowerCase().startsWith("j")
                ? "RIF: " + clientSelected.ci_persona
                : "CI: " + clientSelected.ci_persona}
            </div>
            <div className={classes.ClientFieldDetail}>
              {clientSelected.direccion_persona
                ? "direccion: " + clientSelected.direccion_persona
                : null}
            </div>
            <div className={classes.ClientFieldDetail}>
              {clientSelected.numero_persona
                ? "numero: " + clientSelected.numero_persona
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
            <div className={classes.LeftTitle}>Seleccione algun cliente</div>
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

  if (clientConfirmed && clientSelected.nombre_persona) {
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
                      {clientSelected.nombre_persona}
                    </span>
                  </div>
                  <div>
                    {clientSelected.ci_persona.startsWith("J")
                      ? "RIF: "
                      : "CI: "}
                    <span style={{ fontWeight: 100 }}>
                      {clientSelected.ci_persona}
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
    setClientSelected({});
  };

  if (clientConfirmed) {
    goBack = (
      <div className={classes.BackButtonContainer} onClick={goToSelectClient}>
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
      <LoaderModal visible={isLoading} />
      {/* <Toast openToast={true} msg={"Hello world"} /> */}
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
