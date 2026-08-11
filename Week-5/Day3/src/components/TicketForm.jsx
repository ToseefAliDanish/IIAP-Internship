import { useState } from 'react';

const TicketForm = ({ onAddTicket }) => {
  const [formData, setFormData] = useState({
    title: "",
    email: "",
    priority: "Low"
  });

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
     
    if (errors[name]) {
      setErrors({ ...errors, [name]: null });
    }
  };

  const validateForm = () => {
    let newErrors = {}; 
    let isValid = true;

    if (formData.title.trim() === "") {
      newErrors.title = "Issue title is required.";
      isValid = false;
    }

    const emailRegex = /\S+@\S+\.\S+/;
    if (formData.email.trim() === "") {
      newErrors.email = "Email is required.";
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
      isValid = false;
    }

    setErrors(newErrors); 
    
    return isValid;
  };

  const handleSubmit = (event) => {
    event.preventDefault(); 
   
    if (validateForm()) {
   
      onAddTicket(formData);
      
   
      setFormData({ title: "", email: "", priority: "Low" });
      setErrors({});
    }
  };

  return (
    <div className="form-container">
      <h2>Submit a Support Ticket</h2>
      
      <form onSubmit={handleSubmit} noValidate> 
                
        <div className="input-group">
          <label>Issue Title</label>
          <input 
            type="text" 
            name="title" 
            value={formData.title} 
            onChange={handleChange} 
            className={errors.title ? "input-error" : ""} 
          />
          {errors.title && <p className="error-text">{errors.title}</p>}
        </div>

        <div className="input-group">
          <label>Contact Email</label>
          <input 
            type="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            className={errors.email ? "input-error" : ""} 
          />
          {errors.email && <p className="error-text">{errors.email}</p>}
        </div>

        <div className="input-group">
          <label>Priority Level</label>
          <select name="priority" value={formData.priority} onChange={handleChange}>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High (System Down)</option>
          </select>
        </div>

        <button type="submit" className="btn-submit">Create Ticket</button>
      </form>
    </div>
  );
};

export default TicketForm;