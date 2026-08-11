import { useState } from 'react';

export const useForm = (initialState) => {
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    
    // Automatically clear the specific error when the user starts typing again
    if (errors[name]) {
      setErrors({ ...errors, [name]: null });
    }
  };

  const resetForm = () => {
    setFormData(initialState);
    setErrors({});
  };

  // We return the state and functions so the component can use them
  return {
    formData,
    errors,
    setErrors,
    handleChange,
    resetForm
  };
};