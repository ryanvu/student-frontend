import React from "react";
import Input from "../../components/Input/Input";
import useForm from "../../hooks/useForm";
import "./Login.scss";
import { useAuthContext } from "../../contexts/useAuthContext";
import { useHistory } from "react-router-dom";

const Login = () => {
  const history = useHistory();
  const { login } = useAuthContext();
  const { handleSubmit, handleInputChange, formData } = useForm(
    { username: "", password: "" },
    () => {
      login(formData);
      history.push("/dashboard");
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
