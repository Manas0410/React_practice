import React, { useState } from "react";
import TodoChild from "./TodoChild";

const TodoParent = () => {
  const [todo, settodo] = useState([]);
  const [task, setTask] = useState("");
  const addTodo = () => {
    settodo((prevState) => [...prevState, task]);
    setTask("");
  };

  return (
    <div>
      <input
        type="text"
        value={task}
        onChange={(ev) => setTask(ev.target.value)}
      />
      <button onClick={addTodo}>add</button>
      <TodoChild list={todo} />
    </div>
  );
};

export default TodoParent;
// aadd save all task in list one more button -> show list or rendr arrraya
// add click -> append task in render & todo empty
