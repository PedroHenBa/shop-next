import { ApiConfig, Variables } from '@shared/types/api';
import { QUERY_GET_PRODUCT } from '@framework/graphql/product/queries/get-product';
import { normalizeProduct } from '@framework/utils';
import { Product } from '@shared/types/product';
import { Product as ShopifyProduct } from '@framework/schema';

type FetchType = {
  productByHandle: ShopifyProduct;
};

type ReturnType = {
  product: Product | null;
};

const getProduct = async (config: ApiConfig, variables: Variables): Promise<any> => {
  const query = QUERY_GET_PRODUCT;
  const data = await config.requestApi<FetchType>({ query, variables });
  const { productByHandle } = data;
  return {
    product: productByHandle ? normalizeProduct(productByHandle) : null,
  };
};

export default getProduct;
