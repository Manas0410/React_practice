import React from "react";
import { useState } from "react";

const ChatBox = () => {
  const [msg, setMsg] = useState("");
  const [chatBox, setChatBox] = useState([]);
  const [throttleFlag, setThrottleFlag] = useState(true);
  const handleInput = (e) => {
    setMsg(e.target.value);
  };
  const add = () => {
    setChatBox((prev) => [...prev, msg]);
    setMsg("");
  };
  const throtlAdd = () => {
    console.log("button clicked");

    if (throttleFlag) {
      setChatBox((prev) => [...prev, msg]);
      setMsg("");
      setThrottleFlag(false);
      setTimeout(() => {
        setThrottleFlag(true);
      }, 6000);
    }
  };
  return (
    <div>
      <input type="text" onChange={(e) => handleInput(e)} value={msg} />
      <button onClick={add}>ADD</button>
      <button onClick={throtlAdd}>ADD WITH THROTTL</button>
      <div>
        {chatBox.map((item, i) => {
          return (
            <div key={i}>
              {i}={">"}
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ChatBox;
