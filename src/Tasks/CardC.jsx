import React from "react";

const CardC = (prop) => {
  const { title, content } = prop.data;
  console.log(title);
  console.log(content);
  return (
    <div style={{ margin: "1px solid black" }}>
      <p>card</p>

      {title.map((item, index) => {
        return (
          <li key={index}>
            {" "}
            {item}
            {content[index]}{" "}
          </li>
        );
      })}
    </div>
  );
};

export default CardC;
