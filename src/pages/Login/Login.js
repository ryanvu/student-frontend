import React from "react";
import Input from "../../components/Input/Input";
import useForm from "../../hooks/useForm";
import "./Login.scss";

import axios from "axios";

const Login = () => {
  const { handleSubmit, handleInputChange, formData } = useForm(
    { username: "", password: "" },
    () => {
      axios
        .post("http://localhost:8080/user/login", formData)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  );
  return (
    <div className="login">
      <h2 className="login__title">Login</h2>
      <form onSubmit={handleSubmit} className="login__form">
        <Input
          label="Username"
          onChange={handleInputChange}
          name="username"
          value={formData.username}
        />
        <Input
          label="Password"
          onChange={handleInputChange}
          name="password"
          value={formData.password}
        />
        <button className="login__btn">Login</button>
      </form>
    </div>
  );
};

export default Login;
