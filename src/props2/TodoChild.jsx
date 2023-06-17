import React from "react";

const TodoChild = (prop) => {
  console.log("list", prop.list);

  //appending list
  //   const li = document.getElementById("l");
  //   for (let i = 0; i < prop.list.length; i++) {
  //     let one = document.createElement("p");
  //     one.innerText = prop.list[i];
  //     li.appendChild(one);
  //   }

  return (
    <div id="l">
      <h1>TO DO LIST</h1>
      <ul>
        {prop.list.map((item, index) => {
          return <li key={index}> {item}</li>;
        })}
      </ul>
    </div>
  );
};

export default TodoChild;
