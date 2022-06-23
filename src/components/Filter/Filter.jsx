import { Button } from '../Button';
import { useCallback, useRef, useState } from 'react';
import { IconButton } from 'components/IconButton';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import InputAdornment from '@mui/material/InputAdornment';
import CloseIcon from '@mui/icons-material/Close';
import { useForm, Controller } from 'react-hook-form';
import { RiCloseFill } from 'react-icons/ri';
import classNames from 'classnames';
import { useStyles } from './Filter.styles';

const DEFAULT_STATUS = 'all';

const statusOptions = [
  {
    id: 'complited',
    value: 'completed',
    label: 'Completed',
  },
  {
    id: 'notCompleted',
    value: 'notCompleted',
    label: 'Not Completed',
  },
  {
    id: 'all',
    value: 'all',
    label: 'All Todos',
  },
];

const Filter = ({ getFormValues, resetPage }) => {
  const { handleSubmit, control, resetField, watch } = useForm({
    defaultValues: {
        filter: '', 
        status: DEFAULT_STATUS
  }});
  // const [inputValue, setInputValue] = useState('');
  // const [checkedStatus, setCheckedStatus] = useState(DEFAULT_STATUS);
  const [disableSearch, setDisableSearch] = useState(false);
  const [disabledReset, setDisabledReset] = useState(true);
  // const inputRef = useRef();
  // const [isFocus, setIsFocus] = useState(false);

  const styles = useStyles();

  console.log(watch('filter'));

  // const handleFilterChange = useCallback(({ target: { value } }) => {
  //   setInputValue(value);
  //   setDisabledReset(!disabledReset);
  // }, []);

  // const handleStatusChange = useCallback(e => {
  //   setCheckedStatus(e.target.value);
  //   setDisabledReset(!disabledReset);
  // }, []);

  // const resetFormData = useCallback(() => {
  //   document.getElementById('form').reset();
  // }, []);

  const onSubmit = useCallback(data => {
    // e.preventDefault();
    console.log(data);
    resetPage(1);
    // const formData = new FormData(e.target);
    // const formProps = Object.fromEntries(formData);
    getFormValues(data);
    // setDisableSearch(!disableSearch);
    // setDisabledReset(!disabledReset);
  }, []);

  // const handleResetInput = useCallback(() => {
  //   setInputValue('');
  // }, []);

  // const handleFormReset = useCallback(() => {
  //   setInputValue('');
  //   setCheckedStatus(DEFAULT_STATUS);
  //   resetFormData();
  //   getFormValues({ filter: '', status: DEFAULT_STATUS });
  //   setDisableSearch(false);
  //   setDisabledReset(true);
  //   resetPage(1);
  // }, [checkedStatus, inputValue]);

  const handleResetInput = () => resetField('filter')

  return (
    <form id="form" className="filter" onSubmit={handleSubmit(onSubmit)}>
      <Controller
        control={control}
        name="filter"
        render={({ field: { onChange, onBlur, value, ref } }) => (
          <TextField
            label="Search query"
            variant="outlined"
            onChange={onChange}
            onBlur={onBlur}
            selected={value}
            inputRef={ref}
            InputProps={{
              endAdornment: <InputAdornment position="end">
                <IconButton
                  // onClick={handleClickShowPassword}
                  // onMouseDown={handleMouseDownPassword}
                  edge="end"
                  icon={<CloseIcon />}
                  onClick={handleResetInput}
                />
            </InputAdornment>
            }}
           
          />
        )}
      />

      <Controller
        control={control}
        name="status"
        render={({ field: { onChange, onBlur, value: radioValue, ref } }) => (
          <FormControl>
              <FormLabel >Todo Status</FormLabel>
              <RadioGroup
                name="status"
                value={radioValue}
                onChange={onChange}
                ref={ref}
              >
                {statusOptions.map(({value, label})=><FormControlLabel key={value} value={value} control={<Radio />} label={label} />)}
              </RadioGroup>
          </FormControl>
        )}
      />
     
      <div className="filter-buttons">
        <Button
          type="button"
          title="Reset Form"
          disabled={disabledReset}
          // onClick={handleFormReset}
        />
        <Button type="submit" title="Search" disabled={disableSearch} />
      </div>
    </form>
  );
};

export default Filter;


/* <div
          className={classNames([
            'filter-field-wrapper',
            { 'filter-field-wrapper--onFocus': isFocus },
          ])}
        >
          <input
            className="filter-input"
            type="text"
            name="filter"
            value={inputValue}
            onChange={handleFilterChange}
            placeholder="Search Todo"
            ref={inputRef}
            onFocus={() => setIsFocus(!isFocus)}
            onBlur={() => setIsFocus(false)}
          />
          {inputValue && (
            <IconButton
              type="button"
              icon={<RiCloseFill />}
              tooltipText="Clear field"
              onClick={handleResetInput}
              parentComponent="filter"
            />
          )}
        </div> */


        // <div className="filter-options-wrapper">
      //   <ul className="status-list">
      //     {statusOptions.map(({ id, value, label }) => (
      //       <li key={id}>
      //         <input
      //           type="radio"
      //           name="status"
      //           id={id}
      //           value={value}
      //           checked={checkedStatus === value}
      //           onChange={handleStatusChange}
      //         />
      //         <label htmlFor="all">{label}</label>
      //       </li>
      //     ))}
      //   </ul>
      // </div>