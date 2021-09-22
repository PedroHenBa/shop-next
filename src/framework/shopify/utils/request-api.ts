import { gqlClient } from '../graphql';
import { RequestApiParams } from '@shared/types/api';

const requestApi = async <T>({ query }: RequestApiParams): Promise<T> => {
  try {
    const data = await gqlClient.request<T>(query);
    return data;
  } catch (error) {
    throw new Error(JSON.stringify(error, undefined, 2));
  }
};

export default requestApi;
