import { useState, useEffect } from 'react';
import Container from 'components/Container';
import * as todosAPI from 'services/todosAPI';
import TodoSection from 'components/TodoSection';
import PageTitle from 'components/PageTitle';
import TodoAdd from 'components/TodoAdd';
import TodoList from '../../components/TodoList';

const Dashboard = () => {
  const [todos, setTodos] = useState(null);

  useEffect(() => {
    const getAllTodos = async () => {
      try {
        const res = await todosAPI.getTodos();
        setTodos(res);
      } catch (err) {
        console.log(err.message);
      }
    };
    getAllTodos();
  }, []);

  const handleDeleteTodo = async id => {
    try {
      await todosAPI.deleteTodo(id);
      const newTodos = todos.filter(({ id: todoId }) => todoId !== id);
      setTodos(newTodos);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleAddTodo = async value => {
    console.log(value);
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
  };

  const handleEditTodo = async (todoId, value) => {
    const updatedTodo = todos.find(({ id }) => todoId === id);
    const newTodo = { ...updatedTodo, title: value };

    try {
      const res = await todosAPI.updateTodo(todoId, newTodo);
      const index = todos.findIndex(todo => todo.id === todoId);
      const updatedTodos = todos.map((todo, idx) =>
        idx === index ? res : todo,
      );
      setTodos(updatedTodos);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Container>
      <PageTitle title="Dashboard" />
      <TodoSection title="Control Panel">
        <TodoAdd onAddTodo={handleAddTodo} />
      </TodoSection>
      <TodoSection title="Todo List">
        <TodoList
          tasks={todos}
          onDeleteTodo={handleDeleteTodo}
          onEditTodo={handleEditTodo}
        />
      </TodoSection>
    </Container>
  );
};

export default Dashboard;
