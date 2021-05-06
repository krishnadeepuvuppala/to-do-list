import React, { useState } from "react";
import "./NewItem.css";

const NewItem = (props) => {
  let [itemName, updateItemName] = useState("");
  let [itemDesc, updateDesc] = useState("");

  const inputChangeHandler = (event) => {
    updateItemName(event.target.value);
  };

  const txtChangeHandler = (event) => {
    updateDesc(event.target.value);
  };

  const addItemHandler = (event) => {
    // event.preventDefault();
    if (!itemName) {
      alert("Title cannot be empty");
      return;
    }

    props.addItem({
      title: itemName,
      id: props.tolist.length + 1,
      desc: itemDesc
    });
    updateItemName("");
    updateDesc("");
  };

  const enterHandler = (event) => {
    if (event.key === 'Enter' || event.keyCode === 13) {
      addItemHandler();
    }
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
        onKeyUp={enterHandler}
      ></input>
      <br></br>
      <br></br>
      <div>
        <labl>Description</labl>
        <textarea value={itemDesc} onChange={txtChangeHandler}></textarea>
      </div>
      <button className="btnAddItem" onClick={addItemHandler}>
        Add item
      </button>
    </div>
  );
};

export default NewItem;
