import './TodoAdd.scss';
import IconButton from '../IconButton';
import { RiPlayListAddLine } from 'react-icons/ri';

const TodoAdd = () => {
  const handleAddTodo = e => {
    console.log(e.target);
  };

  return (
    <div className="addTodo">
      <h4 className="addTodo-title">Add Todo</h4>
      <IconButton
        type="button"
        icon={<RiPlayListAddLine />}
        onClick={handleAddTodo}
      />
    </div>
  );
};

export default TodoAdd;
