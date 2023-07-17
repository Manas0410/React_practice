import React, { useState, useEffect } from "react";

const TimerComponent = () => {
  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setElapsedTime((prevElapsedTime) => prevElapsedTime + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const formattedTime = `${Math.floor(elapsedTime / 60)}:${(elapsedTime % 60)
    .toString()
    .padStart(2, "0")}`;

  return (
    <div>
      <h2>Timer</h2>
      <p>Elapsed Time: {formattedTime}</p>
    </div>
  );
};

export default TimerComponent;
