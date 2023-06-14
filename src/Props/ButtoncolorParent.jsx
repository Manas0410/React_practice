import React from "react";
import Buttoncolorchild from "./Buttoncolorchild";

const ButtoncolorParent = () => {
  return (
    <div>
      <button>red</button>
      <button>blue</button>
      <button>orange</button>
      <Buttoncolorchild />
    </div>
  );
};

export default ButtoncolorParent;
