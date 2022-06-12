import Todo from '../Todo';

const TodoList = ({
  tasks,
  onEditTodoStatus,
  onDeleteTodo,
  getTodo,
  openModal,
}) => {
  return (
    <ul className="todo-list">
      {Boolean(tasks.length) &&
        tasks.map(task => (
          <Todo
            key={task.id}
            task={task}
            onDeleteTodo={onDeleteTodo}
            onEditTodoStatus={onEditTodoStatus}
            openModal={openModal}
            getTodo={getTodo}
          />
        ))}
    </ul>
  );
};

export default TodoList;
