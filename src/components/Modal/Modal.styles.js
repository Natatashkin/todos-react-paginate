import makeStyles from '@mui/styles/makeStyles';

export const useStyles = makeStyles(theme => {
  const {
    spaces,
    options: { time, cubic },
  } = theme;
  return {
    paperPaddings: {
      padding: spaces(6),
    },
  };
});
