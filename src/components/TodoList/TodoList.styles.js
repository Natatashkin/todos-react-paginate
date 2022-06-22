import makeStyles from '@mui/styles/makeStyles';

export const useStyles = makeStyles(theme => {
  const { spaces } = theme;
  return {
    todoList: {
      display: 'flex',
      flexDirection: 'column',
      marginBottom: spaces(4),
    },
  };
});
