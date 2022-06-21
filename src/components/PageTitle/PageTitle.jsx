import Typography from '@mui/material/Typography';
import { useStyles } from './PageTitle.styles';

const PageTitle = ({ title }) => {
  const styles = useStyles();
  return (
    <Typography variant="h2" gutterBottom classes={{ h2: styles.pageTitle }}>
      {title}
    </Typography>
  );
};

export default PageTitle;
