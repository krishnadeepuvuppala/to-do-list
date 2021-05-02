import React, { useState } from "react";
import "./NewItem.css";

const NewItem = (props) => {
  let [itemName, updateItemName] = useState("");

  const inputChangeHandler = (event) => {
    updateItemName(event.target.value);
  };

  const addItemHandler = (event) => {
    event.preventDefault();
    if (!itemName) {
      alert("Title cannot be empty");
      return;
    }

    props.addItem({
      title: itemName,
      id: Math.random(),
    });
    updateItemName("");
  };

  return (
    <div className="rootDiv">
      <h4>Add new Iitem to the list</h4>
      <input
        type="text"
        value={itemName}
        placeholder="Enter item title"
        className="inptClass"
        onChange={inputChangeHandler}
      ></input>
      <button className="btnAddItem" onClick={addItemHandler}>
        Add item
      </button>
    </div>
  );
};

export default NewItem;
