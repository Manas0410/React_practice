import React, { useRef } from "react";

const OTP = () => {
  const otpRef = useRef([]);
  const fields = [];
  let res = [];
  const inputChangeRef = (id, e) => {
    // if (e.keyCode === 8) {
    //   otpRef.current[id - 1]?.focus();

    //   console.log("Backspace key pressed!");
    //   // Your custom logic when backspace key is pressed
    // }
    if (otpRef.current[id].length === 0) {
      otpRef.current[id - 1]?.focus();
    } else {
      otpRef.current[id + 1]?.focus();
      // console.log("val", otpRef.current[id].value);
      res.push(otpRef.current[id]);
      // console.log("otpref", otpRef);
    }
    // otpRef.current[id + 1]?.focus();
  };
  for (let i = 0; i < 4; i++) {
    fields.push(
      <input
        type="text"
        key={i}
        ref={(en) => {
          console.log("en", en);
          // console.log(otpRef.current[i]);
          return (otpRef.current[i] = en);
        }}
        maxLength={1}
        onChange={(e) => inputChangeRef(i, e)}
      />
    );
  }

  console.log("outer", otpRef);
  console.log("fields", fields);
  console.log("value", res);
  return <div>{fields}</div>;
};

export default OTP;
// keypress
