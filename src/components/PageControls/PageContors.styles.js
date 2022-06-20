import makeStyles from '@mui/styles/makeStyles';
import { grid } from '@mui/system';

export const useStyles = makeStyles(theme => {
  const {
    colors: { $grey, $darkGrey, $blue, $black },
    spaces,
  } = theme;

  return {
    container: {
      display: 'grid',
      gridTemplateColumns: '3fr 1fr',
      alignItems: 'center',
    },

    form: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-end',
      width: '100%',
      margin: '0px',
    },

    selectContainer: {
      paddingTop: spaces(2),
      paddingBottom: spaces(2),
      paddingLeft: spaces(2),
      border: `1px solid ${$darkGrey}`,
      color: `${$black}`,
    },

    selectHelpertext: {
      color: `${$darkGrey}`,
    },

    pageText: {
      '& .Mui-selected': {
        backgroundColor: `${$blue}`,
      },

      '& .Mui-focusVisible': {
        backgroundColor: `${$grey}`,
      },

      '& .Mui-disabled': {
        color: `${$grey}`,
      },
    },
  };
});
