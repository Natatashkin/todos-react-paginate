import { Button } from '../Button';
import { useCallback, useState } from 'react';
import { IconButton } from 'components/IconButton';
import { RiCloseFill } from 'react-icons/ri';

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

const Filter = ({ getFormValues }) => {
  const [inputValue, setInputValue] = useState('');
  const [checkedStatus, setCheckedStatus] = useState(DEFAULT_STATUS);
  const [disableSearch, setDisableSearch] = useState(false);
  const [disabledReset, setDisabledReset] = useState(true);

  const handleFilterChange = useCallback(({ target: { value } }) => {
    setInputValue(value);
    setDisabledReset(!disabledReset);
  }, []);

  const handleStatusChange = useCallback(e => {
    setCheckedStatus(e.target.value);
    setDisabledReset(!disabledReset);
  }, []);

  const createFormData = useCallback(() => {
    const formData = new FormData();
    formData.set('query', inputValue);
    formData.set('status', checkedStatus);
    return formData;
  }, [inputValue, checkedStatus]);

  const resetFormData = useCallback(() => {
    const formData = new FormData();
    formData.set('query', '');
    formData.set('status', DEFAULT_STATUS);
    return formData;
  }, []);

  const handleSubmit = useCallback(
    e => {
      e.preventDefault();
      const formData = createFormData();
      getFormValues(formData);
      setDisableSearch(!disableSearch);
    },
    [inputValue, checkedStatus],
  );

  const handleResetInput = useCallback(() => {
    setInputValue('');
  }, []);

  const handleFormReset = useCallback(() => {
    setInputValue('');
    setCheckedStatus('all');
    const formData = resetFormData();
    getFormValues(formData);
    setDisableSearch(false);
  }, []);

  return (
    <form className="filter" onSubmit={handleSubmit}>
      <div className="filter-options-wrapper">
        <div className="filter-field-wrapper">
          <input
            className="filter-input"
            type="text"
            name="filter"
            value={inputValue}
            onChange={handleFilterChange}
            placeholder="Search Todo"
          />
          {inputValue && (
            <IconButton
              type="button"
              icon={<RiCloseFill />}
              tooltipText="Clear field"
              onClick={handleResetInput}
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
