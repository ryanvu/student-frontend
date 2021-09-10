import React from "react";
import Input from "../../components/Input/Input";
import Select from "../../components/Select/Select";

//stylesheets
import "./Register.scss";

//hooks
import useForm from "../../hooks/useForm";
import { useAuthContext } from "../../contexts/useAuthContext";
import Error from "../../components/Error/Error";

const accountTypes = ["Teacher", "Student"];

const Register = () => {
  const { register, responseError } = useAuthContext();
  const {
    formData,
    handleSubmit,
    handleInputChange,
    handleUserTypeChange,
    errors,
  } = useForm(
    {
      first: "",
      last: "",
      username: "",
      email: "",
      password: "",
      user_type: "",
    },
    () => {
      register(formData);
    }
  );

  const handleSelectChange = (value) => {
    handleUserTypeChange(value.toLowerCase());
  };

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
        <Select options={accountTypes} handleChange={handleSelectChange} />
        <button className="register__btn">Register</button>
        {responseError && <Error message={responseError} />}
      </form>
    </div>
  );
};

export default Register;
