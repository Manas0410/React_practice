// import React, { useState } from "react";

// const TemperatureC = ({ val, ch }) => {
//   const [res, setRes] = useState("");

//   const changeToF = (n) => {
//     setRes((parseFloat(n) * 9) / 5 + 32);
//   };
//   const changeToC = (n) => {
//     setRes(((parseFloat(n) - 32) * 5) / 9);
//   };
//   ch ? changeToF(val) : changeToC(val);
//   return (
//     <div>
//       {ch ? <p>temp in farenhite </p> : <p>temp in celcius </p>}

//       {res}
//     </div>
//   );
// };

// export default TemperatureC;

import { useState } from "react";
import { changeToC, changeToF } from "./utils/temperature";

const TemperatureC = ({ val, ch }) => {
  const [res, setRes] = useState("");

  const onTemperatureCalculate = () => {
    const newTempAfterCalculation = ch ? changeToF(val) : changeToC(val);
    setRes(newTempAfterCalculation);
  };

  return (
    <div>
      <button onClick={onTemperatureCalculate}>Calculate</button>
      <p> {res}</p>
    </div>
  );
};

export default TemperatureC;
