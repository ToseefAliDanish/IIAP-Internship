import { useState } from 'react';

const TicketForm = () => {

  const [formData, setFormData] = useState({
    title: "",
    email: "",
    priority: "Low"
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // 3. The Submit Handler
  const handleSubmit = (event) => {
    event.preventDefault();
    
    console.log("New Ticket Submitted:", formData);
    
    setFormData({ title: "", email: "", priority: "Low" });
  };

  return (
    <div className="form-container">
      <h2>Submit a Support Ticket</h2>
      
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label>Issue Title</label>
        
          <input 
            type="text" 
            name="title" 
            value={formData.title} 
            onChange={handleChange} 
            required 
          />
        </div>

        <div className="input-group">
          <label>Contact Email</label>
          <input 
            type="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            required 
          />
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