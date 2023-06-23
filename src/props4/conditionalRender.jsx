import { useState } from "react";

const ConditionalRenderingV1 = () => {
  const [isActive, setIsActive] = useState(true);

  return (
    <div>
      <button onClick={() => setIsActive((prevState) => !prevState)}>
        Toggle
      </button>
      <p>You are {isActive ? "Active" : "Not Active"}</p>

      {isActive && (
        <h1>
          <strong>Hello World</strong>
        </h1>
      )}
    </div>
  );
};

export default ConditionalRenderingV1;
