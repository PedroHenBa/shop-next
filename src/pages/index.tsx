import type { InferGetStaticPropsType } from 'next';

interface ProductsProps {
  products: InferGetStaticPropsType<typeof getStaticProps>;
}

export default function Home({ products }: ProductsProps) {
  return <div>{products}</div>;
}

export const getStaticProps = async () => {
  const products = [1, 2, 3];

  return {
    props: { products },
    revalidate: 4 * 60 * 60,
  };
};
