import './TodoAdd.scss';
import { useState } from 'react';
import IconButton from '../IconButton';
import { RiPlayListAddLine } from 'react-icons/ri';
import Modal from '../Modal';
import TodoForm from '../TodoForm';
import { Toaster } from 'react-hot-toast';

const TodoAdd = ({ onAddTodo }) => {
  const [openModal, setOpenModal] = useState(false);

  const handleAddTodo = () => {
    setOpenModal(true);
  };

  const handleCloseModal = e => {
    if (e.target === e.currentTarget) {
      setOpenModal(false);
    }
  };

  return (
    <div className="addTodo">
      <h4 className="addTodo-title">Add Todo</h4>
      <IconButton
        type="button"
        icon={<RiPlayListAddLine />}
        onClick={handleAddTodo}
      />
      <Modal open={openModal} onClose={handleCloseModal}>
        <TodoForm onAddTodo={onAddTodo} />
        <Toaster />
      </Modal>
    </div>
  );
};

export default TodoAdd;
