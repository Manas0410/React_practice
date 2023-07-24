import React from "react";
import { Link } from "react-router-dom";

const Logout = () => {
  return (
    <div>
      <p>WELCOME</p>
      <Link to={`/`}>
        <button>Log Out</button>
      </Link>
    </div>
  );
};

export default Logout;
