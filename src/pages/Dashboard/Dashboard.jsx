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
        const partOfRes = res.splice(0, 5);
        setTodos(partOfRes);
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

  return (
    <Container>
      <PageTitle title="Dashboard" />
      <TodoSection title="Control Panel">
        <TodoAdd />
      </TodoSection>
      <TodoSection title="Todo List">
        <TodoList tasks={todos} onDeleteTodo={handleDeleteTodo} />
      </TodoSection>
    </Container>
  );
};

export default Dashboard;
