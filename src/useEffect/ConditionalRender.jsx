import { useState } from "react";

const Toggle = () => {
  const [isActive, setIsActive] = useState(false);

  if (!isActive) {
    return (
      <>
        <p>I am Inactive</p>
        <button onClick={() => setIsActive((state) => !state)}>
          Change to Active
        </button>
      </>
    );
  }

  return (
    <>
      <p>I am Active</p>
      <button onClick={() => setIsActive((state) => !state)}>
        Change to In-Active
      </button>
    </>
  );
};

export default Toggle;
