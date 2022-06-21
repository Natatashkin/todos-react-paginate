// import { capitalize } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';

export const useStyles = makeStyles(theme => {
  const {
    colors: { $blue, $white, $orange, $darkGrey, $grey },
    spaces,
  } = theme;
  return {
    button: {
      backgroundColor: $blue,
      color: $white,
      padding: `${spaces(1)} ${spaces(2)}`,
      textTransform: 'capitalize',

      '&:hover, &:focus': {
        backgroundColor: $orange,
      },
    },

    disabledButton: {
      backgroundColor: $grey,
      color: $darkGrey,
      boxShadow: 'none',
    },
  };
});
