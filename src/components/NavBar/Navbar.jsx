import { NavLink } from 'react-router-dom';

const links = [
  // map NavLinks
  { id: '1', path: '/', title: 'Home' },
  { id: '2', path: '/dashboard', title: 'Dashboard' },
];

const NavBar = () => {
  return (
    <nav className="navbar">
      {links.map(({ id, path, title }) => (
        <NavLink key={id} to={path} className="link">
          {title}
        </NavLink>
      ))}
    </nav>
  );
};

export default NavBar;
