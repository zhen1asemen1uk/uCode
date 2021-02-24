import React from "react";
import ToDoItem from "./ToDoItem";

let ToDoList = ({ toDos }) => {
  return (
    <ul>
      {toDos.map((item) => (
        <ToDoItem key={item.id} {...item} />
      ))}
    </ul>
  );
};
export default ToDoList;
