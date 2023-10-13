import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addRequest } from "./calculator.slice";

const CalcBySaga = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const dispatch = useDispatch();
  const data = useSelector((state) => state.calculator);
  const { isLoading, sum } = data;

  const handleClick = () => {
    console.log(data);
    dispatch(addRequest({ num1, num2 }));
  };
  return (
    <div>
      <p>{sum}</p>
      <input type="text" onChange={(e) => setNum1(e.target.value)} />
      <input type="text" onChange={(e) => setNum2(e.target.value)} />
      <button onClick={handleClick}>ADD</button>
    </div>
  );
};

export default CalcBySaga;
