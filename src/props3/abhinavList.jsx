import { useState } from "react";
const ListRenderAdd = () => {
  const [names, setNames] = useState([
    "Abhinav",
    "Ajit",
    "Sachin",
    "Vishal",
    "Tushar",
  ]);
  const [newName, setNewName] = useState("");
  const [newlyAddedRecord, setNewlyAddedRecord] = useState([]);

  const onAddNewName = () => {
    // Prepend Example
    setNames((prevState) => [newName, ...prevState]);

    // Append Example
    //setNames((prevState) => [ ...prevState, newName]);

    setNewName("");
    changeColor();
  };
  const changeColor = () => {
    const colors = ["black", "blue", "green", "orange", "purple", "pink"];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };
  const addProps = (e) => {
    setNewName(e.target.value);
    const { value } = e.target;
    setNewlyAddedRecord((prevState) => [...prevState, value]);
  };

  return (
    <div>
      <div>
        <input
          type="text"
          value={newName}
          //onChange={(e) => (setNewName(e.target.value))}
          onChange={addProps}
        />
        <button onClick={onAddNewName}>Add</button>
      </div>
      <ul>
        {setNewlyAddedRecord.map((item, index) => {
          return (
            <li key={index}>
              <div>
                <p style={{ color: changeColor() }}>{item}</p>
              </div>
            </li>
          );
        })}
      </ul>
      <div>
        <p>Newly added items:</p>
        <ul>
          {newlyAddedRecord.map((item, index) => {
            return (
              <li key={index}>
                <div>
                  <p>{item}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ListRenderAdd;
