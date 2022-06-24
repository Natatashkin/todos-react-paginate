import Box from '@mui/material/Box';
import { useStyles } from './Option.styles';
import Typography from '@mui/material/Typography';
import classNames from 'classnames';

const Option = ({ title, variant='row', children }) => {
  const styles = useStyles();
  return (
    <Box variant={variant}
      className={classNames([
        [styles.option],
        { [styles.optionFilter]: variant === 'column' },
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
