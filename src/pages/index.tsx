import type { GetStaticProps } from 'next';
import getAllProducts from '@framework/product/get-all-products';
import { Product } from '@shared/types/product';
import config from '@framework/api/config';
import { Layout } from '@components/Layout';
import { ProductCard } from '@components/ProductCard';
import { GridProducts } from '@components/ui/GridProducts';

type ProductsProps = {
  products: Product[];
};

export default function Home({ products }: ProductsProps) {
  return (
    <>
      <GridProducts>
        {products.slice(0, 3).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </GridProducts>
    </>
  );
}

export const getStaticProps: GetStaticProps<ProductsProps> = async () => {
  const products = await getAllProducts(config);

  return {
    props: { products },
    revalidate: 4 * 60 * 60,
  };
};

Home.Layout = Layout;
