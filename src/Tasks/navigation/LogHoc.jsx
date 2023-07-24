import { Link } from "react-router-dom";

const WrapperHoc = ({ isLogged, children }) => {
  isLogged ? (
    <p>User logged in</p>
  ) : (
    <div>
      <Link to={`/logout`}>
        <button>Log In</button>
      </Link>
    </div>
  );
};
