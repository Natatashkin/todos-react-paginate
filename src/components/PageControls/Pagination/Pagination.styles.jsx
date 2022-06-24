import makeStyles from '@mui/styles/makeStyles';

export const useStyles = makeStyles(theme => {
  const {
    colors: { $black, $blue, $white, $grey, $darkGrey },
  } = theme;
  return {
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
