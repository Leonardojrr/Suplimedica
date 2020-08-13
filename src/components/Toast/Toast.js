import React, { useState, useEffect } from "react";
import classes from "./Toast.module.css";

export const Toast = (props) => {
  let { openToast, msg } = props;
  const [toastOpen, setToastOpen] = useState(false);

  useEffect(() => {
    if (openToast) showToast();
  }, [props.showToast]);

  const showToast = () => {
    setToastOpen(true);
    setTimeout(() => {
      setToastOpen(false);
    }, 5000);
  };

  return (
    <React.Fragment>
      <div
        className={classes.ToastContainer}
        style={{ right: toastOpen ? 10 : "-100%" }}
      >
        {msg}
      </div>
    </React.Fragment>
  );
};
