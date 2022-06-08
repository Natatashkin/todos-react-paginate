import axios from 'axios';

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';

export const getTodos = async () => {
  const { data } = await axios.get('/todos');
  return data;
};

export const deleteTodo = async id => {
  await axios.delete(`/todos/${id}`);
};

export const addTodo = async body => {
  const { data } = await axios.post(`/todos`, {
    ...body,
  });
  return data;
};

export const updateTodo = async (id, body) => {
  const { data } = await axios.put(`/todos/${id}`, { ...body }, { new: true });
  return data;
};
