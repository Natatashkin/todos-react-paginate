import { Button } from '../Button';
import { useState } from 'react';
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

const Filter = ({ getFilter }) => {
  // const [statusList, setStatusList] = useState(statusOptions);
  const [inputValue, setInputValue] = useState('');
  const [checkedStatus, setCheckedStatus] = useState('all');

  const handleFilterChange = ({ target: { value } }) => {
    setInputValue(value);
  };
  const handleStatusChange = e => {
    console.log(e.target.value);
    setCheckedStatus(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDevault();
    console.log(inputValue);
    console.log(checkedStatus);
    console.log({ inputValue, checkedStatus });
  };

  const handleResetInput = () => {
    setInputValue('');
  };

  return (
    <form className="filter" onSubmit={handleSubmit}>
      <div className="filter-wrapper">
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
      <div className="filter-buttons">
        <Button type="submit" title="Search" />
        <Button type="button" title="Reset" />
      </div>
    </form>
  );
};

export default Filter;
