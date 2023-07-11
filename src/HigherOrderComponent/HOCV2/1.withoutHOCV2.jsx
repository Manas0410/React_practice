import { useState } from "react";
import { BounceLoader } from "react-spinners";

const WithoutHOC = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <button onClick={() => setCounter((val) => val + 1)}>Increment</button>
      {counter % 5 === 0 ? (
        <p>Value: {counter}</p>
      ) : (
        <BounceLoader color="#36d7b7" />
      )}
    </div>
  );
};

export default WithoutHOC;
