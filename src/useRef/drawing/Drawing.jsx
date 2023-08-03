import React, { useRef, useEffect, useState } from "react";

const DrawingApp = () => {
  const [isDrawing, setIsDrawing] = useState(false);
  const canvasRef = useRef(null);

  const startDrawing = (event) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const { offsetX, offsetY } = event.nativeEvent;
    ctx.beginPath();
    ctx.moveTo(offsetX, offsetY);
    setIsDrawing(true);
  };

  const draw = (event) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const { offsetX, offsetY } = event.nativeEvent;
    ctx.lineTo(offsetX, offsetY);
    ctx.stroke();
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.lineWidth = 2;
    ctx.lineCap = "round";
    ctx.strokeStyle = "black";

    canvas.addEventListener("mousedown", startDrawing);
    canvas.addEventListener("mousemove", draw);
    canvas.addEventListener("mouseup", stopDrawing);
    canvas.addEventListener("mouseout", stopDrawing);

    return () => {
      canvas.removeEventListener("mousedown", startDrawing);
      canvas.removeEventListener("mousemove", draw);
      canvas.removeEventListener("mouseup", stopDrawing);
      canvas.removeEventListener("mouseout", stopDrawing);
    };
  }, []);

  return (
    <div>
      <canvas
        ref={canvasRef}
        width="400"
        height="400"
        style={canvasStyle}
      ></canvas>
    </div>
  );
};

// Custom canvas style (you can modify as per your design)
const canvasStyle = {
  border: "1px solid black",
};

export default DrawingApp;

// [1,2,3,4]

// [[]]
// 1-- add [1] temp
// 2-- [[],[1]]
//  temp [2],[1,2]
//  2--  [[],[1],[2],[1,2]] //main

//  add [3],[1,3][2,3][1,2,3]
//  append  [[],[1],[2],[1,2],[3],[1,3][2,3][1,2,3]]
