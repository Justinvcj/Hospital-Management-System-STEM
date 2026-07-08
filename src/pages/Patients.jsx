import { useState, useEffect } from 'react';

function Patients() {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    const loadedPatients = JSON.parse(localStorage.getItem('patients') || '[]');
    setPatients(loadedPatients);
  }, []);

  return (
    <div>
      <h2>Patient Directory</h2>
      <p>A complete list of all registered patients.</p>

      {patients.length === 0 ? (
        <p>No patients registered yet.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Age / Gender</th>
              <th>Blood Group</th>
              <th>Contact</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            {patients.map(p => (
              <tr key={p.id}>
                <td>{p.id}</td>
                <td><strong>{p.name}</strong></td>
                <td>{p.age} / {p.gender}</td>
                <td>{p.bloodGroup}</td>
                <td>{p.contact}</td>
                <td>{p.address}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Patients;
