import './Todo.scss';
import { useState } from 'react';
import classNames from 'classnames';
import IconButton from '../IconButton';
import { RiDeleteBin6Line, RiEditLine } from 'react-icons/ri';
import { useRef } from 'react';

const Todo = ({ task, onDeleteTodo }) => {
  const { completed, title, id } = task;
  const [checked, setChecked] = useState(completed);
  const [disabled, setDisabled] = useState(false);

  const handleChange = e => {
    const { checked: innerChecked } = e.target;
    setChecked(innerChecked);
  };

  return (
    <li className="todo">
      <input
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
      <IconButton icon={<RiEditLine />} type="button" />
      <IconButton
        icon={<RiDeleteBin6Line />}
        onClick={() => {
          onDeleteTodo(id);
          setDisabled(true);
        }}
        type="button"
        disabled={disabled}
      />
    </li>
  );
};

export default Todo;
