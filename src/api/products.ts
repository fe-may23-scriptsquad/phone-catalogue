import { client } from '../utils/fetchClient';

export const getAll = async () => {
  const data = await client.get('/products');

  return data;
};
