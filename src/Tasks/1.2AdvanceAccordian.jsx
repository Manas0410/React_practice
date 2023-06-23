import { useState } from "react";

const AccordianCV2 = ({ array }) => {
  const [show, setShow] = useState(false);
  const handle = () => {
    setShow(!show);
  };

  const renderUI = () => {
    const list = [];
    for (let i = 0; i < array.length; i++) {
      const currentElem = array[i];

      for (let item in currentElem) {
        list.push(
          <p>
            <span className="key-name">{item}: </span>
            <span className="value">{currentElem[item]}</span>
          </p>
        );
      }
    }

    return list;
  };

  return (
    <div>
      <button onClick={handle}>{!show ? "Show" : "Hide"}</button>
      {show && renderUI()}
    </div>
  );
};

const initialState = [
  {
    name: "name",
    value: "",
    type: "text",
    placeholder: "Enter Name",
  },
  {
    name: "city",
    value: "",
    type: "text",
    placeholder: "Enter City",
  },
  {
    name: "age",
    value: "",
    type: "number",
    placeholder: "Enter Afe",
  },
  {
    name: "contact",
    value: "",
    placeholder: "Enter Contact Number",
  },
];
const AccordianPV2 = () => {
  const [data, setData] = useState([]);
  const [fields, setFields] = useState([...initialState]);

  const onInputChange = (e) => {
    const { name, value } = e.target;

    setFields((prevState) => {
      return prevState.map((item) => {
        if (item.name === name) {
          item.value = value;
        }
        return item;
      });
    });
  };

  const onAddData = () => {
    console.log("Before: ", fields);

    const result = fields.reduce((acc, current) => {
      acc[current.name] = current.value;
      return acc;
    }, {});

    console.log("After: ", result);

    setData((prevState) => [...prevState, result]);
    setFields([...initialState]);
  };
  console.log("Data", fields);

  return (
    <div>
      {fields.map((item) => {
        return (
          <div key={item.name}>
            <input
              name={item.name}
              type={item.type}
              value={item.value}
              placeholder={item.placeholder}
              onChange={onInputChange}
            />
          </div>
        );
      })}
      <button onClick={onAddData}>Add</button>
    </div>
  );
};

export default AccordianPV2;
