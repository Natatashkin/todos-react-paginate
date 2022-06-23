import { Button } from '../Button';
import { useState, useEffect,useRef, useCallback } from 'react';
import { useStyles } from './TodoForm.styles';
import {useForm, Controller} from 'react-hook-form';
import DialogActions from '@mui/material/DialogActions';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import toast from 'react-hot-toast';

const TodoForm = ({ todo, onAddTodo, updateTodo, onClose }) => {
  const {handleSubmit, control, watch, setFocus, resetField } = useForm({
    defaultValues: {
      formTextarea: todo?.title || '',
    }
  });
  const textField = watch('formTextarea');
  const [disableCleardBtn, setDisableCleardBtn] = useState(false);
  const [disableButtonTask, setDisableButtonTask] = useState(false);
  const styles = useStyles();

  const onSubmit = useCallback(
    data => {
      if (!data.formTextarea) {
        toast.error('Задание не может быть пустым');
        return;
      }

      // если текст в поле изначально есть, редaктируем
      if (todo?.title) {
        updateTodo({ ...todo, title: data.formTextarea });
        setDisableButtonTask(true); 
        onClose();
        return;
      }

      // если поле задачи изначально пустое, добавляем todo
      onAddTodo(data.formTextarea.trim());
      setDisableButtonTask(true);
      
      onClose();
    },
    [todo],
  );
  const resetTextField = () => {
    resetField('formTextarea')
  }

  useEffect(() => {
    setFocus('formTextarea');
  }, [setFocus]);

  useEffect(()=>{

    if (!textField) {
    setDisableCleardBtn(true)
      return;
    }
    setDisableCleardBtn(false)
  }, [textField]);

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <Controller
        name="formTextarea"
        control={control}
        render={({ field: { onChange, value, ref } }) => {
          return <TextareaAutosize ref={ref} className={styles.textArea}
        value={value}
        onChange={onChange}/>
        }}
      />
      <DialogActions>
        <Button title="Clear" onClick={resetTextField} disabled={disableCleardBtn} />
        <Button title={todo?.title && 'Edit Task'} type="submit" disabled={disableButtonTask} />      
      </DialogActions>
    </form>
  );
};

export default TodoForm;
