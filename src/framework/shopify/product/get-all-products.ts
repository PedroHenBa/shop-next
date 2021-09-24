import { QUERY_GET_ALL_PRODUCTS } from '../graphql';
import { normalizeProduct } from '../utils';

import { ProductConnection } from '../schema';
import { Product } from '@shared/types/product';
import { ApiConfig } from '@shared/types/api';

type ReturnType = {
  products: ProductConnection;
};

const getAllProducts = async (config: ApiConfig): Promise<Product[]> => {
  const query = QUERY_GET_ALL_PRODUCTS;
  const data = await config.requestApi<ReturnType>({ query });

  const products =
    data.products.edges.map(({ node: product }) => {
      return normalizeProduct(product);
    }) ?? [];
  return products;
};

export default getAllProducts;
