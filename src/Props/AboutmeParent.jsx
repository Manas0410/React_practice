import AbtChild from "./AboutmeChild";

const AbtParent = () => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
      <AbtChild name="Manas" city="UP" age={20} />
      <AbtChild name="Sohail" city="Bhopal" />
      <AbtChild name="Khusi" city="Bhopal" />
      <AbtChild name="Reetika" city="Delhi" />
      <AbtChild name="Arun" city="Morena" />
      <AbtChild name="Varun" city="Delhi" />
      <AbtChild name="Sachin" city="Bangalore" />
      <AbtChild name="Deepak" city="Bihar" />
      <AbtChild name="Manasvi" city="Bhopal" />
    </div>
  );
};
export default AbtParent;
//rfac
//import React from 'react'

// const aboutmeParent = () => {
//   return (
//     <div>

//     </div>
//   )
// }

// export default aboutmeParent
