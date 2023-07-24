import { useNavigate } from "react-router-dom";
import HOC from "./Hoc";

const Home = () => {
  const navigate = useNavigate();

  const onLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/");
  };
  return (
    <HOC>
      <h1>Home</h1>
      <button onClick={onLogout}>log out</button>
    </HOC>
  );
};

export default Home;
