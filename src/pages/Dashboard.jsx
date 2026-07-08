import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Dashboard() {
  const [patientCount, setPatientCount] = useState(0);
  const [ticketCount, setTicketCount] = useState(0);
  const [patientsList, setPatientsList] = useState([]);

  useEffect(() => {
    const patients = JSON.parse(localStorage.getItem('patients') || '[]');
    const tickets = JSON.parse(localStorage.getItem('tickets') || '[]');
    setPatientCount(patients.length);
    setTicketCount(tickets.length);
    setPatientsList(patients);
  }, []);

  return (
    <div>
      <h2>Welcome to the Hospital Management System</h2>
      <p>This is a simple system to manage hospital operations efficiently.</p>
      
      <div className="grid">
        <div className="card">
          <h3>Total Registered Patients</h3>
          <p style={{ fontSize: '24px', fontWeight: 'bold' }}>{patientCount}</p>
        </div>
        <div className="card">
          <h3>Total OP Tickets Today</h3>
          <p style={{ fontSize: '24px', fontWeight: 'bold' }}>{ticketCount}</p>
        </div>
      </div>

      <div style={{ marginTop: '20px' }}>
        <h3>Recent Registrations</h3>
        {patientsList.length === 0 ? (
          <p>No recent activity.</p>
        ) : (
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            {patientsList.slice(-3).reverse().map(p => (
              <li key={p.id} style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>
                <strong>{p.name}</strong> registered. (Blood Group: {p.bloodGroup})
              </li>
            ))}
          </ul>
        )}
      </div>

      <div style={{ marginTop: '20px' }}>
        <h3>Quick Actions</h3>
        <Link to="/register"><button style={{ marginRight: '10px' }}>New Patient</button></Link>
        <Link to="/ticket"><button>Generate OP Ticket</button></Link>
      </div>
    </div>
  );
}

export default Dashboard;
