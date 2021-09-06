import React, { useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuthContext } from "../contexts/useAuthContext";
import axios from "axios";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { isAuth, setIsAuth } = useAuthContext();

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/user/isAuth`).then((res) => {
      setIsAuth(res.data.isAuth);
    });
  }, [isAuth, setIsAuth]);
  return (
    isAuth && (
      <Route
        {...rest}
        render={(props) =>
          isAuth ? <Component {...props} /> : <Redirect to="/login" />
        }
      />
    )
  );
};

export default PrivateRoute;
