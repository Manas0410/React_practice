const ChildCompSample = ({ onMyIncrement }) => {
  console.log("Props: ", onMyIncrement);
  return (
    <>
      <p>I am from child</p>
      <button onClick={onMyIncrement}>Increment From child</button>
    </>
  );
};

export default ChildCompSample;

//new code
// import { useState } from "react";
// import ChildComponent from "./2.Child.comp";

// const ParentComponent =()=>{
//     const [count, setCount] = useState(0);
//     const onIncrement = () => {
//         //console.log("On Clicked");
//         setCount((prevState) => prevState + 1);
//       };

//     const onDecrement =()=>{
//         //console.log("Clicked");
//         setCount((prevState) => prevState - 1)
//     }

//       return (
//         <>
//           <p>Counter: {count}</p>
//           <button onClick={onIncrement}>Increment from parent</button>
//           <ChildComponent onMyIncrement={onIncrement} onMyDecrement={onDecrement} count={count} />
//         </>
//       );
//     };
// export default ParentComponent;

// const ChildComponent = ({ onMyIncrement, onMyDecrement, count }) => {
//     //console.log("Props: ", onMyIncrement);
//     const updateCounter = (op) =>{//"+"
//         console.log({op});
//         if(op==="-" && count ===0){
//             console.log("Value is 0");
//             return;
//         }
//         op === "+" ? onMyIncrement() : onMyDecrement();
//         //mthd();
//     }
//     return (
//       <>
//         <p>I am from child</p>
//         <button onClick={()=>updateCounter("+")}>Increment From child</button>
//         <button onClick={()=>updateCounter("-")}>Decrement from child</button>
//         <button onClick={(e)=>updateCounter(e)}>Event trigger from child</button>
//         <button onClick={updateCounter}>Event trigger mth 2 from child</button>

//       </>
//     );
//   };

//   export default ChildComponent;
