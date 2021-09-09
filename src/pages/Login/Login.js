import React from "react";
import Input from "../../components/Input/Input";
import useForm from "../../hooks/useForm";
import "./Login.scss";
import { useAuthContext } from "../../contexts/useAuthContext";

const Login = () => {
  const { login } = useAuthContext();
  const { handleSubmit, handleInputChange, formData, errors } = useForm(
    { username: "", password: "" },
    () => {
      login(formData);
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
          error={errors.username}
        />
        <Input
          label="Password"
          onChange={handleInputChange}
          name="password"
          type="password"
          value={formData.password}
          error={errors.password}
        />
        <button className="login__btn">Login</button>
      </form>
    </div>
  );
};

export default Login;
