import axios from 'axios';

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';

export const getTodos = async () => {
  const { data } = await axios('/todos');
  return data;
};
