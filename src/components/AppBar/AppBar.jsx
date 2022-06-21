import { useStyles } from './AppBar.styles';
import { Container } from 'components/Container';
import Navbar from '../NavBar';

const AppBar = () => {
  const styles = useStyles();
  return (
    <header className={styles.header}>
      <Container>
        <Navbar />
      </Container>
    </header>
  );
};

export default AppBar;
