import { useEffect, useMemo, useState } from "react";

export const LoopsBad = () => {
  const [counter, setCounter] = useState(0);

  let sum = 0;
  for (let i = 1; i < 5; i++) {
    console.log("I: ", i);
    sum += i;
  }

  return (
    <div>
      <p>Sum : {sum}</p>
      <p>Counter : {counter}</p>

      <button onClick={() => setCounter((val) => val + 1)}>Increment</button>
    </div>
  );
};

export const LoopsGood = () => {
  const [counter, setCounter] = useState(0);
  const [result, setResult] = useState(0);

  useEffect(() => {
    let sum = 0;
    for (let i = 1; i < 5; i++) {
      console.log("I: ", i);
      sum += i;
    }
    setResult(sum);
  }, []);

  console.log("Re-render: ", result);

  return (
    <div>
      <p>Sum : {result}</p>
      <p>Counter : {counter}</p>

      <button onClick={() => setCounter((val) => val + 1)}>Increment</button>
    </div>
  );
};

export const LoopsBest = () => {
  const [counter, setCounter] = useState(0);

  const result = useMemo(() => {
    let sum = 0;
    for (let i = 1; i < 5; i++) {
      console.log("I: ", i);
      sum += i;
    }
    return sum;
  }, []);

  console.log("Re-render: ", result);

  return (
    <div>
      <p>Sum : {result}</p>
      <p>Counter : {counter}</p>

      <button onClick={() => setCounter((val) => val + 1)}>Increment</button>
    </div>
  );
};
export default LoopsBad;
