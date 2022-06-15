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
import { Modal } from 'components/Modal';
import { TodoForm } from 'components/TodoForm';
import { RiPlayListAddLine } from 'react-icons/ri';

const Dashboard = () => {
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState('');
  const [status, setStatus] = useState('all');
  const [openModal, setOpenModal] = useState(false);
  const [currentTodo, setCurrentTodo] = useState(null);

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

  useEffect(() => {
    getAllTodos();
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

  const handleDeleteTodo = useCallback(
    async id => {
      try {
        await todosAPI.deleteTodo(id);
        const newTodos = todos.filter(({ id: todoId }) => todoId !== id);
        setTodos(newTodos);
      } catch (error) {
        console.log(error.message);
      }
    },
    [todos],
  );

  const handleAddTodo = useCallback(async value => {
    const newTask = {
      userId: 1,
      title: value,
      completed: false,
    };

    try {
      const response = await todosAPI.addTodo(newTask);
      setTodos(prevTodos => [response, ...prevTodos]);
    } catch (error) {
      console.log(error.message);
    }
    toggleModal();
  }, []);

  const handleEditTodoText = useCallback(
    async (todoId, value) => {
      const updatedTodo = todos.find(({ id }) => todoId === id);
      const newTodo = { ...updatedTodo, title: value };

      try {
        const res = await todosAPI.updateTodo(todoId, newTodo);
        setTodos(prev => {
          const index = prev.findIndex(todo => todo.id === todoId);
          prev.splice(index, 1);
          return [res, ...prev];
        });
      } catch (error) {
        console.log(error.message);
      }
      toggleModal();
    },
    [todos],
  );

  const handleEditTodoStatus = useCallback(
    async (todoId, updatedTodo) => {
      try {
        const res = await todosAPI.updateTodo(todoId, updatedTodo);
        setTodos(prev => {
          const index = prev.findIndex(({ id }) => todoId === id);
          prev.splice(index, 1);
          return [res, ...prev];
        });
      } catch (error) {
        console.log(error.message);
      }
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
    return todos;

    // const normalizedFilter = filter.toLocaleLowerCase();
    // const sortedTodo = [...notCompleted, ...competedTodos];
    // return (
    //   Boolean(todos.length) &&
    //   sortedTodo.filter(({ title }) =>
    //     title.toLowerCase().includes(normalizedFilter),
    //   )
    // );
  }, [todos]);

  return (
    <>
      <Container>
        <PageTitle title="Dashboard" />
        <TodoSection title="Control Panel">
          <Option title="Add Todo">
            <IconButton icon={<RiPlayListAddLine />} onClick={toggleModal} />
          </Option>
          <Option title="Search Todo filter">
            <Filter getFormValues={getFormValues} />
          </Option>
        </TodoSection>
        <TodoSection title="Todo List">
          {isLoading ? (
            <Spinner />
          ) : (
            <TodoList
              tasks={filteredTodos}
              onDeleteTodo={handleDeleteTodo}
              onEditTodoStatus={handleEditTodoStatus}
              openModal={toggleModal}
              getTodo={getCurrentTodo}
            />
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
