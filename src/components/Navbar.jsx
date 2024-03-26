import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <header>
      <h1>City Hospital System</h1>
      <nav>
        <Link to="/">Dashboard</Link>
        <Link to="/register">Register Patient</Link>
        <Link to="/departments">Departments</Link>
        <Link to="/doctors">Doctors</Link>
        <Link to="/ticket">Book Ticket</Link>
      </nav>
    </header>
  );
}

export default Navbar;
