import React, { useState } from "react";

const Counter = () => {
  const [n, setN] = useState("");
  const up = () => {
    setN(+n + 1);
  };

  return (
    <div>
      <p>counter: {n} </p>
      <button value={n} onClick={up}>
        update
      </button>
    </div>
  );
};

export default Counter;
