import React from "react";
import HOC from "./Hoc";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const onLogin = () => {
    localStorage.setItem("isLoggedIn", true);
    navigate("/");
  };

  return (
    <HOC>
      <button onClick={onLogin}>Login</button>
    </HOC>
  );
};

export default Login;
