import React from "react";

const IsVisibleC = (prop) => {
  return <div> {prop.flag && <p>This is a hidden msg</p>}</div>;
};

export default IsVisibleC;
