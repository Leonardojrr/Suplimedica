import React, { Fragment } from "react";
import "./InventoryList.css";

function InventoryList(props) {
  let inventory = ["a", "b", "c", "d", "e", "f", "g", "r"];

  function spliceDataInGroupsOfThree(data) {
    let newArray = [];
    while (data.length > 0) newArray.push(data.splice(0, 3));
    return newArray;
  }

  function createFragmentList() {
    for (const group of spliceDataInGroupsOfThree(inventory)) {
    }
  }

  return <Fragment></Fragment>;
}

export default InventoryList;
