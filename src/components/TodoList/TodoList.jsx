import Todo from '../Todo';

const TodoList = ({ tasks, updateTodo, onDeleteTodo, getTodo, openModal }) => {
  return (
    <ul className="todo-list">
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
    </ul>
  );
};

export default TodoList;
