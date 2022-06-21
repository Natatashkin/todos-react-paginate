import makeStyles from '@mui/styles/makeStyles';

export const useStyles = makeStyles(theme => {
  const {
    colors: { $blue },
  } = theme;
  return {
    header: {
      backgroundColor: $blue,
    },
  };
});
