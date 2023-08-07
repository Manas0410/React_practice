import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// import calcSlice from "./SliceCalc";
import { add, sub, mult, div, getval } from "./SliceCalc";

const CalcComp = () => {
  const dispatch = useDispatch();
  const result = useSelector((state) => state.calcSlice.value);
  const valA = useSelector((state) => state.calcSlice.valA);
  const temp = useSelector((state) => state.calcSlice.temp);

  console.log(temp, "temp");
  console.log("res", result);
  const [data, setData] = useState({
    valA: "",
    valB: "",
  });
  const setter = (e) => {
    const { name, value } = e.target;
    //method of getting val by e.target its fxn is getval in slicecal
    dispatch(getval(value));
    setData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  console.log(data);

  return (
    <div>
      <input
        type="text"
        placeholder="Enter First No"
        name="valA"
        onChange={(e) => setter(e)}
      />
      <input
        type="text"
        placeholder="Enter Second No"
        name="valB"
        onChange={(e) => setter(e)}
      />
      <button onClick={() => dispatch(add(data))}>ADD</button>
      <button onClick={() => dispatch(sub(data))}>SUB</button>
      <button onClick={() => dispatch(mult(data))}>MULT</button>
      <button onClick={() => dispatch(div(data))}>DIV</button>
      <div>{result} </div>
    </div>
  );
};

export default CalcComp;
