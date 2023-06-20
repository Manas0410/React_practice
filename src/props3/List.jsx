import { useState } from "react";
const ListRender = () => {
  const [names, setName] = useState(["abhinav", "ajit", "sachin", "vishal"]);
  const [color, setColor] = useState("");

  return (
    <div>
      <input
        type="text"
        placeholder="enter color"
        value={color}
        onChange={(ev) => setColor(ev.target.value)}
      />
      <ul style={{ backgroundColor: color }}>
        {names.map((item, index) => {
          return (
            <li key={index}>
              <div
                style={{
                  border: "1px solid silver",
                  padding: 12,
                  height: 100,
                  width: 100,
                }}
              >
                <p>{item}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ListRender;
