import React, { useState } from "react";
import Modal from './Modal.js'
import "./ToDo.css";

const TodoList = (props) => {
  const deleteItem = (event) => {
    event.preventDefault();
    if (window.confirm('Are you sure you want to delete?')) {
      props.removeItem(event.target.id);
    }
    //setPageList(props.todoList.slice((currentPage - 1) * 5, (currentPage * 5)));
  };
  let [modalToggle, setModalToggle] = useState(false);
  const [currentPage, updateCurrentPage] = useState(1);
  const [currentEditActive, updateActiveEdit] = useState(0);
  //const [currentEditableItem, setCurrentEditableItem] = useState("");
  const modalHandler = (data) => {
    if (data.type === "submit") {
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
    // setCurrentEditableItem(props.todoList.filter((item)=>{
    //   if (item.id == (event.target.id).split("-")[1]) {

    //   }
    // }))
  };
  /*const [modifiedList, setPageList] = useState(props.todoList.slice(0, 5));*/
  const pgnHandler = (event) => {
    updateCurrentPage(event.target.innerHTML);
    /*setPageList(props.todoList.slice((currentPage - 1) * 5, (currentPage * 5)))*/
  }
  let returnList = <div style>Nothing here</div>;

  if (props.todoList.length > 0) {
    /*returnList = props.todoList.map((item) => {
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
    });*/

    returnList = props.todoList.slice((currentPage - 1) * 5, (currentPage * 5)).map((item) => {
      return (
        <tr key={item.id} className="itemDiv">
          <td>{item.id}</td>
          <td>{item.title}</td>
          <td>{item.desc}</td>
          <td style={{ float: "right" }}>
            <button className="delBtn" style={{ float: "left" }} id={"edit-" + item.id} onClick={editItem}>
              Edit
          </button>
            <button className="delBtn" id={item.id} onClick={deleteItem}>
              Delete
          </button></td>

        </tr>

      );
    });
  }

  return (
    <div>
      {/* <div className="listRootDiv">{returnList}</div> */}
      <div className="listRootDiv"><table>
        <tr>
          <th>Serial Number</th>
          <th>Title</th>
          <th>Description</th>
          <th style={{ width: "30%" }}>Actions</th>
        </tr>
        {returnList}
      </table>
        {props.todoList.length > 5 ? (<div className="pagination">
          {Array.from(Array(props.todoList.length % 5 === 0 ? Math.floor(props.todoList.length / 5) : Math.floor(props.todoList.length / 5) + 1), (e, i) => {
            return <button onClick={pgnHandler} key={i}>{i + 1}</button>
          })}
        </div>) : ""}
      </div>


      <Modal enable={modalToggle} modalActions={modalHandler} />
    </div>);
};

export default TodoList;
