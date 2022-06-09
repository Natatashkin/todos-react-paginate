import './TodoAdd.scss';
// import { useState } from 'react';
import IconButton from '../IconButton';
import { RiPlayListAddLine } from 'react-icons/ri';

const TodoAdd = ({ openModal }) => {
  return (
    <div className="addTodo">
      <h4 className="addTodo-title">Add Todo</h4>
      <IconButton
        type="button"
        icon={<RiPlayListAddLine />}
        onClick={openModal}
      />
    </div>
  );
};

export default TodoAdd;
