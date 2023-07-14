import { useState } from "react";
import Child from "./inputFChild";

const Task = () => {
  const [input, setInput] = useState(0);
  const [children, setChildren] = useState(false);
  return (
    <>
      <input
        type="number"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={() => setChildren(!children)}>Add Inputs feild</button>
      {children && <Child data={input} />}
    </>
  );
};

export default Task;
