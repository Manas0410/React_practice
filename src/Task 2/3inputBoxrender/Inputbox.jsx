import React, { useState, useCallback } from "react";
import { v4 as uuidv4 } from "uuid";

const ManasDynamicFields = () => {
  // State to keep track of dynamic inputs
  const [inputs, setInputs] = useState([]);

  // Function to add 3 more dynamic input fields
  const onAddInputs = useCallback(() => {
    const inputsElems = [];
    for (let i = 0; i < 3; i++) {
      const currentElem = {
        name: uuidv4(),
        type: "text",
        value: "",
        placeholder: "Enter text here",
      };
      inputsElems.push(currentElem);
    }

    // Update the state with the new dynamic inputs
    setInputs((prevState) => [...prevState, ...inputsElems]);
  }, []);

  // Function to handle input changes and update state accordingly
  const onInputChange = useCallback((e) => {
    const { name, value } = e.target;

    // Update the state by mapping through the existing inputs and updating the value for the matching input field
    setInputs((prevState) =>
      prevState.map((item) => {
        if (item.name === name) {
          return { ...item, value };
        }
        return item;
      })
    );
  }, []);

  return (
    <div>
      <div>
        {/* Render dynamic input fields */}
        {inputs.map((item) => (
          <input
            type="text"
            name={item.name}
            key={item.name}
            placeholder={item.placeholder}
            onChange={onInputChange}
          />
        ))}
        {/* Button to add more dynamic input fields */}
        <button onClick={onAddInputs}>Add 3 more fields</button>
      </div>

      {/* Render the data only if there is at least one input with a value */}
      {inputs.some((item) => item.value !== "") && (
        <div>
          <h1>My Data</h1>
          <ul>
            {/* Render the data in a list */}
            {inputs.map((item) =>
              item.value ? <li key={item.name}>{item.value}</li> : null
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ManasDynamicFields;

// import { useState, useMemo } from "react";
// const Task = () => {
//   const [num, setNum] = useState(3);

//   const ar = useMemo(() => {
//     let temp2 = [];
//     for (let i = 0; i < num; i++) {
//       temp2.push(" ");
//     }
//     return temp2;
//   }, [num]);

//   console.log(ar);

//   const [inputAr, setInputar] = useState([]);
//   const showInput = (e) => {
//     const { value } = e.target;
//     const temp3 = [value];
//     setInputar((prev) => [...prev, ...temp3]);
//   };

//   console.log("inputs", inputAr);
//   return (
//     <div>
//       {ar.map((item, index) => {
//         return <input type="text" key={index} onChange={(e) => showInput(e)} />;
//       })}
//       <button
//         onClick={() => {
//           setNum((prev) => (prev += 3));
//         }}
//       >
//         add
//       </button>
//     </div>
//   );
// };
// export default Task;
