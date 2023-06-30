import { useEffect, useState } from "react";

export const UseEffectExample = () => {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);
  /**
   * Run once
   * Having two Arguments
   * 1- Arrow/Normal callback function - Mandatory
   * 2- Dependency array - Optional
   */
  useEffect(() => {
    console.log("Run Once");
  }, []);

  /**
   * Run on change of counter
   */
  useEffect(() => {
    console.log("Run on Counter Change: ", counter);
  }, [counter]);

  /**
   * Run on change of counter
   */
  useEffect(() => {
    console.log("Run on Counter2 Change: ", counter2);
  }, [counter2]);

  /**
   * Run on every re-render
   */
  /* useEffect(() => {
    console.log("Run on every state: ", counter);
  }); */

  return (
    <div>
      <p>Counter: {counter}</p>
      <button onClick={() => setCounter((val) => val + 1)}>Increment</button>
      <button onClick={() => setCounter2((val) => val + 1)}>Increment2</button>
    </div>
  );
};

export default UseEffectExample;
