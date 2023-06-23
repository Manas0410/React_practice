import React, { memo, useState } from "react";

const AccordianC = ({ array }) => {
  const [show, setShow] = useState(false);
  const handle = () => {
    setShow(!show);
  };
  return (
    <div>
      <button onClick={handle}>+</button>
      {show && (
        <div>
          {array.map((item, index) => {
            return <div key={index}>{item.nv}</div>;
          })}{" "}
        </div>
      )}
    </div>
  );
};

export default memo(AccordianC);
