import { useState, useEffect, useCallback, useMemo } from 'react';
import { useGetAllTodos } from 'hooks';
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

const Dashboard = () => {
  const { todos } = useGetAllTodos();
  const [filteredTodos, setFilteredTodos] = useState([]);

  const [query, setQuery] = useState('');
  const [status, setStatus] = useState('all');
  const [PaginationPage, setPaginationPage] = useState(1);
  const [openModal, setOpenModal] = useState(false);
  const [currentTodo, setCurrentTodo] = useState(null);
  const PAGE_LIMIT = 10;

  useEffect(() => {
    setFilteredTodos(todos);
  }, [todos]);

  // ----- Start Sort Todos --------
  const { competedTodos, notCompleted } = useMemo(() => {
    return {
      competedTodos:
        (Boolean(filteredTodos?.length) &&
          filteredTodos.filter(({ completed }) => completed)) ||
        [],
      notCompleted:
        (Boolean(filteredTodos?.length) &&
          filteredTodos.filter(({ completed }) => !completed)) ||
        [],
    };
  }, [filteredTodos]);

  const filteredTodosByQuery = useMemo(() => {
    const normalizedFilter = query.toLocaleLowerCase();
    const allSortetdTodos = [...notCompleted, ...competedTodos];

    switch (status) {
      case 'completed':
        return Boolean(filteredTodos.length) && !query
          ? competedTodos
          : competedTodos.filter(({ title }) =>
              title.toLocaleLowerCase().includes(normalizedFilter),
            );
      case 'notCompleted':
        return Boolean(filteredTodos.length) && !query
          ? notCompleted
          : notCompleted.filter(({ title }) =>
              title.toLocaleLowerCase().includes(normalizedFilter),
            );

      default:
        return Boolean(filteredTodos.length) && !query
          ? allSortetdTodos
          : allSortetdTodos.filter(({ title }) =>
              title.toLocaleLowerCase().includes(normalizedFilter),
            );
    }
  }, [competedTodos, notCompleted, query, status, filteredTodos]);

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
    setFilteredTodos(prevTodos => [newTask, ...prevTodos]);
    toggleModal();
  }, []);

  const handleUpdateTodo = useCallback(updatedTodo => {
    setFilteredTodos(prevTodos => {
      const newTodos = prevTodos.filter(({ id }) => id !== updatedTodo.id);
      return [updatedTodo, ...newTodos];
    });
  }, []);

  const handleDeleteTodo = useCallback(todoToDel => {
    const { id } = todoToDel;
    setFilteredTodos(prevTodos =>
      prevTodos.filter(({ id: todoId }) => todoId !== id),
    );
  }, []);

  // ------ Start for Search Todos  -------
  const getFormValues = useCallback(data => {
    const { filter, status: statusComplite } = data;
    setQuery(filter);
    setStatus(statusComplite);
  }, []);

  const printStatus = useMemo(() => {
    switch (status) {
      case 'completed':
        return 'completed';
      case 'notCompleted':
        return 'not completed';
      default:
        return '';
    }
  }, [status]);

  //  ------ Start for Pagination ---------

  const totalPages = useMemo(
    () => Math.ceil(filteredTodosByQuery?.length / PAGE_LIMIT),
    [filteredTodosByQuery.length, PAGE_LIMIT],
  );

  const currentTodos = useMemo(() => {
    const lastTodos = PaginationPage * PAGE_LIMIT;
    const firstTodos = lastTodos - PAGE_LIMIT;
    const current = filteredTodosByQuery.slice(firstTodos, lastTodos);
    return current;
  }, [PaginationPage, PAGE_LIMIT, filteredTodosByQuery]);

  const handlePrevButtonClick = useCallback(() => {
    if (PaginationPage === 1) {
      return;
    }
    setPaginationPage(prevPage => prevPage - 1);
  }, [PaginationPage]);

  const handleNextButtonClick = useCallback(() => {
    if (PaginationPage === totalPages) {
      return;
    }
    setPaginationPage(prevPage => prevPage + 1);
  }, [PaginationPage, totalPages]);

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
            <Filter
              getFormValues={getFormValues}
              resetPage={setPaginationPage}
            />
          </Option>
        </TodoSection>
        <TodoSection title="Todo List">
          {filteredTodosByQuery.length !== 0 ? (
            <>
              <TodoList
                tasks={currentTodos}
                onDeleteTodo={handleDeleteTodo}
                openModal={toggleModal}
                updateTodo={handleUpdateTodo}
              />
              {filteredTodosByQuery.length >= PAGE_LIMIT && (
                <Pagination
                  page={PaginationPage}
                  totalPages={totalPages}
                  onPervButtonClick={handlePrevButtonClick}
                  onNextButtonClick={handleNextButtonClick}
                />
              )}
            </>
          ) : (
            <h4>{`You don't have ${printStatus} todos by query "${query}"`}</h4>
            // <Spinner />
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
