import { Product as ShopifyProduct, ImageEdge, MoneyV2 } from '../schema';
import { Product, ProductImages } from '@shared/types/product';

export function normalizeProductImages({ edges }: { edges: ImageEdge[] }): ProductImages[] {
  return edges.map(({ node: { originalSrc: url = '', ...rest } }) => ({
    url: `/images/${url}`,
    ...rest,
  }));
}

export function normalizePrice({ amount, currencyCode }: MoneyV2) {
  return { value: +amount, currencyCode };
}

export function normalizeProduct(productNode: ShopifyProduct): Product {
  const {
    id = '',
    title: name = '',
    handle = '',
    vendor = '',
    description = '',
    images = { edges: [] },
    priceRange,
    ...rest
  } = productNode;

  const product = {
    id,
    name,
    vendor,
    description,
    path: `/${handle}`,
    slug: handle.replace(/^\/+|\/+$/g, ''),
    images: normalizeProductImages(images),
    price: normalizePrice(priceRange.minVariantPrice),
    ...rest,
  };

  return product;
}
