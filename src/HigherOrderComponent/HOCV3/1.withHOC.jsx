import { useState } from "react";
import WrapperComp from "./WrapperComp";

const WitHOCCounter = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <button onClick={() => setCounter((val) => val + 1)}>Increment</button>
      <WrapperComp loading={counter % 5 !== 0}>
        <p>Value: {counter}</p>
      </WrapperComp>
    </div>
  );
};

export default WitHOCCounter;
