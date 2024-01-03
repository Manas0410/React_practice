import axios from "axios";
import { useEffect, useState } from "react";

const App = () => {
  const [state, setState] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((response) => setState(response.data));
  }, []);
  console.log(state);
  return (
    <div>
      {state.map((item) => {
        if (item.userId == 1) {
          return;
        }
        return (
          <div key={item.id}>
            <span>{item.userId}</span>
            <span>{item.title}</span>
          </div>
        );
      })}
    </div>
  );
};
export default App;
