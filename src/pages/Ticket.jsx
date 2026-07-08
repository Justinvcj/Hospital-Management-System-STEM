import { useState, useEffect } from 'react';
import { doctors, departments } from '../data/mockData';

function Ticket() {
  const [patients, setPatients] = useState([]);
  const [formData, setFormData] = useState({
    patientId: '',
    departmentId: '',
    doctorId: ''
  });
  const [generatedTicket, setGeneratedTicket] = useState(null);

  useEffect(() => {
    const loadedPatients = JSON.parse(localStorage.getItem('patients') || '[]');
    setPatients(loadedPatients);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const availableDoctors = doctors.filter(
    (doc) => formData.departmentId === '' || doc.departmentId === parseInt(formData.departmentId)
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const patient = patients.find(p => p.id === parseInt(formData.patientId));
    const doctor = doctors.find(d => d.id === parseInt(formData.doctorId));
    const department = departments.find(d => d.id === parseInt(formData.departmentId));

    if (!patient || !doctor || !department) {
      alert("Please select valid options.");
      return;
    }

    const ticket = {
      ticketNo: 'TKT-' + Math.floor(Math.random() * 10000),
      date: new Date().toLocaleDateString(),
      patientName: patient.name,
      doctorName: doctor.name,
      departmentName: department.name,
      fee: doctor.fee
    };

    const existingTickets = JSON.parse(localStorage.getItem('tickets') || '[]');
    localStorage.setItem('tickets', JSON.stringify([...existingTickets, ticket]));

    setGeneratedTicket(ticket);
    setFormData({ patientId: '', departmentId: '', doctorId: '' });
  };

  return (
    <div>
      <h2>Book OP Ticket</h2>
      
      {!generatedTicket ? (
        <div className="card">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Select Patient:</label>
              <select name="patientId" value={formData.patientId} onChange={handleChange} required>
                <option value="">-- Choose Patient --</option>
                {patients.map(p => (
                  <option key={p.id} value={p.id}>{p.name} (ID: {p.id})</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label>Select Department:</label>
              <select name="departmentId" value={formData.departmentId} onChange={handleChange} required>
                <option value="">-- Choose Department --</option>
                {departments.map(d => (
                  <option key={d.id} value={d.id}>{d.name}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label>Select Doctor:</label>
              <select name="doctorId" value={formData.doctorId} onChange={handleChange} required>
                <option value="">-- Choose Doctor --</option>
                {availableDoctors.map(d => (
                  <option key={d.id} value={d.id}>{d.name} (${d.fee})</option>
                ))}
              </select>
            </div>

            <button type="submit">Generate Ticket</button>
          </form>
          {patients.length === 0 && (
            <p style={{ color: 'red', marginTop: '10px' }}>No patients found. Please register a patient first.</p>
          )}
        </div>
      ) : (
        <div className="ticket">
          <h3 style={{ margin: '0 0 10px 0', borderBottom: '1px solid #ccc', paddingBottom: '10px' }}>Hospital OP Ticket</h3>
          <p><strong>Ticket No:</strong> {generatedTicket.ticketNo}</p>
          <p><strong>Date:</strong> {generatedTicket.date}</p>
          <p><strong>Patient Name:</strong> {generatedTicket.patientName}</p>
          <p><strong>Department:</strong> {generatedTicket.departmentName}</p>
          <p><strong>Consulting Doctor:</strong> {generatedTicket.doctorName}</p>
          <p><strong>Consultation Fee:</strong> ${generatedTicket.fee}</p>
          
          <div style={{ marginTop: '20px' }}>
            <button onClick={() => setGeneratedTicket(null)}>Book Another Ticket</button>
            <button onClick={() => window.print()} style={{ marginLeft: '10px', backgroundColor: '#555' }}>Print Ticket</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Ticket;
