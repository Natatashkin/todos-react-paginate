import makeStyles from '@mui/styles/makeStyles';

export const useStyles = makeStyles(theme => {
  const {
    spaces,
    colors: { $blue },
    options: { radius },
  } = theme;
  return {
    content: {
      padding: `${spaces(3)} ${spaces(0)}`,
    },
    textArea: {
      width: '100%',
      boxSizing: 'border-box',
      padding: spaces(3),
      borderColor: $blue,

      borderRadius: radius,
      overflow: 'hidden',
      fontSize: '16px',
      resize: 'none',
    },
  };
});
