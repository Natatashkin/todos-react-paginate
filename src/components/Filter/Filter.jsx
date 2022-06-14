import { IconButton } from '../IconButton';
import { MdClear } from 'react-icons/md';
import { useState, useCallback, useRef } from 'react';
import classNames from 'classnames';
import { RiSearchLine } from 'react-icons/ri';

const Filter = ({ getFilter }) => {
  const [value, setValue] = useState('');
  const [disabledReset, setDisabledReset] = useState(false);
  const [focus, setFocus] = useState(false);
  const [labelState, setLabelState] = useState(false);
  const inputRef = useRef();

  const focusToggle = () => {
    if (inputRef.current.value) {
      return;
    }
    setFocus(!focus);
    setLabelState(!labelState);
  };

  const labelClickTogle = () => {
    setLabelState(!labelState);
  };

  const handleOnBlur = () => {
    if (inputRef.current.value) {
      return;
    }
    focusToggle();
    labelClickTogle();
  };

  const handleLabelClick = () => {
    labelClickTogle();
    focusToggle();
    inputRef.current.focus();
  };

  const handleFilterChange = useCallback(() => {
    setDisabledReset(false);
    const { value } = inputRef.current;
    setValue(value.trim());
  }, []);

  const handleFilterResetClick = useCallback(() => {
    setDisabledReset(true);
    setValue('');
    setFocus(!focus);
    setLabelState(!labelState);
    getFilter('');
  }, [focus, labelState, getFilter]);

  const handleSubmit = e => {
    e.preventDefault();
    getFilter(value.trim());
  };

  return (
    <form className="filter" onSubmit={handleSubmit}>
      <div
        className={classNames([
          'filter-wrapper',
          {
            'filter-wrapper--onFocus': focus,
          },
        ])}
      >
        <label
          htmlFor="filter"
          className={classNames([
            'filter-title',
            { 'filter-title--onFocus': focus },
            { 'filter-title--onClick': labelState },
          ])}
          onClick={handleLabelClick}
        >
          Find todo
        </label>
        <input
          className="filter-input"
          type="text"
          name="filter"
          value={value}
          onChange={handleFilterChange}
          // placeholder=" "
          onFocus={focusToggle}
          onBlur={handleOnBlur}
          ref={inputRef}
        />
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
      <IconButton
        icon={<RiSearchLine />}
        type="submit"
        // disabled
        tooltipText="Search"
      />
    </form>
  );
};

export default Filter;
