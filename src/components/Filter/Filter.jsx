import './Filter.scss';
import IconButton from '../IconButton';
import { MdClear } from 'react-icons/md';

const Filter = ({ value, onChange, onClick }) => {
  return (
    <div className="filter">
      <div className="filter-wrapper">
        <label htmlFor="filter" className="filter-title">
          Find todo:
          <input type="text" name="filter" value={value} onChange={onChange} />
        </label>
        <IconButton icon={<MdClear />} type="button" onClick={onClick} />
      </div>
    </div>
  );
};

export default Filter;
