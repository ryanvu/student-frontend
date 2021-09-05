import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../contexts/useAuthContext";
import { useHistory } from "react-router-dom";

const Header = () => {
  const { user, logout } = useAuthContext();
  const history = useHistory();
  return (
    <header className="header">
      <h3>students</h3>
      <nav className="header__nav">
        <Link to="/register">Register</Link>
        <Link to="/login">Login</Link>
        {user && (
          <button
            onClick={() => {
              logout();
              history.push("/");
            }}
            className="header__btn"
          >
            Logout
          </button>
        )}
      </nav>
    </header>
  );
};

export default Header;
