import { useState, useEffect, useCallback, useMemo } from 'react';
import { Toaster } from 'react-hot-toast';
import { Spinner } from 'components/Spinner';
import { Container } from 'components/Container';
import { TodoSection } from 'components/TodoSection';
import { PageTitle } from 'components/PageTitle';
import { Option } from 'components/Option';
import { IconButton } from 'components/IconButton';
import { TodoList } from 'components/TodoList';
import { Filter } from 'components/Filter';
import { Pagination } from 'components/Pagination';
import { Modal } from 'components/Modal';
import { TodoForm } from 'components/TodoForm';
import { RiPlayListAddLine } from 'react-icons/ri';
import { generate } from 'shortid';
import { useGetAllTodos } from 'hooks';

const Dashboard = () => {
  const { todos, setTodos, isLoading } = useGetAllTodos();
  const [visibleTodos, setVisibleTodos] = useState([]);
  const [PaginationPage, setPaginationPage] = useState(1);
  const [query, setQuery] = useState('');
  const [status, setStatus] = useState('all');
  const [openModal, setOpenModal] = useState(false);
  const [currentTodo, setCurrentTodo] = useState(null);

  const PAGE_LIMIT = 10;
  // const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    setVisibleTodos([...todos]);
  }, [todos]);

  // ----- Start Sort Todos --------
  const { competedTodos, notCompleted } = useMemo(() => {
    return {
      competedTodos:
        (Boolean(todos.length) && todos.filter(({ completed }) => completed)) ||
        [],
      notCompleted:
        (Boolean(todos.length) &&
          todos.filter(({ completed }) => !completed)) ||
        [],
    };
  }, [todos]);

  const filteredTodos = useMemo(() => {
    const normalizedFilter = query.toLocaleLowerCase();
    const allSortetdTodos = [...notCompleted, ...competedTodos];

    switch (status) {
      case 'completed':
        return Boolean(visibleTodos.length) && !query
          ? competedTodos
          : competedTodos.filter(({ title }) =>
              title.toLocaleLowerCase().includes(normalizedFilter),
            );
      case 'notCompleted':
        return Boolean(visibleTodos.length) && !query
          ? notCompleted
          : notCompleted.filter(({ title }) =>
              title.toLocaleLowerCase().includes(normalizedFilter),
            );

      default:
        return Boolean(visibleTodos.length) && !query
          ? allSortetdTodos
          : allSortetdTodos.filter(({ title }) =>
              title.toLocaleLowerCase().includes(normalizedFilter),
            );
    }
  }, [competedTodos, notCompleted, query, status, visibleTodos.length]);

  //  -------- Start For modal --------
  const getCurrentTodo = useCallback(currentItem => {
    setCurrentTodo(currentItem);
  }, []);

  const toggleModal = useCallback(todo => {
    getCurrentTodo(todo);
    setOpenModal(prev => !prev);
  }, []);

  const handleCloseModalClick = useCallback(e => {
    if (e.target === e.currentTarget) {
      setOpenModal(false);
    }
  }, []);

  // ---------- Start Update Todos --------------
  const handleAddTodo = useCallback(async value => {
    const newTask = {
      id: generate(),
      userId: 1,
      title: value,
      completed: false,
    };
    setVisibleTodos(prevTodos => [newTask, ...prevTodos]);
    toggleModal();
  }, []);

  const handleUpdateTodo = useCallback(updatedTodo => {
    setVisibleTodos(prevTodos => {
      const newTodos = prevTodos.filter(({ id }) => id !== updatedTodo.id);
      return [updatedTodo, ...newTodos];
    });
  }, []);

  const handleDeleteTodo = useCallback(todoToDel => {
    const { id } = todoToDel;
    setVisibleTodos(prevTodos =>
      prevTodos.filter(({ id: todoId }) => todoId !== id),
    );
  }, []);

  // ------ Start for Search Todos  -------
  const getFormValues = useCallback(data => {
    setQuery(data.get('query'));
    setStatus(data.get('status'));
  }, []);

  //  ------ Start for Pagination ---------

  const totalPages = useMemo(
    () => Math.ceil(filteredTodos?.length / PAGE_LIMIT),
    [filteredTodos.length, PAGE_LIMIT],
  );

  const handlePrevButtonClick = useCallback(() => {
    if (PaginationPage === 1) {
      return;
    }
    setPaginationPage(prevPage => prevPage - 1);
  }, [PaginationPage]);

  const handleNextButtonClick = useCallback(() => {
    if (PaginationPage > totalPages) {
      return;
    }
    setPaginationPage(prevPage => prevPage + 1);
  }, [PaginationPage, totalPages]);

  console.log(filteredTodos);

  // useEffect(() => {
  //   if (filteredTodos.length > PAGE_LIMIT) {
  //     setVisibleTodos(prevTodos => {
  //       const result = prevTodos.splice(0, PAGE_LIMIT);
  //       return [...result];
  //     });
  //   }
  // }, [filteredTodos.length]);

  return (
    <>
      <Container>
        <PageTitle title="Dashboard" />
        <TodoSection title="Control Panel">
          <Option title="Add Todo">
            <IconButton
              icon={<RiPlayListAddLine />}
              onClick={() => toggleModal()}
            />
          </Option>
          <Option title="Search Todo filter">
            <Filter getFormValues={getFormValues} />
          </Option>
        </TodoSection>
        <TodoSection title="Todo List">
          {isLoading ? (
            <Spinner />
          ) : (
            <>
              <TodoList
                tasks={visibleTodos}
                onDeleteTodo={handleDeleteTodo}
                openModal={toggleModal}
                updateTodo={handleUpdateTodo}
              />
              <Pagination
                page={PaginationPage}
                totalPages={totalPages}
                onPervButtonClick={handlePrevButtonClick}
                onNextButtonClick={handleNextButtonClick}
              />
            </>
          )}
        </TodoSection>
      </Container>
      <Modal
        open={openModal}
        onBackdropClose={handleCloseModalClick}
        onClose={() => setOpenModal(false)}
        onEscClose={() => setOpenModal(false)}
      >
        <TodoForm
          todo={currentTodo}
          onAddTodo={handleAddTodo}
          updateTodo={handleUpdateTodo}
          onClose={() => setOpenModal(false)}
        />
        <Toaster />
      </Modal>
    </>
  );
};

export default Dashboard;
