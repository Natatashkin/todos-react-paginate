import { useState, useEffect, useCallback } from 'react';
import classNames from 'classnames';
import { IconButton } from '../IconButton';
import { RiDeleteBin6Line, RiEditLine } from 'react-icons/ri';

const Todo = ({ task, onDeleteTodo, openModal, updateTodo }) => {
  const { completed, title, id } = task;
  const [completedStatus, setCompletedStatus] = useState(completed);
  const [disabledDelete, setDisabledDelete] = useState(false);
  const [disabledEdit, setDisabledEdit] = useState(completed);

  const handleChange = useCallback(
    async e => {
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

  return (
    <>
      <li className="todo">
        <input
          className="todo-checkbox"
          type="checkbox"
          onChange={handleChange}
          checked={completedStatus}
          name="checkbox"
        />
        <p
          className={classNames([
            'todo-task',
            { 'todo-task--completed': completedStatus },
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
            tooltipText="Edit ToDo"
          />
          <IconButton
            icon={<RiDeleteBin6Line />}
            onClick={handleDeletClick}
            type="button"
            disabled={disabledDelete}
            tooltipText="Delete ToDo"
          />
        </div>
      </li>
    </>
  );
};

export default Todo;
