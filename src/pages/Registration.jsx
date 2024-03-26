import { useState } from 'react';

function Registration() {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    contact: '',
    bloodGroup: '',
    address: ''
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPatient = { ...formData, id: Date.now() };
    const existingPatients = JSON.parse(localStorage.getItem('patients') || '[]');
    localStorage.setItem('patients', JSON.stringify([...existingPatients, newPatient]));
    
    setMessage('Patient Registered Successfully! Patient ID: ' + newPatient.id);
    setFormData({ name: '', age: '', gender: '', contact: '', bloodGroup: '', address: '' });
  };

  return (
    <div>
      <h2>New Patient Registration</h2>
      {message && <div style={{ color: 'green', marginBottom: '15px', fontWeight: 'bold' }}>{message}</div>}
      
      <div className="card">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Full Name:</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Age:</label>
            <input type="number" name="age" value={formData.age} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Gender:</label>
            <select name="gender" value={formData.gender} onChange={handleChange} required>
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="form-group">
            <label>Contact Number:</label>
            <input type="tel" name="contact" value={formData.contact} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Blood Group:</label>
            <input type="text" name="bloodGroup" value={formData.bloodGroup} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Address:</label>
            <textarea name="address" value={formData.address} onChange={handleChange} required></textarea>
          </div>
          <button type="submit">Register Patient</button>
        </form>
      </div>
    </div>
  );
}

export default Registration;
