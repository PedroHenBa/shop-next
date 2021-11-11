import { gqlClient } from '../graphql';
import { RequestApiParams } from '@shared/types/api';

const requestApi = async <T>({ query, variables }: RequestApiParams): Promise<T> => {
  try {
    const data = await gqlClient.request<T>(query, variables);
    return data;
  } catch (error) {
    throw new Error(JSON.stringify(error, undefined, 2));
  }
};

export default requestApi;
