import { GetStaticPaths, GetStaticProps } from 'next';

import { Layout } from '@components/Layout';
import getAllProductsPaths from '@framework/product/get-all-products-paths';
import config from '@framework/api/config';

export type ProductsPage = {
  product: { slug: string };
};

export default function ProductsPage({ product }: ProductsPage) {
  return (
    <div>
      <h1>{product?.slug}</h1>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { products } = await getAllProductsPaths(config);
  return {
    paths: products.map((product) => ({ params: { slug: product.slug } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  return {
    props: {
      product: { slug: params?.slug },
    },
  };
};

ProductsPage.Layout = Layout;
