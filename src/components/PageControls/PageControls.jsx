import Box from '@mui/system/Box';
import Pagination from '@mui/material/Pagination';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import { useState } from 'react';
import { useStyles } from './PageContors.styles';

const PageControls = ({
  currentPage,
  totalPages,
  onChange,
  getPageLimit,
  currentTodos,
}) => {
  const styles = useStyles();
  const [valuesPerPage, setTodosPerPage] = useState(10);

  const handleChange = event => {
    setTodosPerPage(event.target.value);
    getPageLimit(event.target.value);
  };
  return (
    <Box className={styles.container}>
      {totalPages !== 1 && (
        <Pagination
          page={currentTodos.length ? currentPage : currentPage - 1}
          count={totalPages}
          className={styles.pageText}
          onChange={onChange}
          showFirstButton
          showLastButton
          color="primary"
        />
      )}
      <FormControl classes={{ root: styles.form }}>
        <FormHelperText classes={{ contained: styles.selectHelpertext }}>
          Todos perpage
        </FormHelperText>
        <Select
          classes={{ outlined: styles.selectContainer }}
          // className={styles.container}
          value={valuesPerPage}
          onChange={handleChange}
          displayEmpty
        >
          <MenuItem value="">
            <em>All</em>
          </MenuItem>
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={20}>20</MenuItem>
          <MenuItem value={50}>50</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};
export default PageControls;