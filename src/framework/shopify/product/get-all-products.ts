import QUERY_GET_ALL_PRODUCTS from '../graphql/product/queries';
import requestGraphql from '../utils/request-api';
import { ProductConnection } from '../schema';

type ReturnType = {
  products: ProductConnection;
};

const getAllProducts = async () => {
  const query = QUERY_GET_ALL_PRODUCTS;
  const data = await requestGraphql<ReturnType>({ query });
  return data.products;
};

export default getAllProducts;
