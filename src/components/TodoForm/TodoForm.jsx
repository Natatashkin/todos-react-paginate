import './TodoForm.scss';
import Button from '../Button';
import { useState } from 'react';
import toast from 'react-hot-toast';

const TodoForm = ({ onAddTodo, todoId, text = '', onEditTodo }) => {
  const [taskText, setTaskText] = useState(text);
  const handleChange = e => {
    const { value } = e.target;
    setTaskText(value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    if (!taskText) {
      toast.error('Задание не может быть пустым');
      return;
    }
    if (text) {
      onEditTodo(todoId, taskText);
      resetForm();
      return;
    }
    onAddTodo(taskText);
    resetForm();
  };

  const resetForm = () => {
    setTaskText('');
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <label htmlFor="task">Write your task:</label>
      <textarea
        name="task"
        cols="30"
        rows="10"
        value={taskText}
        onChange={handleChange}
      ></textarea>

      <Button title="Add task" type="submit" />
    </form>
  );
};

export default TodoForm;
