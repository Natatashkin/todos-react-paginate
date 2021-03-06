import makeStyles from '@mui/styles/makeStyles';

export const useStyles = makeStyles(theme => {
  const {
    colors: { $black, $orange, $white, $darkGrey },
    options: { radius, time, cubic },
    spaces,
  } = theme;
  return {
    buttonColor: {
      borderRadius: radius,
      padding: spaces(1),
      fontSize: '14px',
      transition: `fill ${time} ${cubic}, background-color ${time} ${cubic}`,

      '&:hover, &:focus': {
        backgroundColor: $orange,
      },

      '&:hover svg': {
        fill: $white,
      },

      '&:focus svg': {
        fill: $white,
      },

      '&:disabled svg': {
        fill: $darkGrey,
      },

      '& svg': {
        fill: $black,
        fontSize: '20px',
      },
    },

    iconPositionModal: {
      position: 'absolute',
      top: spaces(2),
      right: spaces(2),
      cursor: 'pointer',
    },

    iconPositionFilter: {
      visibility: 'visibile',
      '& svg': {
        fontSize: '14px',
      },

      '&:disabled': {
        visibility: 'hidden'
      }
    },
  };
});
