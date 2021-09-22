import type { GetStaticProps } from 'next';
import getAllProducts from '@framework/product/get-all-products';
import { Product } from '@shared/types/product';
import config from '@framework/api/config';

type ProductsProps = {
  products: Product[];
};

export default function Home({ products }: ProductsProps) {
  return <div>{JSON.stringify(products)}</div>;
}

export const getStaticProps: GetStaticProps<ProductsProps> = async () => {
  const products = await getAllProducts(config);

  return {
    props: { products },
    revalidate: 4 * 60 * 60,
  };
};
