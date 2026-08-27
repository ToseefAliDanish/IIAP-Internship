"use client"; // REQUIRED: This tells Next.js we need browser interactivity (useState, onClick)

import { useState, useEffect } from 'react';

export default function JobsPage() {
  const [jobs, setJobs] = useState([]);
  const [formData, setFormData] = useState({ title: '', company: '' });

  // 1. READ: Fetch jobs from our Backend API when the page loads
  const fetchJobs = async () => {
    const res = await fetch('/api/jobs');
    const json = await res.json();
    if (json.success) setJobs(json.data);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  // 2. CREATE: Send new data to our POST route
  const handleAddJob = async (e) => {
    e.preventDefault();
    
    const res = await fetch('/api/jobs', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });

    if (res.ok) {
      setFormData({ title: '', company: '' }); // Clear form
      fetchJobs(); // Refresh the list!
    }
  };

  // 3. DELETE: Send a DELETE request to our Dynamic route
  const handleDelete = async (id) => {
    const res = await fetch(`/api/jobs/${id}`, { method: 'DELETE' });
    if (res.ok) fetchJobs(); // Refresh the list!
  };

  return (
    <div>
      <h1 style={{ color: '#0F172A', borderBottom: '2px solid #E2E8F0', paddingBottom: '10px' }}>Admin Dashboard</h1>
      
      {/* THE CREATE FORM */}
      <div style={{ background: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)', marginBottom: '30px' }}>
        <h3 style={{ marginTop: 0 }}>Post a New Job</h3>
        <form onSubmit={handleAddJob} style={{ display: 'flex', gap: '15px' }}>
          <input 
            type="text" 
            placeholder="Job Title (e.g. DevOps Engineer)" 
            value={formData.title}
            onChange={(e) => setFormData({...formData, title: e.target.value})}
            style={{ flex: 1, padding: '10px', borderRadius: '4px', border: '1px solid #CBD5E1' }}
            required
          />
          <input 
            type="text" 
            placeholder="Company" 
            value={formData.company}
            onChange={(e) => setFormData({...formData, company: e.target.value})}
            style={{ flex: 1, padding: '10px', borderRadius: '4px', border: '1px solid #CBD5E1' }}
            required
          />
          <button type="submit" style={{ background: '#10B981', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}>
            Add Job
          </button>
        </form>
      </div>

      {/* THE DATA GRID */}
      <div style={{ display: 'grid', gap: '15px' }}>
        {jobs.map(job => (
          <div key={job.id} style={{ background: 'white', padding: '20px', borderRadius: '8px', borderLeft: '4px solid #38BDF8', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <h2 style={{ margin: '0 0 5px 0', color: '#0F172A', fontSize: '18px' }}>{job.title}</h2>
              <p style={{ margin: 0, color: '#64748B' }}>{job.company}</p>
            </div>
            <button 
              onClick={() => handleDelete(job.id)} 
              style={{ background: '#EF4444', color: 'white', border: 'none', padding: '8px 15px', borderRadius: '4px', cursor: 'pointer' }}
            >
              Delete
            </button>
          </div>
        ))}
        {jobs.length === 0 && <p style={{ textAlign: 'center', color: '#64748B' }}>No jobs available. Add one above!</p>}
      </div>
    </div>
  );
}