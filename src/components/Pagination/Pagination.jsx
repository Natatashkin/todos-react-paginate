import Pagination from '@mui/material/Pagination';
// import Stack from '@mui/material/Stack';

export default function BasicPagination({ totalPages, currentPage }) {
  console.log(currentPage);
  return (
    // <Pagination count={10} />
    <Pagination count={totalPages} color="primary" page={currentPage} />
    // <Pagination count={10} color="secondary" />
    // <Pagination count={10} disabled />
  );
}

// import { TodoList } from 'components/TodoList';
// import { useState, useEffect } from 'react';
// import ReactPaginate from 'react-paginate';

// function PaginatedItems({
//   items,
//   itemsPerPage,
//   onDeleteTodo,
//   openModal,
//   updateTodo,
// }) {
//   // We start with an empty list of items.
//   const [currentItems, setCurrentItems] = useState(null);
//   const [pageCount, setPageCount] = useState(0);
//   // Here we use item offsets; we could also use page offsets
//   // following the API or data you're working with.
//   const [itemOffset, setItemOffset] = useState(0);

//   // useEffect(() => {
//   //   setCurrentItems(items);
//   // }, [items]);

//   useEffect(() => {
//     // Fetch items from another resources.
//     setCurrentItems(items);
//     const endOffset = itemOffset + itemsPerPage;
//     console.log(`Loading items from ${itemOffset} to ${endOffset}`);
//     setCurrentItems(items.slice(itemOffset, endOffset));
//     setPageCount(Math.ceil(items.length / itemsPerPage));
//   }, [items, itemOffset, itemsPerPage]);

//   // Invoke when user click to request another page.
//   const handlePageClick = event => {
//     const newOffset = (event.selected * itemsPerPage) % items.length;
//     console.log(
//       `User requested page number ${event.selected}, which is offset ${newOffset}`,
//     );
//     setItemOffset(newOffset);
//   };

//   return (
//     <>
//       <TodoList
//         tasks={currentItems}
//         onDeleteTodo={onDeleteTodo}
//         openModal={openModal}
//         updateTodo={updateTodo}
//       />
//       <ReactPaginate
//         breakLabel="..."
//         nextLabel="next >"
//         onPageChange={handlePageClick}
//         pageRangeDisplayed={3}
//         pageCount={pageCount}
//         previousLabel="< previous"
//         renderOnZeroPageCount={null}
//       />
//     </>
//   );
// }

// export default PaginatedItems;
