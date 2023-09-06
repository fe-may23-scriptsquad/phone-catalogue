import { client } from '../utils/fetchClient';

export const getAll = async <T>(params = ''): Promise<T> => {
  const data = await client.get(`/products${params}`);

  return data as T;
};

export const getById = async <T>(id: number): Promise<T> => {
  const data = await client.get(`/products/${id}`);

  return data as T;
};

export const getImgUrl = (url: string) => {
  return client.getImg(url);
};

export const getDetailsById = async <T>(itemId: string): Promise<T> => {
  const data = await client.get(`/details/${itemId}`);

  return data as T;
};
