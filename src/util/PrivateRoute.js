import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuthContext } from "../contexts/useAuthContext";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { isAuth } = useAuthContext();

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
