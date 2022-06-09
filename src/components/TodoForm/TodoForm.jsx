import './TodoForm.scss';
import Button from '../Button';
import { useState, useCallback } from 'react';
import toast from 'react-hot-toast';

const TodoForm = ({
  todo: { title: text, id: todoId },
  onAddTodo,
  onEditTodo,
}) => {
  const [taskText, setTaskText] = useState(text);
  const [disabledBtn, setDisabledBtn] = useState(false);

  const handleChange = useCallback(e => {
    const { value } = e.target;
    setTaskText(value);
  }, []);

  const handleSubmit = useCallback(
    e => {
      e.preventDefault();
      if (!taskText.trim()) {
        toast.error('Задание не может быть пустым');
        resetForm();
        return;
      }

      if (text) {
        onEditTodo(todoId, taskText);
        resetForm();
        setDisabledBtn(true);
        return;
      }

      onAddTodo(taskText);
      resetForm();
      setDisabledBtn(true);
    },
    [taskText, text, todoId],
  );

  const resetForm = () => {
    setTaskText('');
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <label htmlFor="task">Write your task:</label>
      <textarea
        autoFocus
        name="task"
        cols="30"
        rows="10"
        value={taskText}
        onChange={handleChange}
      ></textarea>

      <Button title="Add task" type="submit" disabled={disabledBtn} />
    </form>
  );
};

export default TodoForm;
