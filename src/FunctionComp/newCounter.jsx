import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(10);

  console.log("Re-Render: Counter: ", counter);

  const onBtnClick = () => {
    setCounter(counter + 1);
    setCounter(counter + 1);
    setCounter(counter + 1);
    setCounter(counter + 1);
  };

  return (
    <div>
      <p>Counter: {counter}</p>
      {/*       {onBtnClick()}*/}
      {/*       <button onClick={onBtnClick()}>Increment via Func</button>
       */}{" "}
      <button
        onClick={function () {
          onBtnClick();
        }}
      >
        Increment via Func
      </button>
      <button onClick={() => onBtnClick()}>Increment via Func</button>
      <button onClick={onBtnClick}>Increment via CB</button>
    </div>
  );
};

export default Counter;
