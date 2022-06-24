import { useState, useEffect, useCallback } from 'react';
import * as todosAPI from 'services/todosAPI';

const useGetAllTodos = () => {
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getAllTodos = useCallback(async () => {
    try {
      setIsLoading(true);
      const res = await todosAPI.getTodos();
      setIsLoading(false);
      setTodos(res);
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
