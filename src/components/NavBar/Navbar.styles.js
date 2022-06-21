import makeStyles from '@mui/styles/makeStyles';

export const useStyles = makeStyles(theme => {
  const {
    colors: { $orange, $white },
    spaces,
  } = theme;
  return {
    navbar: {
      display: 'flex',
    },

    navbarLink: {
      display: 'block',
      padding: `${spaces(5)} ${spaces(4)}`,
      color: $white,

      fontWeight: 700,
      textDecoration: 'none',

      '&.active': {
        color: $orange,
      },
    },
  };
});
