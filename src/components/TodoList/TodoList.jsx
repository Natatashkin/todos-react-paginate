import Todo from '../Todo';
import { useStyles } from './TodoList.styles';
import List from '@mui/material/List';

const TodoList = ({ tasks, updateTodo, onDeleteTodo, getTodo, openModal }) => {
  const styles = useStyles();
  return (
    <List classes={{ root: styles.todoList }} disablePadding={true}>
      {Boolean(tasks.length) &&
        tasks.map(task => (
          <Todo
            key={task.id}
            task={task}
            onDeleteTodo={onDeleteTodo}
            updateTodo={updateTodo}
            openModal={openModal}
            getTodo={getTodo}
          />
        ))}
    </List>
  );
};

export default TodoList;
