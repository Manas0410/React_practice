import React, { useState } from "react";
import EditBook from "./EditBook";

const BookCard = ({ item }) => {
  const [editFlag, setEditFlag] = useState(false);
  return (
    <div style={{ border: "1px solid orange" }}>
      <span>Nme :{item.title}</span> <span>___Author:__{item.author}</span>
      <button onClick={() => setEditFlag(true)}>Edit</button>
      {editFlag && <EditBook item={item} editFlag={setEditFlag} />}
    </div>
  );
};

export default BookCard;
