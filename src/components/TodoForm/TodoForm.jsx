import { Button } from '../Button';
import { useState, useEffect, useCallback } from 'react';
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
      const formTextAreaValue = data.formTextarea;
      if (!formTextAreaValue) {
        toast.error('Задание не может быть пустым');
        return;
      }

      // если текст в поле изначально есть, редaктируем
      if (todo?.title) {
        updateTodo({ ...todo, title: formTextAreaValue });
        setDisableButtonTask(true); 
        onClose();
        return;
      }

      // если поле задачи изначально пустое, добавляем todo
      onAddTodo(formTextAreaValue.trim());
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
  }, []);

  useEffect(()=>{
    if(textField === todo?.title) {
      setDisableButtonTask(true);
      return;
    }
     if (!textField) {
    setDisableCleardBtn(true);
    setDisableButtonTask(true);
      return;
    }
    setDisableCleardBtn(false);
    setDisableButtonTask(false);
  }, [textField, todo]);


  const submitButtonTitle = todo?.title && 'Edit Task';

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <Controller
        name="formTextarea"
        control={control}
        render={({ field: { onChange, value, ref } }) => {
          return <TextareaAutosize ref={ref} className={styles.textArea}
        value={value}
        onChange={onChange} onBlur={()=> setFocus('formTextarea')}/>
        }}
      />
      <DialogActions classes={{root: styles.formActions}}>
        <Button title="Clear" onClick={resetTextField} disabled={disableCleardBtn} />
        <Button title={submitButtonTitle} type="submit" disabled={disableButtonTask} />      
      </DialogActions>
    </form>
  );
};

export default TodoForm;
