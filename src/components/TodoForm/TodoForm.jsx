import { Button } from '../Button';
import { useState, useCallback } from 'react';
import toast from 'react-hot-toast';

const TodoForm = ({ todo, onAddTodo, updateTodo, onClose }) => {
  const [taskText, setTaskText] = useState(todo?.title || '');
  const [disabledBtn, setDisabledBtn] = useState(false);

  const handleChange = useCallback(e => {
    const { value } = e.target;
    setTaskText(value);
  }, []);

  const handleSubmit = useCallback(
    e => {
      e.preventDefault();
      // не принимаем пустое поле текста
      if (!taskText) {
        toast.error('Задание не может быть пустым');
        resetForm();
        return;
      }

      // если текст в поле изначально есть, редaктируем
      if (todo?.title) {
        updateTodo({ ...todo, title: taskText });
        resetForm();
        setDisabledBtn(true);
        onClose();
        return;
      }

      // если поле задачи изначально пустое, добавляем todo
      onAddTodo(taskText.trim());
      resetForm();
      setDisabledBtn(true);
      onClose();
    },
    [taskText, todo],
  );

  const resetForm = () => {
    setTaskText('');
  };

  const resizeTextarea = e => {
    const textarea = e.target;
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
        <Button
          title={todo?.title && 'Edit Task'}
          type="submit"
          disabled={disabledBtn}
        />
      </div>
    </form>
  );
};

export default TodoForm;
