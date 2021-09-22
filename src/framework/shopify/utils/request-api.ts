import { gqlClient } from '../graphql';

type RequestGraphqlParams = {
  query: string;
};

const requestGraphql = async <T>({ query }: RequestGraphqlParams): Promise<T> => {
  try {
    const data = await gqlClient.request<T>(query);
    return data;
  } catch (error) {
    throw new Error(JSON.stringify(error, undefined, 2));
  }
};

export default requestGraphql;
