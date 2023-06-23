// import TemperatureC from "../Tasks/TemperatureC";
// import { useState } from "react";
export const changeToF = (n) => {
        return ((parseFloat(n) * 9) / 5 + 32);
      };
    
export const changeToC = (n) => {
    return (((parseFloat(n) - 32) * 5) / 9);
  };
