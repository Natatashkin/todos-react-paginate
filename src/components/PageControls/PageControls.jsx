import Box from '@mui/material/Box';
import { Pagination } from './Pagination';
import { PerPageSelect } from './PerPageSelect';
import { useStyles } from './PageContors.styles';

const PageControls = ({
  currentPage,
  totalPages,
  onChange,
  getPageLimit,
  currentTodos,
}) => {
  const styles = useStyles();
  return (
    <Box className={styles.container}>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onChange={onChange}
        currentTodos={currentTodos}
      />
      <PerPageSelect getPageLimit={getPageLimit} />
    </Box>
  );
};
export default PageControls;
