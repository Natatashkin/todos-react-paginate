import makeStyles from '@mui/styles/makeStyles';

export const useStyles = makeStyles(() => {
  return {
    container: {
      display: 'grid',
      gridTemplateColumns: '3fr 1fr',
      width: '100%',
    },
  };
});
