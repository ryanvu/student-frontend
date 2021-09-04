import React from "react";
import Input from "../../components/Input/Input";
import axios from "axios";

//stylesheets
import "./Register.scss";

//hooks
import useForm from "../../hooks/useForm";

const Register = () => {
  const { formData, handleSubmit, handleInputChange } = useForm(
    {
      username: "",
      email: "",
      password: "",
    },
    () => {
      axios
        .post("http://localhost:8080/user/register", formData, {
          withCredentials: true,
        })
        .then((result) => {
          console.log(result);
        });
    }
  );

  return (
    <div className="register">
      <h2 className="register__title">Register</h2>
      <form onSubmit={handleSubmit} className="register__form">
        <Input
          label="Username"
          onChange={handleInputChange}
          name="username"
          value={formData.username}
        />
        <Input
          label="Email"
          onChange={handleInputChange}
          name="email"
          value={formData.email}
        />
        <Input
          label="Password"
          onChange={handleInputChange}
          name="password"
          value={formData.password}
        />
        <button className="register__btn">Register</button>
      </form>
    </div>
  );
};

export default Register;
