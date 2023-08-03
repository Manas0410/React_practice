import { useEffect, useState } from "react";

const FormComponent = () => {
  const [inputFeilds, setinputFeilds] = useState([
    { name: "firstName", value: "", type: "text" },
    { name: "lastName", value: "", type: "text" },
    { name: "email", value: "", type: "text" },
  ]);

  const handleChange = (e) => {
    let newClone = [...inputFeilds];
    const { name, value } = e.target;
    for (let i = 0; i < newClone.length; i++) {
      if (newClone[i].name === name) {
        newClone[i].value = value;
      }
    }
    setinputFeilds(newClone);
  };

  useEffect(() => {
    let oldData = JSON.parse(localStorage.getItem("inputFeilds"));
    setinputFeilds(oldData);
    console.log(oldData, "olddta");
  }, []);

  useEffect(() => {
    localStorage.setItem("inputFeilds", JSON.stringify(inputFeilds));
  }, [inputFeilds]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data submitted:", inputFeilds);
  };

  return (
    <form onSubmit={handleSubmit}>
      {inputFeilds.map((items) => {
        return (
          <div key={items.name}>
            <label htmlFor={items.name}>{items.name}</label>
            <input
              type={items.type}
              name={items.name}
              value={items.value}
              onChange={handleChange}
            />
          </div>
        );
      })}
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormComponent;
