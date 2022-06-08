import './Todo.scss';
import { useState } from 'react';
import classNames from 'classnames';
import IconButton from '../IconButton';
import Modal from '../Modal';
import AddTodoForm from '../Forms/addTodoForm';
import { RiDeleteBin6Line, RiEditLine } from 'react-icons/ri';

const Todo = ({ task, onDeleteTodo, onEditTodo }) => {
  const { completed, title, id } = task;
  const [checked, setChecked] = useState(completed);
  const [disabled, setDisabled] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const handleChange = e => {
    const { checked: innerChecked } = e.target;
    setChecked(innerChecked);
  };

  const handleDelitClick = id => {
    onDeleteTodo(id);
    setDisabled(true);
  };

  const handleEditClick = id => {
    setOpenModal(true);
  };

  const handleCloseModal = e => {
    if (e.target === e.currentTarget) {
      setOpenModal(false);
    }
  };

  return (
    <>
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
        <IconButton
          icon={<RiEditLine />}
          type="button"
          onClick={handleEditClick}
        />
        <IconButton
          icon={<RiDeleteBin6Line />}
          onClick={() => handleDelitClick(id)}
          type="button"
          disabled={disabled}
        />
      </li>
      <Modal open={openModal} onClose={handleCloseModal}>
        <AddTodoForm todoId={id} text={title} onEditTodo={onEditTodo} />
      </Modal>
    </>
  );
};

export default Todo;
