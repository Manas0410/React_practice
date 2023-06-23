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

const AccordianC = ({ array }) => {
  const [show, setShow] = useState(false);
  const handle = () => {
    setShow(!show);
  };

  return (
    <div>
      <button onClick={handle}>{!show ? "Show" : "Hide"}</button>
      {show &&
        array.map((item, index) => {
          return (
            <div key={index}>
              <p>Name : {item.name}</p>
              <p>City : {item.city}</p>
              <p>Age : {item.age}</p>
            </div>
          );
        })}
    </div>
  );
};

const initialState = {
  name: "",
  city: "",
  age: "",
  phone: "",
};
const AccordianP = () => {
  const [data, setData] = useState([]);
  const [profile, setProfile] = useState(initialState);

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const onAddData = () => {
    setData((prevState) => [...prevState, profile]);
    setProfile({ ...initialState });
  };
  console.log("Data", data);

  return (
    <div>
      <input
        type="text"
        placeholder="enter name"
        name="name"
        value={profile.name}
        onChange={onInputChange}
      />
      <input
        type="text"
        placeholder="enter age"
        name="age"
        value={profile.age}
        onChange={onInputChange}
      />
      <input
        type="text"
        placeholder="enter city"
        name="city"
        value={profile.city}
        onChange={onInputChange}
      />
      <input
        type="text"
        placeholder="phone number"
        name="phone"
        value={profile.phone}
        onChange={onInputChange}
      />
      <button onClick={onAddData}>Add</button>
      <AccordianCV2 array={data} />
    </div>
  );
};

export default AccordianP;
