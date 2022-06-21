import makeStyles from '@mui/styles/makeStyles';

export const useStyles = makeStyles(theme => {
  const {
    colors: { $grey, $darkGrey, $blue, $black, $white },
    spaces,
  } = theme;

  return {
    container: {
      display: 'grid',
      gridTemplateColumns: '3fr 1fr',
      width: '100%',
    },

    form: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'end',
      width: '190px',
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

    paginationContainer: {
      width: '100%',
    },

    paginationList: {
      width: '100%',
      visibility: 'visibile',
    },

    paginationListHidden: {
      visibility: 'hidden',
    },

    pageText: {
      '& button': {
        color: $black,
      },

      '& .Mui-selected': {
        backgroundColor: $blue,
        color: $white,
      },

      '& .Mui-focusVisible': {
        backgroundColor: $grey,
        color: $black,
      },

      '& .Mui-disabled': {
        color: $darkGrey,
      },
    },
  };
});
