import { GetStaticPaths, GetStaticProps } from 'next';
import { Layout } from '@components/Layout';

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
  return {
    paths: [],
    fallback: true,
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
