import Button from '../Button';
import { useState, useCallback } from 'react';
import toast from 'react-hot-toast';

const TodoForm = ({
  todo: { title: text, id: todoId },
  onAddTodo,
  onEditTodoText,
}) => {
  const [taskText, setTaskText] = useState(text);
  const [disabledBtn, setDisabledBtn] = useState(false);

  const handleChange = useCallback(e => {
    const { value } = e.target;
    setTaskText(value.trim());
  }, []);

  const handleSubmit = useCallback(
    e => {
      e.preventDefault();
      if (!taskText) {
        toast.error('Задание не может быть пустым');
        resetForm();
        return;
      }

      if (text) {
        onEditTodoText(todoId, taskText);
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

  const resizeTextarea = e => {
    const textarea = e.target;
    console.log(textarea.childNodes[0].offsetHeight);
    textarea.style.height = `${textarea.scrollHeight}px`;
    return textarea.scrollHeight;
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label htmlFor="task" className="form-label">
        Write your task:
      </label>
      <textarea
        className="form-field"
        autoFocus
        name="task"
        value={taskText}
        onChange={handleChange}
        onScroll={resizeTextarea}
      ></textarea>

      <div className="form-button">
        <Button title="Add task" type="submit" disabled={disabledBtn} />
      </div>
    </form>
  );
};

export default TodoForm;
