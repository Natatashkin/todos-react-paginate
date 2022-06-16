import { Button } from '../Button';

const Pagination = ({
  page,
  totalPages,
  onPervButtonClick,
  onNextButtonClick,
}) => {
  return (
    <div className="pagination">
      <Button type="button" title="Prev 10" onClick={onPervButtonClick} />
      <span className="pagination-page">{`${page} of ${totalPages}`}</span>
      <Button type="button" title="Next 10" onClick={onNextButtonClick} />
    </div>
  );
};

export default Pagination;
