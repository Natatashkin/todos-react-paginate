import { IconButton } from '../IconButton';
import { RiPlayListAddLine } from 'react-icons/ri';

const TodoAdd = ({ openModal }) => {
  return (
    <div className="addTodo">
      <IconButton
        icon={<RiPlayListAddLine />}
        onClick={openModal}
        tooltipText="Add Todo"
      />
    </div>
  );
};

export default TodoAdd;
