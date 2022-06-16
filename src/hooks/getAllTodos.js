import { useState, useEffect, useCallback } from 'react';
import * as todosAPI from 'services/todosAPI';

const useGetAllTodos = () => {
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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

  return { todos, setTodos, setIsLoading, isLoading };
};

export default useGetAllTodos;
