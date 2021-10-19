import type { GetStaticProps } from 'next';

import getAllProducts from '@framework/product/get-all-products';
import config from '@framework/api/config';
import { Product } from '@shared/types/product';

import { Layout } from '@components/Layout';
import { ProductCard } from '@components/ProductCard';
import { GridProducts } from '@components/ui/GridProducts';
import { Hero } from '@components/ui/Hero';
import { Marquee } from '@components/ui/Marquee';

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
      <Hero
        headline="Lorem ipsum dolor sit amet "
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pellentesque ullamcorper enim ac maximus. Phasellus sed arcu eu dui pulvinar accumsan vitae sit amet velit. Vestibulum porta, nisi ut molestie commodo, ligula velit convallis quam, et rhoncus quam enim mattis urna. Duis lorem magna, cursus id scelerisque vel, fermentum sed massa. Mauris sodales velit sem, et aliquam nunc mattis eget. Aenean a tristique diam. Curabitur at quam et arcu vehicula malesuada. Fusce vitae risus nibh. Vestibulum vehicula sit amet lacus eget elementum. Vestibulum porttitor metus eget vestibulum accumsan."
      />
      <Marquee>
        {products.slice(0, 3).map((product) => (
          <ProductCard variant="slim" key={product.id} product={product} />
        ))}
      </Marquee>
      <GridProducts layout="B">
        {products.slice(0, 3).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </GridProducts>
      <Marquee background="secondary">
        {products.slice(0, 3).map((product) => (
          <ProductCard variant="slim" key={product.id} product={product} />
        ))}
      </Marquee>
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
