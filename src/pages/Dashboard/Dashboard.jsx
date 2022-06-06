import { useState, useEffect } from 'react';
import Container from '../../components/Container';
import * as todosAPI from '../../services/todosAPI';
import TodoList from '../../components/TodoList';
import Todo from '../../components/Todo';

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

  return (
    <Container>
      <h1>Dashboard</h1>
      <TodoList>
        {todos && todos.map(todo => <Todo key={todo.id} data={todo} />)}
      </TodoList>
    </Container>
  );
};

export default Dashboard;
