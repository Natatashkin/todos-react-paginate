import { NavLink } from 'react-router-dom';
import './NavBar.scss';

const NavBar = () => {
  return (
    <nav className="navbar">
      <NavLink to="/" className="link">
        Home
      </NavLink>
      <NavLink to="/dashboard" className="link">
        Dashboard
      </NavLink>
    </nav>
  );
};

export default NavBar;
