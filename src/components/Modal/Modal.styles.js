import makeStyles from '@mui/styles/makeStyles';

export const useStyles = makeStyles(theme => {
  const {
    colors: { $blue },
    spaces,
    typography: {
      h3: { fontSize, fontWeight, lineHeight },
    },
  } = theme;
  return {
    paper: {
      width: '90%',
      padding: spaces(4),
    },

    dialogTitle: {
      padding: '0',
      fontSize,
      color: $blue,
      fontWeight,
      lineHeight,
    },
  };
});
