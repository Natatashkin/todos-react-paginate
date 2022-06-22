import { SpaSharp } from '@mui/icons-material';
import makeStyles from '@mui/styles/makeStyles';

export const useStyles = makeStyles(theme => {
  const {
    spaces,
    typography: {
      h4: { fontSize, fontWeight, lineHeight },
    },
  } = theme;
  return {
    option: {
      display: 'flex',
      alignItems: 'center',

      '&:not(:last-child)': {
        marginBottom: spaces(4),
      },
    },

    optionFilter: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',

      '& h4': {
        marginBottom: spaces(4),
      },
    },

    optionTitle: {
      width: '110px',
      marginRight: spaces(5),
      whiteSpace: 'nowrap',
      fontSize,
      fontWeight,
      lineHeight,
    },
  };
});
