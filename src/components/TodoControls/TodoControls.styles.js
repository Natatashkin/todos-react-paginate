import makeStyles from '@mui/styles/makeStyles';

export const useStyles = makeStyles(theme => {
  const { spaces } = theme;
  return {
    buttonContainer: {
      '& button:not(:last-child)': {
        marginRight: spaces(1),
      },
    },
  };
});
