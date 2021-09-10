import { useState, useEffect } from "react";

const useForm = (initialState, submitCallback) => {
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [allowSubmit, setAllowSubmit] = useState(false);

  const validateInputs = (values) => {
    let errors = {};

    if (!values.first) {
      errors.first = "First name is required";
    }
    if (!values.last) {
      errors.last = "Last name is required";
    }
    if (!values.username) {
      errors.username = "Username is required";
    }
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = "Email address is invalid";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 6) {
      errors.password = "Password must contain 6 characters or more";
    }

    return errors;
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleRadioChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleUserTypeChange = (value) => {
    setFormData({
      ...formData,
      user_type: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validateInputs(formData));

    if (allowSubmit) {
      setFormData(initialState);
      submitCallback?.(formData);
    }
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0) {
      setAllowSubmit(true);
    }
  }, [errors]);

  return {
    formData,
    handleInputChange,
    handleSubmit,
    handleRadioChange,
    handleUserTypeChange,
    errors,
  };
};

export default useForm;
