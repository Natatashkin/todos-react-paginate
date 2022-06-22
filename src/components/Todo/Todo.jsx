import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import Checkbox from '@mui/material/Checkbox';
import { TodoControls } from 'components/TodoControls';
import { useStyles } from './Todo.styles';
import { useState, useCallback } from 'react';
import classNames from 'classnames';

const Todo = ({ task, onDeleteTodo, openModal, updateTodo }) => {
  const { completed, title } = task;
  const [completedStatus, setCompletedStatus] = useState(completed);
  const [disabledDelete, setDisabledDelete] = useState(false);
  const [disabledEdit, setDisabledEdit] = useState(completed);

  const styles = useStyles();

  const handleChange = useCallback(
    e => {
      const { checked } = e.target;
      setCompletedStatus(checked);
      setDisabledEdit(checked);
      updateTodo({ ...task, completed: checked });
    },
    [task],
  );

  const handleDeletClick = useCallback(() => {
    setDisabledEdit(!disabledEdit);
    setDisabledDelete(true);
    onDeleteTodo(task);
  }, []);

  const handleTodoClick = e => {
    setCompletedStatus(!completedStatus);
    setDisabledEdit(!completedStatus);
    updateTodo({ ...task, completed: !completedStatus });
  };

  return (
    <ListItem
      className={styles.todoContainer}
      disablePadding
      secondaryAction={
        <TodoControls
          openModal={() => openModal(task)}
          deleteTodo={handleDeletClick}
          disabledEdit={disabledEdit}
          disabledDelete={disabledDelete}
        />
      }
    >
      <ListItemButton
        classes={{ root: styles.rightPadding }}
        onClick={handleTodoClick}
      >
        <ListItemIcon>
          <Checkbox
            className={classNames([
              [styles.checkbox],
              { [styles.checkboxChecked]: completedStatus },
            ])}
            edge="start"
            checked={completedStatus}
            onChange={handleChange}
            disableRipple
          />
        </ListItemIcon>
        <ListItemText
          className={classNames([
            [styles.todoText],
            { [styles.todoComplitedText]: completedStatus },
          ])}
        >
          {title}
        </ListItemText>
      </ListItemButton>
    </ListItem>
  );
};

export default Todo;
