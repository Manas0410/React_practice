import React, { useState } from "react";
import CardC from "./CardC";

const CardP = () => {
  const [element, setElement] = useState({
    title: [],
    content: [],
  });
  const mySet = (ev) => {
    const { name, value } = ev.target;
    setElement((prevState) => {
      return {
        ...prevState,
        [name]: [...prevState[name], value],
      };
    });
  };

  return (
    <div>
      <div>
        <input type="text" name="title" onChange={mySet} />
        <input type="text" name="content" onChange={mySet} />
      </div>
      <div>
        <input type="text" name="title" onChange={mySet} />
        <input type="text" name="content" onChange={mySet} />
      </div>
      <div>
        <input type="text" name="title" onChange={mySet} />
        <input type="text" name="content" onChange={mySet} />
      </div>
      <div>
        <input type="text" name="title" onChange={mySet} />
        <input type="text" name="content" onChange={mySet} />
      </div>
      <CardC data={element} />
    </div>
  );
};

export default CardP;

// Task 1: Component composition with props
// Create a new component called Card that takes two props:
//  title and content. The component should render a card-like
//  structure with a title and content. Use this Card component inside a
//  parent component called App and pass different title and content values as
//   props to render multiple cards.
