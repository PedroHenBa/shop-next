import { Product as ShopifyProduct, ImageEdge } from '../schema';
import { Product, ProductImages } from '../../shared/types/product';

export function normalizeProductImages({ edges }: { edges: ImageEdge[] }): ProductImages[] {
  return edges.map(({ node: { originalSrc: url, ...rest } }) => ({
    url: `images/${url}`,
    ...rest,
  }));
}

export function normalizeProduct(productNode: ShopifyProduct): Product {
  const { id, title: name, handle, vendor, description, images, ...rest } = productNode;

  const product = {
    id,
    name,
    vendor,
    description,
    path: `/${handle}`,
    slug: handle.replace(/^\/+|\/+$/g, ''),
    images: normalizeProductImages(images),
    ...rest,
  };

  return product;
}
