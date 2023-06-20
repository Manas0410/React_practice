import React from "react";

const TemperatureC = ({ val, ch }) => {
  const [res, setRes] = "";

  const changeToF = (n) => {
    setRes((parseFloat(n) * 9) / 5 + 32);
  };
  const changeToC = (n) => {
    setRes(((parseFloat(n) - 32) * 5) / 9);
  };
  ch ? changeToF(val) : changeToC(val);
  return (
    <div>
      {ch ? <p>temp in farenhite </p> : <p>temp in celcius </p>}
      {res}
    </div>
  );
};

export default TemperatureC;
