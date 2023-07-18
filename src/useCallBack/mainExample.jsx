import { useCallback, useState } from "react";

const UseCallbackV22 = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

  const onClickWithOutUCB = () => {
    console.log("onClickWithOutUCB", { count1, count2, count3 });
  };

  const onClickWithUCB = useCallback(() => {
    console.log("onClickWithUCB", { count1, count2, count3 });
  }, [count1, count2]);

  const onCachedFun = useCallback(() => {
    console.log("onClickWithOutUCB", { count1, count2, count3 });
  }, []);

  return (
    <div>
      <p onClick={() => setCount1((val) => val + 1)}>Count 1 : {count1}</p>
      <p onClick={() => setCount2((val) => val + 1)}>Count 2 : {count2}</p>
      <p onClick={() => setCount3((val) => val + 1)}>Count 3 : {count3}</p>

      <button onClick={onClickWithOutUCB}>WithOut UCB</button>
      <button onClick={onClickWithUCB}>With CB</button>
      <button onClick={onCachedFun}>With UCB - One Time</button>
    </div>
  );
};

export default UseCallbackV22;
