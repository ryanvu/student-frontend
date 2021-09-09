import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const AuthContext = createContext();

const API_URL = process.env.REACT_APP_API_URL;

export const useAuthContext = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const history = useHistory();
  const [isAuth, setIsAuth] = useState(false);
  const [user, setUser] = useState(null);
  const [responseError, setResponseError] = useState("");

  useEffect(() => {
    axios
      .get(`${API_URL}/user/isAuth`)
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

  const register = (data) => {
    axios
      .post(`${API_URL}/user/register`, data)
      .then((res) => {
        if (res.data.isAuth) {
          setIsAuth(res.data.isAuth);
          setUser(res.data.session);
          history.push("/dashboard");
        }
      })
      .catch((err) => {
        setResponseError(err.response.data.message);
      });
  };

  const login = (data) => {
    axios
      .post(`${API_URL}/user/login`, data)
      .then((res) => {
        if (res.data.isAuth) {
          setIsAuth(res.data.isAuth);
          setUser(res.data.session);
          history.push("/dashboard");
        }
      })
      .catch((err) => {
        setResponseError(err.response.data.message);
      });
  };

  const logout = () => {
    axios
      .delete(`${API_URL}/user/logout`)
      .then((res) => {
        setUser(null);
        history.push("/");
      })
      .catch((err) => {
        setResponseError(err.response.data.message);
      });
  };

  const values = {
    isAuth,
    setIsAuth,
    user,
    register,
    login,
    logout,
    responseError,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};
