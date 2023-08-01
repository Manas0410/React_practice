//Stateful
import { useState } from "react";

const WithoutUseRef = () => {
  const [name, setName] = useState("");

  const onShowValue = () => {
    console.log("Name: ", name);
  };

  console.log("Re-Render: ", name);
  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={onShowValue}>Show Value</button>
    </div>
  );
};

export default WithoutUseRef;
