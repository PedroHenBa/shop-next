import { GetStaticPaths, GetStaticProps } from 'next';

import { Layout } from '@components/Layout';
import getAllProductsPaths from '@framework/product/get-all-products-paths';
import getProduct from '@framework/product/get-product';
import config from '@framework/api/config';
import { Product } from '@shared/types/product';
import { ProductView } from '@components/product/ProductView';

export type ProductsPage = {
  product: Product;
};
export default function ProductsPage({ product }: ProductsPage) {
  return <ProductView product={product} />;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { products } = await getAllProductsPaths(config);
  return {
    paths: products.map((product) => ({ params: { slug: product.slug } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { product } = await getProduct(config, { slug: params?.slug });
  return {
    props: {
      product,
    },
  };
};

ProductsPage.Layout = Layout;
