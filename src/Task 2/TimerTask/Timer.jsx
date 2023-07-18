import React, { useState, useEffect, useMemo } from "react";
import { Bdiv, Hdiv, Mdiv, Pdiv } from "./timerCss";
// import { Play, Pause } from "lucide-react";

let timer = null;
const TimerComponent = () => {
  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    timer = setInterval(() => {
      setElapsedTime((prevElapsedTime) => prevElapsedTime + 1);
    }, 1000);
  }, []);

  const pauseFunc = () => {
    clearInterval(timer);
  };

  const resumeFunc = () => {
    timer = setInterval(() => {
      setElapsedTime((prevElapsedTime) => prevElapsedTime + 1);
    }, 1000);
  };
  const resetFunc = () => {
    setElapsedTime(0);
  };
  //   const timerWithUM = useMemo(() => {
  //     let initial = 0;
  //     setInterval(() => {
  //       initial += 1;
  //     }, 1000);
  //     return initial;
  //   }, []);

  const formattedTime = `${Math.floor(elapsedTime / 60)}:${elapsedTime % 60}`;

  //usememo config
  //   const usememoInitial = `${Math.floor(timerWithUM / 60)}:${timerWithUM % 60}`;

  return (
    <Mdiv>
      <Bdiv>
        <Hdiv>Timer</Hdiv>
        <Pdiv>Elapsed Time: {formattedTime}</Pdiv>
        {/* <p>Elapsed Time: {usememoInitial}</p> */}
        {/* <Play size={40} color="#4ce60a" strokeWidth={2.5} />
        <Pause size={40} color="#4ce60a" strokeWidth={2.5} /> */}
        <button onClick={pauseFunc}>PAUSE</button>
        <button onClick={resumeFunc}>RESUME</button>
        <button onClick={resetFunc}>RESET</button>
      </Bdiv>
    </Mdiv>
  );
};

export default TimerComponent;
