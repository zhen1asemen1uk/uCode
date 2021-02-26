import React, { useState } from "react";

let ToDoItem = ({ title, id, completed }) => {
  const [checked, setChecked] = useState(completed);

  const cls = ["toDos"];

  if (checked) {
    cls.push("completed");
  }

  return (
    <li className={cls.join(" ")}>
      <span>{title}</span>
      <input
        type="checkbox"
        checked={checked}
        onChange={() => setChecked(!checked)}
      />
    </li>
  );
};
export default ToDoItem;
