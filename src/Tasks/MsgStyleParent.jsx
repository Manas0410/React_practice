import React, { useState } from "react";
import Alert from "./MsgStyleChild";

const MsgStyleParent = () => {
  const [status, setStatus] = useState("");
  const [msg, setMsg] = useState("");

  const myColor = (ev) => {
    setStatus(ev.target.value);
  };

  return (
    <div>
      <input type="radio" name="status" value="green" onChange={myColor} />
      <label>Success</label>
      <br></br>
      <input type="radio" name="status" value="yellow" onChange={myColor} />
      <label>Warning</label>
      <br></br>
      <input type="radio" name="status" value="red" onChange={myColor} />
      <label>Error</label>
      <br></br>
      <input
        type="text"
        placeholder="enter message"
        value={msg}
        onChange={(e) => setMsg(e.target.value)}
      />
      <Alert message={msg} color={status} />
    </div>
  );
};

export default MsgStyleParent;

// Create a new component called Alert that takes a type prop and a message prop.
//  The component should render a styled alert box with different colors based
//  on the type prop. If the type is "success", the box should be green. If the
//  type is "warning", the box should be yellow. If the type is "error", the
//   should be red. The message prop should be displayed inside the alert box.
{
  /* <Alert type="success" message="Operation successful!" />
[Green alert box]
Operation successful! */
}
