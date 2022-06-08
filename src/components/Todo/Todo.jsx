import './Todo.scss';
import { useState } from 'react';
import classNames from 'classnames';
import { Toaster } from 'react-hot-toast';
import IconButton from '../IconButton';
import Modal from '../Modal';
import TodoForm from '../TodoForm';
import { RiDeleteBin6Line, RiEditLine } from 'react-icons/ri';

const Todo = ({ task, onDeleteTodo, onEditTodo }) => {
  const { completed, title, id } = task;
  const [checked, setChecked] = useState(completed);
  const [disabledDelete, setDisabledDelete] = useState(false);
  const [disabledEdit, setDisabledEdit] = useState(completed);
  const [openModal, setOpenModal] = useState(false);

  const handleChange = e => {
    const { checked: innerChecked } = e.target;
    setChecked(innerChecked);
    setDisabledEdit(true);
  };

  const handleDelitClick = id => {
    onDeleteTodo(id);
    setDisabledDelete(true);
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
            onClick={handleEditClick}
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
      <Modal open={openModal} onClose={handleCloseModal}>
        <TodoForm todoId={id} text={title} onEditTodo={onEditTodo} />
        <Toaster />
      </Modal>
    </>
  );
};

export default Todo;
