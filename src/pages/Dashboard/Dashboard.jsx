import { useState, useEffect, useCallback, useMemo } from 'react';
import { Toaster } from 'react-hot-toast';
import { Spinner } from 'components/Spinner';
import { Container } from 'components/Container';
// import * as todosAPI from 'services/todosAPI';
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
  const { todos, setTodos, setIsLoading, isLoading } = useGetAllTodos();
  const [query, setQuery] = useState('');
  const [status, setStatus] = useState('all');
  const [openModal, setOpenModal] = useState(false);
  const [currentTodo, setCurrentTodo] = useState({ title: '' });

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
        return Boolean(todos.length) && !query
          ? competedTodos
          : competedTodos.filter(({ title }) =>
              title.toLocaleLowerCase().includes(normalizedFilter),
            );
      case 'notCompleted':
        return Boolean(todos.length) && !query
          ? notCompleted
          : notCompleted.filter(({ title }) =>
              title.toLocaleLowerCase().includes(normalizedFilter),
            );

      default:
        return Boolean(todos.length) && !query
          ? allSortetdTodos
          : allSortetdTodos.filter(({ title }) =>
              title.toLocaleLowerCase().includes(normalizedFilter),
            );
    }
  }, [todos, status, query]);

  // ----- End Sort Todos --------

  //  ------ Start for Pagination ---------

  const PAGE_LIMIT = 10;
  const TOTAL_PAGES = useMemo(
    () => Math.ceil(filteredTodos.length / PAGE_LIMIT),
    [filteredTodos, PAGE_LIMIT],
  );

  //  ------ End for Pagination ---------

  //  -------- Start For modal --------
  const getCurrentTodo = useCallback(currentItem => {
    console.log('currentItem', currentItem);
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

  //  --------End For modal --------

  // ---------- Start Update Todos --------------

  const handleAddTodo = useCallback(async value => {
    console.log('Add new task', value);
    const newTask = {
      id: generate(),
      userId: 1,
      title: value,
      completed: false,
    };
    setTodos(prevTodos => [newTask, ...prevTodos]);

    toggleModal();
  }, []);

  const handleUpdateTodo = useCallback(updatedTodo => {
    console.log('updatedTodo', updatedTodo);
    setTodos(prevTodos => {
      const newTodos = prevTodos.filter(({ id }) => id !== updatedTodo.id);
      return [updatedTodo, ...newTodos];
    });
  }, []);

  const handleDeleteTodo = useCallback(todoToDel => {
    const { id } = todoToDel;
    console.log('todoToDel', todoToDel);
    setTodos(prevTodos => prevTodos.filter(({ id: todoId }) => todoId !== id));
  }, []);

  // ---------- End Update Todos --------------

  // ------ Start for Search Todos  -------

  const getFormValues = useCallback(data => {
    setQuery(data.get('query'));
    setStatus(data.get('status'));
  }, []);

  // ------ End for Search Todos  -------

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
                tasks={filteredTodos}
                onDeleteTodo={handleDeleteTodo}
                openModal={toggleModal}
                updateTodo={handleUpdateTodo}
              />
              <Pagination totalPages={TOTAL_PAGES} />
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
