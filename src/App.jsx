import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Registration from './pages/Registration';
import Departments from './pages/Departments';
import Doctors from './pages/Doctors';
import Ticket from './pages/Ticket';
import Patients from './pages/Patients';
import ManageTickets from './pages/ManageTickets';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/patients" element={<Patients />} />
          <Route path="/departments" element={<Departments />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/ticket" element={<Ticket />} />
          <Route path="/manage-tickets" element={<ManageTickets />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
