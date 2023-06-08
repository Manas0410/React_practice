import { useState } from "react";

const FormAll = () => {
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    passwaord: "",
    city: "",
    gender: "",
    hobby: "",
    rating: "",
  });
  const myChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevState) => {
      console.log("PrevState: ", prevState);
      return {
        ...prevState,
        [name]: value,
      };
    });
  };
  return (
    <div>
      <p>name: {profile.name}</p>
      <input type="text" name="name" onChange={myChange} />
      <p>mail:{profile.email}</p>
      <input type="text" name="email" onChange={myChange} />
      <p>pass:{profile.passwaord}</p>
      <input type="password" name="pass" onChange={myChange} />
      <p>city:{profile.city}</p>
      <label for="cars">Choose a car:</label>
      <select name="city" onChange={myChange}>
        <option>UP</option>
        <option>MP</option>
        <option>Mumbai</option>
        <option>Delhi</option>
      </select>
      <p>gender:{profile.gender}</p>
      <input type="radio" name="gender" value="male" onChange={myChange} />
      <label for="male">male</label>
      <input type="radio" name="gender" value="female" onChange={myChange} />
      <label for="male">female</label>
      <p>hobby:{profile.hobby}</p>
      <input type="checkbox" name="hobby" value="cricket" onChange={myChange} />
      <label for="vehicle1"> cricket</label>
      <input type="checkbox" name="hobby" value="Car" onChange={myChange} />
      <label for="vehicle2"> car</label>
      <input type="checkbox" name="hobby" value="bike" onChange={myChange} />
      <label for="vehicle3"> bike</label>
      <p>rating:{profile.rating}</p>
      <input
        type="range"
        min="1"
        max="10"
        name="rating"
        onChange={myChange}
      ></input>
    </div>
  );
};
export default FormAll;
