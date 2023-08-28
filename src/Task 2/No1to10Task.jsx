import React, { useState, useEffect } from "react";

const No1to10Task = () => {
  const [num, setNum] = useState(1);
  const [motionFlag, setMotionFlag] = useState(true);
  const [direction, setDirection] = useState(1);
  let timer;

  // useEffect(() => {
  //   if (motionFlag) {
  //     timer = setInterval(() => {
  //       if (num === 10) {
  //         setDirection(-1);
  //       } else if (num === 1 && direction === -1) {
  //         setDirection(1);
  //       }
  //       console.log({ num }, { direction });
  //       setNum((prev) => prev + direction);
  //     }, 500);
  //   } else {
  //     clearInterval(timer);
  //   }

  //   return () => {
  //     clearInterval(timer);
  //   };
  // }, [motionFlag, direction, num]);

  useEffect(() => {
    let timer;

    if (motionFlag) {
      timer = setInterval(() => {
        setNum((prevNum) => {
          let newNum = prevNum + direction;

          if (newNum === 10 || newNum === 1) {
            setDirection((prevDirection) => -prevDirection);
          }

          return newNum;
        });
      }, 500);
    } else {
      clearInterval(timer);
    }

    return () => {
      clearInterval(timer);
    };
  }, [motionFlag, direction]);

  // const temp = () => {
  //   setMotionFlag(!motionFlag);
  //   if (motionFlag) {
  //     timer = setInterval(() => {
  //       setNum((prevNum) => {
  //         let newNum = prevNum + direction;
  //         console.log({ num, prevNum });

  //         if (newNum === 10 || newNum === 1) {
  //           setDirection((prevDirection) => -prevDirection);
  //         }

  //         return newNum;
  //       });
  //     }, 500);
  //   } else {
  //     clearInterval(timer);
  //   }
  // };
  return (
    <div>
      <h1>{num}</h1>
      <button onClick={() => setMotionFlag(!motionFlag)}>
        {motionFlag ? "STOP" : "START"}
      </button>
    </div>
  );
};

export default No1to10Task;
