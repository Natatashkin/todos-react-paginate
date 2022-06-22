import makeStyles from '@mui/styles/makeStyles';

export const useStyles = makeStyles(theme => {
  const {
    spaces,
    options: { radius, shadow },
    colors: { $white, $lightBlue, $blue, $black, $darkGrey },
  } = theme;
  return {
    todoContainer: {
      borderRadius: radius,
      backgroundColor: $white,
      boxShadow: shadow,

      '&:not(:last-child)': {
        marginBottom: spaces(3),
      },

      '&:hover': {
        backgroundColor: $lightBlue,
      },
    },
    rightPadding: {
      paddingRight: '85px',
    },

    checkbox: {
      color: $black,
    },

    checkboxChecked: {
      color: $blue,
    },

    todoText: {
      color: $black,
    },

    todoComplitedText: {
      color: $darkGrey,
      textDecoration: 'line-through',
    },
  };
});
