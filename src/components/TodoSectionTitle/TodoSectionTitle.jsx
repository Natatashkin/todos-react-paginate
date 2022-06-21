import Typography from '@mui/material/Typography';
import { useStyles } from './TodoSectionTitle.styles';

const TodoSectionTitle = ({ title }) => {
  const styles = useStyles();
  return (
    <Typography variant="h3" gutterBottom classes={{ h3: styles.sectionTitle }}>
      {title}
    </Typography>
  );
};

export default TodoSectionTitle;
