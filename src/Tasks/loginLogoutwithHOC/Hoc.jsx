import { useLocation, Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { pathname } = useLocation();
  const isUserLoggedIn = localStorage.getItem("isLoggedIn");

  if (!isUserLoggedIn && pathname !== "/login") {
    return <Navigate replace to="/login" />;
  }

  if (isUserLoggedIn && pathname === "/login") {
    return <Navigate replace to="/" />;
  }

  return children;
};

export default ProtectedRoute;
