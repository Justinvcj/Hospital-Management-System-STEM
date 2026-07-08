import { useState, useEffect } from 'react';

function ManageTickets() {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    const loadedTickets = JSON.parse(localStorage.getItem('tickets') || '[]');
    setTickets(loadedTickets);
  }, []);

  const handleCancel = (ticketNo) => {
    if (window.confirm('Are you sure you want to cancel this ticket?')) {
      const updatedTickets = tickets.filter(t => t.ticketNo !== ticketNo);
      localStorage.setItem('tickets', JSON.stringify(updatedTickets));
      setTickets(updatedTickets);
    }
  };

  return (
    <div>
      <h2>Manage Tickets</h2>
      <p>View all booked OP tickets and cancel them if necessary.</p>

      {tickets.length === 0 ? (
        <p>No tickets booked yet.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Ticket No</th>
              <th>Date</th>
              <th>Patient</th>
              <th>Department</th>
              <th>Doctor</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {tickets.map(t => (
              <tr key={t.ticketNo}>
                <td>{t.ticketNo}</td>
                <td>{t.date}</td>
                <td>{t.patientName}</td>
                <td>{t.departmentName}</td>
                <td>{t.doctorName}</td>
                <td>
                  <button 
                    onClick={() => handleCancel(t.ticketNo)}
                    style={{ backgroundColor: '#cc0000', padding: '5px 10px', fontSize: '14px' }}
                  >
                    Cancel
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default ManageTickets;
