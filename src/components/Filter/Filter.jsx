import { Button } from '../Button';
import { MdClear } from 'react-icons/md';
import { useState, useCallback, useRef } from 'react';
import classNames from 'classnames';
import { RiSearchLine } from 'react-icons/ri';

const statusOptions = [
  {
    id: 'complited',
    value: 'completed',
    label: 'Complited',
  },
  {
    id: 'notCompleted',
    value: 'notCompleted',
    label: 'Not Complited',
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
  const handleSubmit = () => {};
  // console.log(checkedStatus);
  return (
    <form className="filter" onSubmit={handleSubmit}>
      <div className="filter-wrapper">
        <input
          className="filter-input"
          type="text"
          name="filter"
          value={inputValue}
          onChange={handleFilterChange}
        />
      </div>
      <ul className="status-list">
        {statusOptions.map(({ id, value, label, checked }) => {
          return (
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
          );
        })}
      </ul>
      <Button type="submit" title="Search" />
      <Button type="button" title="Reset" />
    </form>
  );
};

export default Filter;
