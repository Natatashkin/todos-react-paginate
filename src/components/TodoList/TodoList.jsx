import Todo from '../Todo';
import './TodoList.scss';

const TodoList = ({ tasks, deleteTodo }) => (
  <>
    <ul className="todo-list">
      {tasks &&
        tasks.map(task => (
          <Todo key={task.id} data={task} deleteTodo={deleteTodo} />
        ))}
    </ul>
  </>
);

export default TodoList;
