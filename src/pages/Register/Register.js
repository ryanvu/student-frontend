import React from "react";
import Input from "../../components/Input/Input";

//stylesheets
import "./Register.scss";

//hooks
import useForm from "../../hooks/useForm";
import { useAuthContext } from "../../contexts/useAuthContext";

const Register = () => {
  const { register } = useAuthContext();
  const { formData, handleSubmit, handleInputChange, errors } = useForm(
    {
      first: "",
      last: "",
      username: "",
      email: "",
      password: "",
    },
    () => {
      register(formData);
    }
  );

  return (
    <div className="register">
      <h2 className="register__title">Register</h2>
      <form onSubmit={handleSubmit} className="register__form">
        <div className="register__form-name">
          <Input
            label="First Name"
            onChange={handleInputChange}
            name="first"
            value={formData.first}
            error={errors.first}
          />
          <Input
            label="Last Name"
            onChange={handleInputChange}
            name="last"
            value={formData.last}
            error={errors.last}
          />
        </div>
        <Input
          label="Username"
          onChange={handleInputChange}
          name="username"
          value={formData.username}
          error={errors.username}
        />
        <Input
          label="Email"
          onChange={handleInputChange}
          name="email"
          value={formData.email}
          error={errors.email}
        />
        <Input
          label="Password"
          onChange={handleInputChange}
          name="password"
          type="password"
          value={formData.password}
          error={errors.password}
        />
        <button className="register__btn">Register</button>
      </form>
    </div>
  );
};

export default Register;
