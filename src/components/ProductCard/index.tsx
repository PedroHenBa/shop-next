import { Product } from '@shared/types/product';
import Link from 'next/link';
import Image from 'next/image';

interface ProductCardProps {
  product: Product;
}

const placeHolderImage = '/product-image-placeholder.svg';

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <>
      <Link href={`/products/${product.slug}`}>
        <a>
          <h3>
            <span>{product.name}</span>
          </h3>
          <span> 14 $</span>
          {product.images && (
            <Image
              src={product.images[0].url ?? placeHolderImage}
              alt={product.name ?? 'product name'}
              height={540}
              width={540}
              quality="85"
              layout="responsive"
            />
          )}
        </a>
      </Link>
    </>
  );
};
