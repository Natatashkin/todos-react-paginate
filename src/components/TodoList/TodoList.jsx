import Todo from '../Todo';
import './TodoList.scss';

const TodoList = ({ tasks, onDeleteTodo }) => (
  <>
    <ul className="todo-list">
      {tasks &&
        tasks.map(task => (
          <Todo key={task.id} task={task} onDeleteTodo={onDeleteTodo} />
        ))}
    </ul>
  </>
);

export default TodoList;
