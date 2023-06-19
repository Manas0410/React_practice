import { useState } from "react";
const ListRender = () => {
  const [names, setName] = useState(["abhinav", "ajit", "sachin", "vishal"]);

  return (
    <div>
      <ul>
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
