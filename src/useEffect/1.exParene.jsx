import { useState } from "react";
import ChildComp from "./2.childComp";

const ParentUseEffect = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <button onClick={() => setCounter((val) => val + 1)}>Increment</button>
      {counter > 0 && (
        <>
          <ChildComp />
          <ChildComp />
          <ChildComp />
        </>
      )}

      <ChildComp />
      <ChildComp />
    </div>
  );
};

export default ParentUseEffect;
