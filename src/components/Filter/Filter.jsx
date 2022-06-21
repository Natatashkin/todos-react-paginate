import { Button } from '../Button';
import { useCallback, useRef, useState } from 'react';
import { IconButton } from 'components/IconButton';
import { RiCloseFill } from 'react-icons/ri';
import classNames from 'classnames';

// import classNames from 'classnames';

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
  const [inputValue, setInputValue] = useState('');
  const [checkedStatus, setCheckedStatus] = useState(DEFAULT_STATUS);
  const [disableSearch, setDisableSearch] = useState(false);
  const [disabledReset, setDisabledReset] = useState(true);
  const inputRef = useRef();
  const [isFocus, setIsFocus] = useState(false);

  const handleFilterChange = useCallback(({ target: { value } }) => {
    setInputValue(value);
    setDisabledReset(!disabledReset);
  }, []);

  const handleStatusChange = useCallback(e => {
    setCheckedStatus(e.target.value);
    setDisabledReset(!disabledReset);
  }, []);

  const resetFormData = useCallback(() => {
    document.getElementById('form').reset();
  }, []);

  const handleSubmit = useCallback(e => {
    e.preventDefault();
    resetPage(1);
    const formData = new FormData(e.target);
    const formProps = Object.fromEntries(formData);
    getFormValues(formProps);
    setDisableSearch(!disableSearch);
    setDisabledReset(!disabledReset);
  }, []);

  const handleResetInput = useCallback(() => {
    setInputValue('');
  }, []);

  const handleFormReset = useCallback(() => {
    setInputValue('');
    setCheckedStatus(DEFAULT_STATUS);
    resetFormData();
    getFormValues({ filter: '', status: DEFAULT_STATUS });
    setDisableSearch(false);
    setDisabledReset(true);
    resetPage(1);
  }, [checkedStatus, inputValue]);

  return (
    <form id="form" className="filter" onSubmit={handleSubmit}>
      <div className="filter-options-wrapper">
        <div
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
              component="filter"
            />
          )}
        </div>
        <ul className="status-list">
          {statusOptions.map(({ id, value, label }) => (
            <li key={id}>
              <input
                type="radio"
                name="status"
                id={id}
                value={value}
                checked={checkedStatus === value}
                onChange={handleStatusChange}
              />
              <label htmlFor="all">{label}</label>
            </li>
          ))}
        </ul>
      </div>
      <div className="filter-buttons">
        <Button
          type="button"
          title="Reset Form"
          disabled={disabledReset}
          onClick={handleFormReset}
        />
        <Button type="submit" title="Search" disabled={disableSearch} />
      </div>
    </form>
  );
};

export default Filter;
