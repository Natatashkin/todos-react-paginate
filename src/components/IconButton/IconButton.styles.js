import makeStyles from '@mui/styles/makeStyles';

export const useStyles = makeStyles(theme => {
  const {
    colors: { $black, $orange, $white },
    options: { radius },
    spaces,
  } = theme;
  return {
    buttonColor: {
      borderRadius: radius,
      padding: spaces(1),
      fontSize: '14px',
      '&:hover, &:focus': {
        backgroundColor: $orange,
      },

      '&:hover svg': {
        fill: $white,
      },

      '&:focus svg': {
        fill: $white,
      },

      '& svg': {
        fill: $black,
        fontSize: '20px',
      },
    },

    iconPositionModal: {
      position: 'absolute',
      top: '10px',
      right: '10px',
      cursor: 'pointer',
    },

    iconPositionFilter: {
      '& svg': {
        fontSize: '14px',
      },
    },
  };
});
