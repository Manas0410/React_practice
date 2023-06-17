import React, { useState } from "react";

const Sumchild = (prop) => {
  const [sumar, setSumar] = useState([]);
  const ar = [];
  ar.length = 4;
  const addAr = (ev) => {
    const { value } = ev.target;
    setSumar((prevState) => [...prevState, value]);
  };
  const myAdd = (arr) => arr.reduce((a, b) => a + b, 0);
  return (
    <div>
      {ar.map((n) => {
        return <input type="text" value={sumar} key={n} onChange={addAr} />;
      })}
      <button onClick={myAdd(sumar)}></button>
    </div>
  );
};

export default Sumchild;
