// import { useState } from "react";

// const Child = ({ data }) => {
//   const a = Number(data);
//   // let arr = new Array(a);
//   // console.log(arr.length)
//   const [Arr, setArr] = useState([a]);

//   for (let i = 0; i < a; i++) {
//     Arr.push(0);
//   }

//   return (
//     <div>
//       {Arr.map((value, index) => {
//         return (
//           <div key={index}>
//             <input
//               type="number"
//               value={Arr[index]}
//               onChange={(event) => {
//                 setArr((prevArr) => {
//                   prevArr[index] = event.target.value;
//                   return prevArr;
//                 });
//               }}
//             />
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default Child;

import { useState, memo, useEffect } from "react";

const Child = ({ data }) => {
  const a = Number(data);
  const [Arr, setArr] = useState([]);
  const [sum, setSum] = useState(0);
  const [cc, setcc] = useState(0);

  useEffect(() => {
    // const initialArr = new Array(a).fill(null);
    let initialArr = [];
    for (let i = 0; i < a; i++) {
      initialArr.push(null);
    }
    setArr(initialArr);
  }, [a]);
  console.log(Arr);

  const onchangeEvent = (e, index) => {
    const updatedArr = [...Arr]; // Create a new copy of the array

    updatedArr[index] = parseInt(e.target.value);
    setArr((prev) => {
      const newThing = [...prev];
      newThing[index] = parseInt(e.target.value);
      return newThing;
    });

    const updatedSum = updatedArr.reduce((acc, num) => {
      if (typeof num === "number") {
        acc += num;
      }
      return acc;
    }, 0);

    setSum(updatedSum);
  };
  const [cs, scs] = useState(false);
  const calc = () => {
    setcc(
      Arr.reduce((ac, val) => {
        return ac + val;
      }, 0)
    );
    scs(true);
  };
  return (
    <div>
      {Arr.map((value, index) => {
        return (
          <input
            type="number"
            key={index}
            onChange={(e) => onchangeEvent(e, index)}
          />
        );
      })}

      {/* <div>{sum}</div> */}
      <button onClick={calc}>show addition</button>
      {cs && <dir>{cc}</dir>}
    </div>
  );
};

export default Child;
