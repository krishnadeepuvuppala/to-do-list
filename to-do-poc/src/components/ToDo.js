import React, { useState } from "react";
import Modal from './Modal.js'
import "./ToDo.css";

const TodoList = (props) => {
  const deleteItem = (event) => {
    event.preventDefault();
    if (window.confirm('Are you sure you want to delete?')) {
      props.removeItem(event.target.id);
    }

  };
  let [modalToggle, setModalToggle] = useState(false);
  const [currentEditActive, updateActiveEdit] = useState(0);
  const modalHandler = (data) => {
    console.log(currentEditActive);
    if (data.type === "submit") {
      console.log("inside todo");
      console.log({
        ...data, id: currentEditActive
      });
      props.updateItem({
        ...data, id: currentEditActive
      });
      updateActiveEdit(0);
    }
    setModalToggle(false);
  }

  const editItem = (event) => {
    event.preventDefault();
    setModalToggle(true);
    updateActiveEdit((event.target.id).split("-")[1]);
  };
  let returnList = <div style={{ color: "white" }}>Nothing here</div>;

  if (props.todoList.length > 0) {
    returnList = props.todoList.map((item) => {
      return (
        <div key={item.id} className="itemDiv">
          <span>{item.title}</span>
          <div style={{ float: "right" }}>
            <button className="delBtn" style={{ float: "left" }} id={"edit-" + item.id} onClick={editItem}>
              Edit
          </button>
            <button className="delBtn" id={item.id} onClick={deleteItem}>
              Delete
          </button></div>

        </div>

      );
    });
  }

  return (
    <div>
      <div className="listRootDiv">{returnList}</div>
      <Modal enable={modalToggle} modalActions={modalHandler} />
    </div>);
};

export default TodoList;
