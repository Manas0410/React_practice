import { useState } from "react";

const SimpleForm = () => {
  const [uname, setName] = useState("manas");
  const [uage, setAge] = useState("20");
  const [ucolor, setColor] = useState("black");
  const [uyear, setYear] = useState("2023");
  const [profile, setProfile] = useState({
    name: "",
    age: "",
    color: "",
    year: "",
  });

  const myChangeFunc = (ev) => {
    const { name, value } = ev.target;

    if (name === "age") {
      setAge(value);
      return;
    }

    if (name === "color") {
      setColor(value);
      return;
    }

    if (name === "year") {
      setYear(value);
      return;
    }
  };

  const onInputChange = (e) => {
    const { name, value } = e.target;

    // First way - Direct
    //setProfile({ ...profile, [name]: value });

    setProfile((prevState) => {
      console.log("PrevState: ", prevState);
      return {
        ...prevState,
        [name]: value,
        //...prevState,
      };
    });
  };

  return (
    <div>
      <p>name : {uname}</p>
      <input type="text" onChange={(ev)=>setName(ev.target.value)} />

      <p>AGE : {profile.age}</p>
      <input type="text" onChange={onInputChange} name="age" />
      <p>Fav color : {profile.color}</p>
      <input type="text" onChange={onInputChange} name="color" />
      <p>Year : {uyear}</p>
      <input type="text" onChange={myChangeFunc} name="year" />
    </div>
  );
};
export default SimpleForm;
