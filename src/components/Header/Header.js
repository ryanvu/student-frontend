import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../contexts/useAuthContext";
import { useHistory } from "react-router-dom";
import Me from "../Me/Me";

const Header = () => {
  const { user, logout } = useAuthContext();
  const history = useHistory();
  return (
    <header className="header">
      <h3
        className="header__title"
        onClick={() => {
          history.push("/");
        }}
      >
        students
      </h3>
      <nav className="header__nav">
        {!user && (
          <>
            <Link className="header__nav-item" to="/register">
              Register
            </Link>
            <Link className="header__nav-item" to="/login">
              Login
            </Link>
          </>
        )}
        {user && (
          <>
            <Me user={user} />
            <button
              onClick={() => {
                logout();
                history.push("/");
              }}
              className="header__btn"
            >
              Logout
            </button>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
