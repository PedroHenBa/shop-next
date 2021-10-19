import { Product } from '@shared/types/product';
import Link from 'next/link';
import Image from 'next/image';
import classes from './ProductCard.module.css';

interface ProductCardProps {
  product: Product;
  variant?: 'simple' | 'slim';
}

const placeHolderImage = '/product-image-placeholder.svg';

export const ProductCard = ({ product, variant = 'simple' }: ProductCardProps) => {
  return (
    <>
      <Link href={`/products/${product.slug}`}>
        <a className={classes.root}>
          {variant === 'slim' ? (
            <div>
              <div className="absolute z-20 flex items-center justify-center inset-0">
                <span className="bg-black text-white p-3 font-bold text-xl">{product.name}</span>
              </div>
              {product.images && (
                <Image
                  className={`${classes.productImage}`}
                  src={product.images[0].url ?? placeHolderImage}
                  alt={product.name ?? 'product name'}
                  height={320}
                  width={320}
                  quality="85"
                  layout="fixed"
                />
              )}
            </div>
          ) : (
            <>
              <div className={classes.productBg} />
              <div className={classes.productTag}>
                <h3 className={classes.productTitle}>
                  <span>{product.name}</span>
                </h3>
                <span className={classes.productPrice}>
                  {product.price.value} {product.price.currencyCode}
                </span>
              </div>
              {product.images && (
                <Image
                  className={classes.productImage}
                  src={product.images[0].url ?? placeHolderImage}
                  alt={product.name ?? 'product name'}
                  height={540}
                  width={540}
                  quality="85"
                  layout="responsive"
                />
              )}
            </>
          )}
        </a>
      </Link>
    </>
  );
};
