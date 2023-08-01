// Stateless
import { useRef } from "react";

const WithUseRef = () => {
  const nameInputRef = useRef(null);

  const onShowValue = () => {
    console.log("Name: ", nameInputRef.current.value);
  };

  console.log("Re-Render: ");
  return (
    <div>
      <input ref={nameInputRef} type="text" defaultValue={"Ajit"} />
      <button onClick={onShowValue}>Show Value</button>
    </div>
  );
};

export default WithUseRef;
