import { useStyles } from './Navbar.styles';
import { NavLink } from 'react-router-dom';

const LINKS = [
  { id: '1', path: '/', title: 'Home' },
  { id: '2', path: '/dashboard', title: 'Dashboard' },
];

const NavBar = () => {
  const styles = useStyles();
  return (
    <nav className={styles.navbar}>
      {LINKS.map(({ id, path, title }) => (
        <NavLink key={id} to={path} className={styles.navbarLink}>
          {title}
        </NavLink>
      ))}
    </nav>
  );
};

export default NavBar;
