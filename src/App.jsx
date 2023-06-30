import { useState } from "react";
import Greetings from "./Greetigs";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import GreetingsV2 from "./GreetingsV2";

function Homepage() {
  const [name, setName] = useState("Rahul");

  return (
    <Router>
      {/* <div>
        <p>Greetings</p>
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <Greetings name={name} city="Dehradun" />
      </div> */}
      <Switch>
        <Route exact path="/" />
        <Route />
        <Route />
        <Route />
        <Route />
      </Switch>
    </Router>
  );
}

export default Homepage;
