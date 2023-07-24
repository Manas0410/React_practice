import React, { useState } from "react";
import { Link } from "react-router-dom";
import WrapperHoc from "../../HigherOrderComponent/1.CardwithHOC/WrapperHOC";

const Login = () => {
  const [log, setLog] = useState(false);
  return <WrapperHoc isLogged={log}></WrapperHoc>;
};

export default Login;
