import Box from '@mui/material/Box';
import { useStyles } from './Option.styles';
import Typography from '@mui/material/Typography';
import classNames from 'classnames';

const Option = ({ title, child = '', children }) => {
  const styles = useStyles();
  return (
    <Box
      className={classNames([
        [styles.option],
        { [styles.optionFilter]: child === 'filter' },
      ])}
    >
      <Typography variant="h4" classes={{ h4: styles.optionTitle }}>
        {title}
      </Typography>
      {children}
    </Box>
  );
};

export default Option;
