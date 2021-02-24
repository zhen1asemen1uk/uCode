// import React from "react";
import { useState } from "react";
import "./App.css";
import ToDoList from "./ToDoList";

let App = () => {
  const [toDos, setToDos] = useState([
    { id: 1, title: "First todo", completed: false },
    { id: 2, title: "Second todo", completed: true },
  ]);
  const [toDoTitle, setToDoTitle] = useState("");

  let addTask = () => {
    setToDos([
      ...toDos,
      { id: Date.now(), title: toDoTitle, completed: false },
    ]);
    setToDoTitle([]);
  };

  return (
    <div className="App">
      <span>uCoder To-Do List</span>
      <br></br>
      <input
        value={toDoTitle}
        onChange={(event) => setToDoTitle(event.target.value)}
        autoFocus
        className="inp"
        type="text"
        placeholder="add new item"
      />
      <button className="btn" type="button" onClick={addTask}>
        &crarr;
      </button>
      <br></br>
      <div className="out">
        <ToDoList toDos={toDos} />
      </div>
    </div>
  );
};

export default App;
