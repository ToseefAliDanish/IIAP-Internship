import { useForm } from '../hooks/useForm';
import { isValidEmail, isNotEmpty, isMinLength } from '../utils/validators';

const TicketForm = ({ onAddTicket }) => {
  const { formData, errors, setErrors, handleChange, resetForm } = useForm({
    title: "",
    email: "",
    description: "",
    priority: "Low"
  });

  const validateForm = () => {
    let newErrors = {};
    let isValid = true;

    if (!isNotEmpty(formData.title)) {
      newErrors.title = "Issue title is required.";
      isValid = false;
    }

    if (!isNotEmpty(formData.email)) {
      newErrors.email = "Email is required.";
      isValid = false;
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
      isValid = false;
    }

    if (!isMinLength(formData.description, 10)) {
      newErrors.description = "Description must be at least 10 characters.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (event) => {
    event.preventDefault(); 
    
    if (validateForm()) {
      onAddTicket(formData); // LIFT STATE UP
      resetForm();           // CLEAN UP
    }
  };

  return (
    <div className="form-container">
      <h2>Submit New Request</h2>
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
          <label>Description</label>
          <textarea 
            name="description" 
            rows="3"
            value={formData.description} 
            onChange={handleChange} 
            className={errors.description ? "input-error" : ""} 
          />
          {errors.description && <p className="error-text">{errors.description}</p>}
        </div>

        <div className="input-group">
          <label>Priority Level</label>
          <select name="priority" value={formData.priority} onChange={handleChange}>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High (System Down)</option>
          </select>
        </div>

        <button type="submit" className="btn-submit">Submit Ticket</button>
      </form>
    </div>
  );
};

export default TicketForm;