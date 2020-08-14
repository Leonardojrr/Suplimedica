import React, { useState, useEffect } from "react";

import classes from "./AddProductModal.module.css";

import { ExitIcon } from "../../../../components/Icons/ExitIcon/ExitIcon";
import { LoaderModal } from "../../../../components/Loader/Loader";

import { Input } from "../../../../Util/Input/Input";
import { SearchInput } from "../../../../components/SearchInput/SearchInput";

export const AddProductModal = (props) => {
  let { modalVisible, onCloseModal, onAddNewProduct } = props;
  const [productSelected, setProductSelected] = useState({});
  const [products, setProducts] = useState([]);
  const [providerProducts, setProviderProducts] = useState([]);
  const [productNameValue, setProductNameValue] = useState("");
  const [productCodeValue, setProductCodeValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    setProviderProducts(props.providerProducts);
  }, [props.providerProducts]);

  const getProducts = async () => {
    setIsLoading(true);

    const res = await fetch("http://localhost:3000/product", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((resp) => resp.json());
    setIsLoading(true);

    setProducts(res.data.filter((product) => product.cantidad > 0));

    return null;
  };

  let productsId = providerProducts.map((product) => product.id_producto);
  let notAddedProducts = products.filter((product) => {
    return !productsId.includes(product.id_producto);
  });

  const onFilterByProductName = (name) => {
    setProductNameValue(name);
  };

  const onFilterProductCode = (code) => {
    setProductCodeValue(code);
  };

  const onCancelHandler = () => {
    setProductNameValue("");
    setProductCodeValue("");
    onCloseModal();
  };
  let productsList = [];

  const onSelectProduct = (product) => {
    setProductSelected(product);
  };

  if (notAddedProducts) {
    notAddedProducts.map((product) => {
      if (
        product.nombre.toLowerCase().includes(productNameValue.toLowerCase()) &&
        product.codigo
          .toString()
          .includes(productCodeValue.toLowerCase().replace(/[\.\-\s]+/g, ""))
      ) {
        return productsList.push(
          <div
            key={product.codigo}
            onClick={() => onSelectProduct(product)}
            className={`${
              productSelected.id_producto != product.id_producto
                ? classes.Product
                : classes.ProductSelected
            }`}
          >
            <div>{product.nombre}</div>
            <div>{product.codigo}</div>
          </div>
        );
      }
      return null;
    });
  }

  return (
    <div
      className={classes.ModalContainer}
      style={{ display: modalVisible ? "block" : "none" }}
    >
      <div className={classes.Backdrop} onClick={onCloseModal}></div>
      <div className={classes.Modal}>
        <div className={classes.Header}>
          <div className={classes.Title}>Añadir a un nuevo cliente</div>
          <div className={classes.IconsContainer}>
            <ExitIcon onClick={onCloseModal} />
          </div>
        </div>
        <div className={classes.SearchBar}>
          <div className={classes.Input}>
            <SearchInput
              inputStyle={{ height: 20 }}
              label={"Nombre"}
              onChange={(value) => {
                onFilterByProductName(value);
              }}
            />
          </div>
          <div className={classes.Input}>
            <SearchInput
              inputStyle={{ height: 20 }}
              label={"Código"}
              onChange={(value) => {
                onFilterProductCode(value);
              }}
            />
          </div>
        </div>
        <div className={classes.ContentContainer}>{productsList}</div>
        <div className={classes.BottomContainer}>
          <div className={classes.CancelButton} onClick={onCancelHandler}>
            Cancelar
          </div>
          <div
            className={classes.AcceptButton}
            onClick={() => onAddNewProduct(productSelected)}
          >
            Añadir
          </div>
        </div>
      </div>
      <LoaderModal visible={isLoading} />
    </div>
  );
};
