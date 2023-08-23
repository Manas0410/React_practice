import React, { useMemo, useRef, useState } from "react";
import axios from "axios";
import ForwardC from "./ForwardC";

const ForwardP = () => {
    const[data,setData]=useState()
  const m = useMemo(() => {
    let temp;
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => (setData(response.data)));
    return temp;
  },[]);
  console.log({ data });
  const ref = useRef();
  const ch = () => {
    ref.current.value = "manas";
  };
  return (
    <div>
      <button onClick={() => ch()}>change</button>
      <ForwardC ref={ref} />
    </div>
  );
};
export default ForwardP;
