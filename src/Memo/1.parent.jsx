// Parent

import { useState } from "react";
import Child from "./1.Child";

const MemoP = () => {
  const [counter, setCounter] = useState(0);

  console.log("Parent Re-render");

  return (
    <div>
      <p>{counter}</p>
      <div>
        <button onClick={() => setCounter((val) => val + 1)}>Increment</button>
        <button onClick={() => setCounter((val) => val - 1)}>Decrement</button>
        <Child count={10} />
        <Child />
        <Child count={counter} />
        <Child />
        <Child />
        <Child />
        <Child />
        <Child />
      </div>
    </div>
  );
};
export default MemoP;
