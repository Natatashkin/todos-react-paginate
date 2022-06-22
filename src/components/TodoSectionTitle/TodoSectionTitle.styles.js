import makeStyles from '@mui/styles/makeStyles';

export const useStyles = makeStyles(theme => {
  const {
    typography: {
      h3: { fontSize, fontWeight },
    },
    colors: { $blue },
    spaces,
  } = theme;

  return {
    sectionTitle: {
      marginBottom: spaces(5),
      fontSize,
      fontWeight,
      color: $blue,
      textAlign: 'left',
    },
  };
});
