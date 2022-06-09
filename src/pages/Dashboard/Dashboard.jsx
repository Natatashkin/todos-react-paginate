import { useState, useEffect, useCallback, useMemo } from 'react';
import { Toaster } from 'react-hot-toast';
import Container from 'components/Container';
import * as todosAPI from 'services/todosAPI';
import TodoSection from 'components/TodoSection';
import PageTitle from 'components/PageTitle';
import TodoAdd from 'components/TodoAdd';
import TodoList from 'components/TodoList';
import Filter from 'components/Filter';
import Modal from 'components/Modal';
import TodoForm from 'components/TodoForm';

const Dashboard = () => {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('');
  const [openModal, setOpenModal] = useState(false);
  const [currentTodo, setCurrentTodo] = useState(null);

  const getAllTodos = useCallback(async () => {
    try {
      const res = await todosAPI.getTodos();
      setTodos(res);
    } catch (err) {
      console.log(err.message);
    }
  }, []);

  useEffect(() => {
    getAllTodos();
  }, [getAllTodos]);

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
    // useCallback
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

  const handleEditTodo = useCallback(
    async (todoId, value) => {
      //useCallback
      const updatedTodo = todos.find(({ id }) => todoId === id);
      const newTodo = { ...updatedTodo, title: value };

      try {
        const res = await todosAPI.updateTodo(todoId, newTodo);
        // const updatedTodos = todos.map((todo, idx) =>
        //   idx === index ? res : todo,
        // );
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

  const handleFilterChange = useCallback(e => {
    // useCallback
    const { value } = e.target;
    setFilter(value);
  }, []);

  const handleFilterReset = () => {
    setFilter('');
  };

  const { competedTodos, notCompleted } = useMemo(() => {
    const normalizedFilter = filter.toLocaleLowerCase();

    return {
      competedTodos: todos || [],
      notCompleted: todos || [],
    };
  }, [todos, filter]);

  const filteredTodos = useMemo(() => {
    const normalizedFilter = filter.toLocaleLowerCase();
    return (
      Boolean(todos.length) &&
      todos.filter(({ title }) =>
        title.toLowerCase().includes(normalizedFilter),
      )
    );
  }, [todos, filter]);

  // const filteredTodos = () => {
  //   const normalizedFilter = filter.toLocaleLowerCase();
  //   return todos?.filter(({ title }) =>
  //     title.toLowerCase().includes(normalizedFilter),
  //   );
  // };

  return (
    <>
      <Container>
        <PageTitle title="Dashboard" />
        <TodoSection title="Control Panel">
          <TodoAdd openModal={toggleModal} />
        </TodoSection>
        <TodoSection title="Todo List">
          <Filter
            value={filter}
            onChange={handleFilterChange}
            onClick={handleFilterReset}
          />
          <TodoList
            tasks={filteredTodos}
            onDeleteTodo={handleDeleteTodo}
            onEditTodo={handleEditTodo}
            openModal={toggleModal}
            getTodo={getCurrentTodo}
          />
        </TodoSection>
      </Container>
      <Modal
        open={openModal}
        onClose={handleCloseModalClick}
        onEscClose={() => setOpenModal(false)}
      >
        <TodoForm
          todo={currentTodo}
          onAddTodo={handleAddTodo}
          onEditTodo={handleEditTodo}
        />
        <Toaster />
      </Modal>
    </>
  );
};

export default Dashboard;
