import React from "react";

const Alert = (prop) => {
  return (
    <div style={{ backgroundColor: prop.color }}>
      <p>{prop.message} </p>
    </div>
  );
};

export default Alert;
