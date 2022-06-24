import MuiPagination from '@mui/material/Pagination';
import { useStyles } from './Pagination.styles';
import classNames from 'classnames';

const Pagination = ({ currentPage, totalPages, onChange, currentTodos }) => {
  const styles = useStyles();
  const shouldPageOffset = currentPage - 1;
  const shouldHidePagination = totalPages === 1;

  return (
    <MuiPagination
      page={currentTodos.length ? currentPage : shouldPageOffset}
      count={totalPages}
      classes={{
        root: styles.paginationContainer,
        ul: styles.paginationList,
        text: styles.pageText,
      }}
      className={classNames([
        styles.paginationList,
        { [styles.paginationListHidden]: shouldHidePagination },
      ])}
      onChange={onChange}
      showFirstButton
      showLastButton
    />
  );
};

export default Pagination;
