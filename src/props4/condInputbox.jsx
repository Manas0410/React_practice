import React, { useState } from "react";

const CondInputbox = () => {
  const [data, setData] = useState("");
  return (
    <div>
      <input
        type="text"
        placeholder={data.length && "enter input"}
        onChange={(ev) => setData(ev.target.value)}
        { data.length ? <p>"u hv entered nothing"</p> : <p>{data} </p>}
      />
    </div>
  );
};

export default CondInputbox;
