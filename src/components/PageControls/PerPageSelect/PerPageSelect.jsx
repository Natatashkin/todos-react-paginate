import { useState } from 'react';
import { useStyles } from './PerPageSelect.styles';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';

const selectOptions = [
  { value: '', text: 'All' },
  { value: 10, text: 10 },
  { value: 25, text: 25 },
  { value: 50, text: 50 },
];

const PerPageSelect = ({ getPageLimit }) => {
  const [valuesPerPage, setTodosPerPage] = useState(10);
  const styles = useStyles();

  const handleChange = event => {
    setTodosPerPage(event.target.value);
    getPageLimit(event.target.value);
  };

  return (
    <FormControl classes={{ root: styles.form }}>
      <FormHelperText
        classes={{
          contained: styles.selectHelpertext,
        }}
      >
        Todos perpage
      </FormHelperText>
      <Select
        classes={{
          outlined: styles.selectContainer,
          iconOutlined: styles.iconColor,
        }}
        value={valuesPerPage}
        onChange={handleChange}
        displayEmpty
      >
        {selectOptions.map(({ value, text }) => (
          <MenuItem value={value}>{text}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default PerPageSelect;
