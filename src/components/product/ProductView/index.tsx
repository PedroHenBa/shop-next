import Image from 'next/image';
import cn from 'classnames';

import classes from './ProductView.module.css';
import { Product } from '@shared/types/product';
import { Container } from '@components/ui/Container';
import { ProductSlider } from '@components/product/ProductSlider';

export const ProductView = ({ product }: ProductViewProps) => {
  return (
    <Container>
      <div className={cn(classes.root, 'fit')}>
        <div className={cn(classes.productDisplay)}>
          <div className={classes.nameBox}>
            <h1 className={classes.name}>{product.name}</h1>
            <div className={classes.price}>
              {product.price.value}
              {` `}
              {product.price.currencyCode}
            </div>
          </div>
          <ProductSlider>
            {product.images.map((image) => (
              <div key={image.url} className={classes.imageContainer}>
                <Image
                  className={classes.img}
                  src={image.url}
                  alt={image.alt}
                  width={1050}
                  height={1050}
                  quality="85"
                />
              </div>
            ))}
          </ProductSlider>
        </div>

        <div className={classes.sidebar}>
          <section>
            <div className="pb-4">
              <h2 className="uppercase font-medium">Color</h2>
              <div className="flex flex-row py-4">Variant Options here</div>
            </div>
            <div className="pb-14 break-words w-full max-w-xl text-lg">{product.description}</div>
          </section>

          <div>
            <button
              onClick={() => {
                console.log('a');
              }}
              aria-label="add to cart"
              className={classes.button}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export type ProductViewProps = {
  product: Product;
};
