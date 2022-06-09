import Todo from '../Todo';
import './TodoList.scss';
import { Oval } from 'react-loader-spinner';

const TodoList = ({ tasks, onDeleteTodo, onEditTodo, openModal }) => {
  return (
    <>
      <ul className="todo-list">
        {tasks ? (
          tasks.map(task => (
            <Todo
              key={task.id}
              task={task}
              onDeleteTodo={onDeleteTodo}
              onEditTodo={onEditTodo}
              openModal={openModal}
            />
          ))
        ) : (
          <Oval color="#294b8a" height={40} width={40} />
        )}
      </ul>
    </>
  );
};

export default TodoList;
