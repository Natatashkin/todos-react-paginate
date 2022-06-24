import makeStyles from '@mui/styles/makeStyles';

export const useStyles = makeStyles(theme => {
  const {
    spaces,
    colors: { $white },
    options: { radius },
  } = theme;
  return {
    section: {
      padding: spaces(4),
      marginBottom: spaces(4),
      backgroundColor: $white,
      borderRadius: radius,
    },
  };
});
