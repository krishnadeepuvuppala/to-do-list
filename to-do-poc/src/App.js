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

  return (
    <div className="App">
      <NewItem addItem={addItemHandler} />
      <TodoList todoList={stateList} removeItem={removeItemHandler} />
    </div>
  );
}

export default App;
