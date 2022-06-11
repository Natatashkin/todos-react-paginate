import { Container } from 'components/Container';
import Navbar from '../NavBar';

const AppBar = () => {
  return (
    <header className="header">
      <Container>
        <Navbar />
      </Container>
    </header>
  );
};

export default AppBar;
