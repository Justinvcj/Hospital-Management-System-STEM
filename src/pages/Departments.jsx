import { departments } from '../data/mockData';

function Departments() {
  return (
    <div>
      <h2>Hospital Departments</h2>
      <p>List of all medical departments available in the hospital.</p>
      
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Department Name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {departments.map((dept) => (
            <tr key={dept.id}>
              <td>{dept.id}</td>
              <td><strong>{dept.name}</strong></td>
              <td>{dept.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Departments;
