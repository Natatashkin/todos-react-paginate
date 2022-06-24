import makeStyles from '@mui/styles/makeStyles';

export const useStyles = makeStyles(theme => {
  const {
    colors: { $darkGrey, $black },
    spaces,
  } = theme;

  return {
    form: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'end',
      width: '190px',
      height: '40px',
      margin: '0px',
    },

    selectContainer: {
      paddingTop: spaces(2),
      paddingBottom: spaces(2),
      paddingLeft: spaces(2),
      border: `1px solid ${$darkGrey}`,
      color: $black,
    },

    iconColor: {
      fill: $darkGrey,
    },

    selectHelpertext: {
      color: $darkGrey,
    },
  };
});
