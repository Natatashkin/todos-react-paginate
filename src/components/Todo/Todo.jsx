import './Todo.scss';

const Todo = ({ data }) => {
  const { completed, title } = data;
  return (
    <li className="todo">
      <input type="checkbox" />
      <p className="tack">{title}</p>
    </li>
  );
};

export default Todo;

// completed: false
// id: 1
// title: "delectus aut autem"
