import { ApiConfig } from '@shared/types/api';
import { Product } from '@shared/types/product';
import { QUERY_GET_ALL_PRODUCTS_PATHS } from '../graphql/index';
import { ProductConnection } from '@framework/schema';

type ReturnType = {
  products: Pick<Product, 'slug'>[];
};

const getAllProductsPaths = async (config: ApiConfig): Promise<ReturnType> => {
  const query = QUERY_GET_ALL_PRODUCTS_PATHS;
  const data = await config.requestApi<{ products: ProductConnection }>({ query });

  const products = data.products.edges.map(({ node: { handle } }) => ({ slug: handle }));

  return {
    products,
  };
};

export default getAllProductsPaths;
