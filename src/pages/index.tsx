import type { GetStaticProps } from 'next';

import getAllProducts from '../framework/shopify/product/get-all-products';

type ProductsProps = {
  products: any[];
};

export default function Home({ products }: ProductsProps) {
  return (
    <div>
      <h1>hi</h1>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const products = await getAllProducts();

  return {
    props: { products },
    revalidate: 4 * 60 * 60,
  };
};
