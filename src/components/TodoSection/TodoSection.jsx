import TodoSectionTitle from '../TodoSectionTitle';
import { useStyles } from './_TodoSection.styles';
import Box from '@mui/material/Box';

const TodoSection = ({ title, children }) => {
  const styles = useStyles();
  return (
    <Box className={styles.section}>
      <TodoSectionTitle title={title} />
      {children}
    </Box>
  );
};

export default TodoSection;
