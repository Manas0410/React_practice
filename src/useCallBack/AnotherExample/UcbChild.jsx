import React, { useState } from "react";

const UcbChild = ({ num, change }) => {
  console.log("rerec");
  const [cs, scs] = useState(88);
  return (
    <div>
      child comp
      {num}
      <button onClick={change}>inc</button>
      <button
        onClick={() => {
          scs(cs + 6);
        }}
      >
        {cs}
      </button>
    </div>
  );
};

export default UcbChild;
