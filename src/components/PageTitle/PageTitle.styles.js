import makeStyles from '@mui/styles/makeStyles';

export const useStyles = makeStyles(theme => {
  const {
    typography: {
      h2: { fontSize, fontWeight },
    },
    spaces,
  } = theme;
  return {
    pageTitle: {
      fontSize: fontSize,
      fontWeight: fontWeight,
      paddingTop: spaces(5),
      marginBottom: spaces(6),

      '@media (max-width: 825px)': {
        marginLeft: spaces(4),
      },
    },
  };
});
