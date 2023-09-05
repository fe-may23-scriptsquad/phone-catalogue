import { client } from '../utils/fetchClient';

export const getAll = async <T>(url = ''): Promise<T> => {
  const data = await client.get(`/products/${url}`);

  return data as T;
};

export const getById = async <T>(id:number): Promise<T> => {
  const data = await client.get(`/products/${id}`);

  return data as T;
};

export const getImgUrl = (url: string) => {
  return client.getImg(url);
};
