import React from "react";

const CardC = (prop) => {
  const { title, content } = prop.data;
  return (
    <div style={{ margin: "1px solid black" }}>
      <p>card</p>

      {title.map((item, index) => {
        const t = content.filter((itemt, indext) => index == indext);
        return <li key={indext}> {item}</li>;
      })}
    </div>
  );
};

export default CardC;
