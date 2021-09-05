import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext();

export const useAuthContext = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [user, setUser] = useState(null);
  useEffect(() => {
    axios
      .get("http://localhost:8080/user/isAuth")
      .then((res) => {
        console.log(res);
        if (res.data.isAuth) {
          setIsAuth(res.data.isAuth);
          setUser(res.data.session);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const values = {
    isAuth,
    user,
  };
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};
