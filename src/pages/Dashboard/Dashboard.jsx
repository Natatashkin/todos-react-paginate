import { useState, useEffect, useCallback, useMemo } from 'react';
import { Toaster } from 'react-hot-toast';
import { Spinner } from 'components/Spinner';
import { Container } from 'components/Container';
import * as todosAPI from 'services/todosAPI';
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

const defaultFilterValues = {
  query: '',
  status: 'all',
};

const Dashboard = () => {
  const { query: defaultQuery, status: defaultStatus } = defaultFilterValues;
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState(defaultQuery);
  const [status, setStatus] = useState(defaultStatus);
  const [openModal, setOpenModal] = useState(false);
  const [currentTodo, setCurrentTodo] = useState(null);

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

  const PAGE_LIMIT = 10;
  const TOTAL_PAGES = useMemo(
    () => Math.ceil(filteredTodos.length / PAGE_LIMIT),
    [filteredTodos, PAGE_LIMIT],
  );

  const getAllTodos = useCallback(async () => {
    try {
      const res = await todosAPI.getTodos();
      setTodos(res);
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      console.log(err.message);
    }
  }, []);

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

  const handleDeleteTodo = useCallback(async id => {
    setTodos(prevTodos => prevTodos.filter(({ id: todoId }) => todoId !== id));
  }, []);

  const handleAddTodo = useCallback(async value => {
    const newTask = {
      id: generate(),
      userId: 1,
      title: value,
      completed: false,
    };
    setTodos(prevTodos => [newTask, ...prevTodos]);

    toggleModal();
  }, []);

  const handleEditTodoText = useCallback(
    async (todoId, value) => {
      const updatedTodo = todos.find(({ id }) => todoId === id);
      const newTodo = { ...updatedTodo, title: value };

      setTodos(prev => {
        const index = prev.indexOf(todo => todo.id === todoId);
        prev.splice(index, 1);
        return [newTodo, ...prev];
      });
      toggleModal();
    },
    [todos],
  );

  const handleEditTodoStatus = useCallback(
    updatedTodo => {
      setTodos(prev => {
        const index = prev.findIndex(({ id }) => updatedTodo.id === id);
        console.log(index, updatedTodo.id);
        prev.splice(index, 1);
        return [updatedTodo, ...prev];
      });
    },
    [todos],
  );

  const getFormValues = useCallback(data => {
    setQuery(data.get('query'));
    setStatus(data.get('status'));

    // const {inputValue, checkedStatus} = data
    // setQuery(inputValue);
    // setStatus(checkedStatus);
  }, []);

  useEffect(() => {
    getAllTodos();
  }, []);

  return (
    <>
      <Container>
        <PageTitle title="Dashboard" />
        <TodoSection title="Control Panel">
          <Option title="Add Todo">
            <IconButton icon={<RiPlayListAddLine />} onClick={toggleModal} />
          </Option>
          <Option title="Search Todo filter">
            <Filter
              defaultQuery={defaultQuery}
              defaultStatus={defaultStatus}
              getFormValues={getFormValues}
            />
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
                onEditTodoStatus={handleEditTodoStatus}
                openModal={toggleModal}
                getTodo={getCurrentTodo}
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
          onEditTodoText={handleEditTodoText}
        />
        <Toaster />
      </Modal>
    </>
  );
};

export default Dashboard;
