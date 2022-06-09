import './Todo.scss';
import { useState, useCallback } from 'react';
import classNames from 'classnames';
import IconButton from '../IconButton';
import { RiDeleteBin6Line, RiEditLine } from 'react-icons/ri';

const Todo = ({ task, onDeleteTodo, openModal, getTodo, onEditTodoStatus }) => {
  const { completed, title, id } = task;
  const [checked, setChecked] = useState(completed);
  const [disabledDelete, setDisabledDelete] = useState(false);
  const [disabledEdit, setDisabledEdit] = useState(completed);

  const handleChange = useCallback(
    e => {
      const { checked: innerChecked } = e.target;
      setChecked(innerChecked);
      setDisabledEdit(!checked);
      getTodo(task);
      onEditTodoStatus(id, { ...task, completed: !checked });
    },
    [checked],
  );

  const handleDelitClick = useCallback(id => {
    onDeleteTodo(id);
    setDisabledDelete(true);
    setDisabledEdit(true);
  }, []);

  return (
    <>
      <li className="todo">
        <input
          className="todo-checkbox"
          type="checkbox"
          onChange={handleChange}
          checked={checked}
          name="checkbox"
        />
        <p
          className={classNames([
            'todo-task',
            { 'todo-task--completed': checked },
          ])}
        >
          {title}
        </p>
        <div className="todo-buttons">
          <IconButton
            icon={<RiEditLine />}
            type="button"
            onClick={() => openModal(task)}
            disabled={disabledEdit}
          />
          <IconButton
            icon={<RiDeleteBin6Line />}
            onClick={() => handleDelitClick(id)}
            type="button"
            disabled={disabledDelete}
          />
        </div>
      </li>
    </>
  );
};

export default Todo;
