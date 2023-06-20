import React, { useState } from "react";
import TemperatureC from "./TemperatureC";

const TemperatureP = () => {
  const [unit, setUnit] = useState("");
  const [temp, setTemp] = useState("");
  return (
    <div>
      <input
        type="radio"
        name="unit"
        value={true}
        onChange={(e) => setUnit(e.target.value)}
      />
      <label htmlFor="unit">CELCIUS</label>
      <br />
      <input
        type="radio"
        name="unit"
        value={false}
        onChange={(e) => setUnit(e.target.value)}
      />
      <label htmlFor="unit">FARENHITE</label>
      <br />
      <br />
      <input
        type="text"
        placeholder="enter temperature"
        value={temp}
        onChange={(e) => setTemp(e.target.value)}
      />
      <TemperatureC val={temp} ch={unit} />
    </div>
  );
};

export default TemperatureP;
