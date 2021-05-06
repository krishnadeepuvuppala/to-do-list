import React, { useState } from "react";
import "./App.css";
import TodoList from "./components/ToDo.js";
import NewItem from "./components/NewItem.js";

function App() {
  let mainList = [
    {
      id: 1,
      title: "Buy groceries",
      desc: "hello"
    },
    {
      id: 2,
      title: "Pay power bill",
      desc: "hello"
    },
    {
      id: 3,
      title: "Take medication",
      desc: "hello"
    },
    {
      id: 4,
      title: "Take medication",
      desc: "hello"
    },
    {
      id: 5,
      title: "Take medication",
      desc: "hello"
    },
    {
      id: 6,
      title: "Take medication",
      desc: "hello"
    },
    {
      id: 7,
      title: "Take medication",
      desc: "hello"
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
    updateList((prevList) => {
      prevList.forEach((item) => {
        if (item.id == data.id) {
          item.title = data.updateText;
          item.desc = data.desc;
        }
      });
      console.log(prevList);
      return [...prevList]
    });
  };

  return (
    <div className="App">
      <NewItem addItem={addItemHandler} tolist={stateList} />
      <TodoList todoList={stateList} updateItem={updateItemHandler} removeItem={removeItemHandler} />
    </div>
  );
}

export default App;
