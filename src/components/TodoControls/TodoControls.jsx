import Box from '@mui/material/Box';
import { IconButton } from '../IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useStyles } from './TodoControls.styles';

const TodoControls = ({
  openModal,
  deleteTodo,
  disabledEdit,
  disabledDelete,
}) => {
  const styles = useStyles();
  return (
    <Box className={styles.buttonContainer}>
      <IconButton
        edge="end"
        icon={<EditIcon />}
        type="button"
        onClick={openModal}
        disabled={disabledEdit}
        tooltipText="Edit ToDo"
      />
      <IconButton
        edge="end"
        aria-label="delete todo"
        icon={<DeleteIcon />}
        onClick={deleteTodo}
        type="button"
        disabled={disabledDelete}
        tooltipText="Delete ToDo"
      />
    </Box>
  );
};

export default TodoControls;
