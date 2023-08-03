import React from "react";

const Circle = () => {
  return (
    <div>
      <div style={Circlestyle}></div>
    </div>
  );
};

const Circlestyle = {
  height: 80,
  width: 80,
  borderRadius: "50%",
  background: "conic-gradient(green 34deg, silver 0deg)",
};
export default Circle;
// ${(props) => props.degrees}
