import React, { useState } from "react";
import "./App.css";
import TodoList from "./components/ToDo.js";
import NewItem from "./components/NewItem.js";

function App() {
  let mainList = [
    {
      id: 1,
      title: "Buy groceries",
    },
    {
      id: 2,
      title: "Pay power bill",
    },
    {
      id: 3,
      title: "Take medication",
    },
  ];

  const [stateList, updateList] = useState(mainList);
  const addItemHandler = (data) => {
    updateList((prevList) => {
      return [...prevList, data];
    });
  };

  const removeItemHandler = (data) => {
    updateList((prevList) => {
      return [...prevList.filter((item) => item.id != data)];
    });
  };

  const updateItemHandler = (data) => {
    console.log("hi");
    updateList((prevList) => {
      prevList.forEach((item) => {
        if (item.id == data.id) {
          item.title = data.updateText;
        }
      });
      console.log(prevList);
      return [...prevList]
    });
  };

  return (
    <div className="App">
      <NewItem addItem={addItemHandler} />
      <TodoList todoList={stateList} updateItem={updateItemHandler} removeItem={removeItemHandler} />
    </div>
  );
}

export default App;
