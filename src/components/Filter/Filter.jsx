import { IconButton } from '../IconButton';
import { MdClear } from 'react-icons/md';
import { useState, useCallback } from 'react';

const Filter = ({ getFilter }) => {
  const [value, setValue] = useState('');
  const [disabledReset, setDisabledReset] = useState(false);

  const handleFilterChange = useCallback(e => {
    setDisabledReset(false);
    const { value } = e.target;
    setValue(value);
    getFilter(value);
  }, []);

  const handleFilterResetClick = useCallback(() => {
    setDisabledReset(true);
    setValue('');
    getFilter('');
  }, []);

  return (
    <div className="filter">
      <div className="filter-wrapper">
        <input
          className="filter-input"
          type="text"
          name="filter"
          value={value}
          onChange={handleFilterChange}
          placeholder=" "
        />
        <label htmlFor="filter" className="filter-title">
          Find todo
        </label>
        {value && (
          <IconButton
            icon={<MdClear />}
            type="button"
            onClick={handleFilterResetClick}
            disabled={disabledReset}
            tooltipText="Reset filter"
          />
        )}
      </div>
    </div>
  );
};

export default Filter;
