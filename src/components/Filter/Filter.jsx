import { Button } from '../Button';
import { useCallback, useEffect, useState } from 'react';
import { IconButton } from 'components/IconButton';
import { RiCloseFill } from 'react-icons/ri';

// import classNames from 'classnames';

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

const Filter = ({ defaultQuery, defaultStatus, getFormValues }) => {
  const [inputValue, setInputValue] = useState(defaultQuery);
  const [checkedStatus, setCheckedStatus] = useState(defaultStatus);

  useEffect(() => {}, []);
  const handleFilterChange = useCallback(({ target: { value } }) => {
    setInputValue(value);
  }, []);

  const handleStatusChange = useCallback(e => {
    setCheckedStatus(e.target.value);
  }, []);

  const createFormData = useCallback(() => {
    const formData = new FormData();
    formData.set('query', inputValue);
    formData.set('status', checkedStatus);
    return formData;
  }, [inputValue, checkedStatus]);

  const resetFormData = useCallback(() => {
    const formData = new FormData();
    formData.set('query', defaultQuery);
    formData.set('status', defaultStatus);
    return formData;
  }, []);

  const handleSubmit = useCallback(
    e => {
      e.preventDefault();
      const formData = createFormData();
      getFormValues(formData);

      // getFormValues({ inputValue, checkedStatus }));
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
        <Button type="button" title="Reset Form" onClick={handleFormReset} />
        <Button type="submit" title="Search" />
      </div>
    </form>
  );
};

export default Filter;
