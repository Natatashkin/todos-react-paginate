import { RowingTwoTone } from '@mui/icons-material';
import makeStyles from '@mui/styles/makeStyles';

export const useStyles = makeStyles(theme => {
  const {spaces, colors: {}} = theme;
  return {
    form: {
      display: 'flex',
      flexDirection: 'column',
      // width: '100%',
    },

    formFields: {
      display: 'flex',
      flexDirection: 'row',

      '@media (max-width: 825px)': {
        flexDirection: 'column'
      }
    },

    textFieldContainer: {
      width: '300px',
      marginRight: spaces(4),
      paddingBottom: spaces(2)
    },

    radioGroup: {
      display: 'flex',
      flexDirection: 'row',
    },

    buttonsContainer: {
      display: 'flex',
      justifyContent: 'center',

      '& button:not(:last-child)': {
        marginRight: spaces(2),
      }
    }
  }
});
