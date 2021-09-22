import QUERY_GET_ALL_PRODUCTS from '../graphql/product/queries';
import requestGraphql from '../utils/request-api';
import { ProductConnection } from '../schema';
import { normalizeProduct } from '../utils/normalize';
import { Product } from '../../shared/types/product';

type ReturnType = {
  products: ProductConnection;
};

const getAllProducts = async (): Promise<Product[]> => {
  const query = QUERY_GET_ALL_PRODUCTS;
  const data = await requestGraphql<ReturnType>({ query });

  const products =
    data.products.edges.map(({ node: product }) => {
      return normalizeProduct(product);
    }) ?? [];
  console.log(products);
  return products;
};

export default getAllProducts;
