import { useCallback, useEffect, useState } from 'react';
import { Button } from '../Button';

const Pagination = ({ totalPages }) => {
  const [page, setPage] = useState(1);

  const handlePrevButtonClick = useCallback(() => {
    if (page === 1) {
      return;
    }
    setPage(prevPage => prevPage - 1);
  }, [page]);

  const handleNextButtonClick = useCallback(() => {
    if (page === totalPages) {
      return;
    }
    setPage(prevPage => prevPage + 1);
  }, [page, totalPages]);

  return (
    <div className="pagination">
      <Button type="button" title="Prev 10" onClick={handlePrevButtonClick} />
      <span className="pagination-page">{`${page} of ${totalPages}`}</span>
      <Button type="button" title="Next 10" onClick={handleNextButtonClick} />
    </div>
  );
};

export default Pagination;
