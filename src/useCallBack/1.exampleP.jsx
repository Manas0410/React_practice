import { useCallback, useState } from "react";
import ChildV22Comp from "./1.exampleC";
const ParentV22 = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  // const onCount1Change = useCallback(() => {
  //   setCount1((val) => val + 1);
  // }, [setCount1]);
  const onCount1Change = useCallback(() => {
    setCount1((val) => val + 1);
  }, [setCount1]);

  return (
    <div>
      <p onClick={onCount1Change}>Count 1 : {count1}</p>
      <p onClick={() => setCount2((val) => val + 1)}>Count 2 : {count2}</p>

      {/* <ChildV22Comp data={count1} onClickText={onCount1Change} /> */}
      <ChildV22Comp  onClickText={onCount1Change} />
    </div>
  );
};

export default ParentV22;

// const onCount1Change = useCallback(() => {
//     setCount1(count + 1);
//   }, [count]);
