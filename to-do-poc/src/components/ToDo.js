import React from "react";
import "./ToDo.css";

const TodoList = (props) => {
  const deleteItem = (event) => {
    event.preventDefault();
    props.removeItem(event.target.id);
  };
  let returnList = <div style={{ color: "white" }}>Nothing here</div>;

  if (props.todoList.length > 0) {
    returnList = props.todoList.map((item) => {
      return (
        <div key={item.id} className="itemDiv">
          <span>{item.title}</span>
          <button className="delBtn" id={item.id} onClick={deleteItem}>
            Delete Item
          </button>
        </div>
      );
    });
  }

  return <div className="listRootDiv">{returnList}</div>;
};

export default TodoList;
