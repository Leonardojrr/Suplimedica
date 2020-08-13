import React from "react";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import classes from "./Loader.module.css";

export const LoaderModal = (props) => {
  return (
    <div className={classes.LoaderModal}>
      <div className={classes.Backdrop}>
        <div className={classes.LoaderContainer}>
          <Loader type="Grid" color={"#0f52ab"} visible={props.visible} />
        </div>
      </div>
    </div>
  );
};
