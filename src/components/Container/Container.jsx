import Box from '@mui/material/Box';
import { useStyles } from './Container.styles';

const Container = ({ children }) => {
  const styles = useStyles();
  return <Box className={styles.container}>{children}</Box>;
};

export default Container;
