import React, { useCallback, useState } from "react";
import UcbChild from "./UcbChild";

const UcbParent = () => {
  const [count, setCount] = useState(0);
  //   const oncl = useCallback(() => setCount((prev) => prev + 1), [count]);
  const oncl = () => setCount((prev) => prev + 1);
  console.log("rere");
  return (
    <div>
      <p
        onClick={() => {
          setCount(count + 1);
        }}
      >
        {" "}
        count :::
      </p>
      {count}
      <UcbChild num={count} change={oncl} />
    </div>
  );
};

export default UcbParent;
