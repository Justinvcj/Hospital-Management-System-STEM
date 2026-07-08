import { useState } from 'react';
import { doctors, departments } from '../data/mockData';

function Doctors() {
  const [searchTerm, setSearchTerm] = useState('');

  const getDepartmentName = (deptId) => {
    const dept = departments.find(d => d.id === deptId);
    return dept ? dept.name : 'Unknown';
  };

  const filteredDoctors = doctors.filter(doc => {
    const searchLower = searchTerm.toLowerCase();
    const deptName = getDepartmentName(doc.departmentId).toLowerCase();
    return doc.name.toLowerCase().includes(searchLower) || deptName.includes(searchLower);
  });

  return (
    <div>
      <h2>Available Doctors</h2>
      <p>List of doctors currently working in the hospital.</p>

      <div style={{ marginBottom: '20px' }}>
        <input 
          type="text" 
          placeholder="Search by name or department..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ width: '100%', maxWidth: '400px' }}
        />
      </div>

      {filteredDoctors.length === 0 ? (
        <p>No doctors found matching your search.</p>
      ) : (
        <div className="grid">
          {filteredDoctors.map((doc) => (
            <div key={doc.id} className="card">
              <h3>{doc.name}</h3>
              <p><strong>Department:</strong> {getDepartmentName(doc.departmentId)}</p>
              <p><strong>Available:</strong> {doc.available}</p>
              <p><strong>Consultation Fee:</strong> ${doc.fee}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Doctors;
