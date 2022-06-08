import Todo from '../Todo';
import './TodoList.scss';

const TodoList = ({ tasks, onDeleteTodo, onEditTodo }) => (
  <>
    <ul className="todo-list">
      {tasks &&
        tasks.map(task => (
          <Todo
            key={task.id}
            task={task}
            onDeleteTodo={onDeleteTodo}
            onEditTodo={onEditTodo}
          />
        ))}
    </ul>
  </>
);

export default TodoList;
