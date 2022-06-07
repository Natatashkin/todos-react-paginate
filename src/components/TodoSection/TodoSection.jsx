import './TodoSection.scss';
import TodoSectionTitle from '../TodoSectionTitle';

const TodoSection = ({ title, children }) => {
  return (
    <div className="section">
      <TodoSectionTitle title={title} />
      {children}
    </div>
  );
};

export default TodoSection;
