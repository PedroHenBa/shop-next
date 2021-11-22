import {
  Product as ShopifyProduct,
  ImageEdge,
  MoneyV2,
  ProductOption,
  ProductVariantConnection,
  SelectedOption,
} from '../schema';
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

export function normalizeOptions({ id, values, name: displayName }: ProductOption) {
  const normalized = {
    id,
    displayName,
    values: values.map((value) => {
      let output: any = {
        label: value,
      };
      if (displayName.match(/colou?r/gi)) {
        output = {
          ...output,
          hexColor: value,
        };
      }

      return output;
    }),
  };

  return normalized;
}

export function normalizeVariants({ edges }: ProductVariantConnection) {
  return edges.map(({ node }) => {
    const { id, selectedOptions, sku, title, priceV2, compareAtPriceV2 } = node;

    return {
      id,
      name: title,
      sku: sku || id,
      price: +priceV2.amount,
      listPrice: +compareAtPriceV2?.amount,
      requiresShipping: true,
      options: selectedOptions.map(({ name, value }: SelectedOption) => {
        const option = normalizeOptions({ id, name, values: [value] });
        return option;
      }),
    };
  });
}

export function normalizeProduct(productNode: ShopifyProduct): Product {
  const {
    id = '',
    title: name = '',
    handle = '',
    vendor = '',
    description = '',
    options,
    variants,
    images = { edges: [] },
    priceRange,
    ...rest
  } = productNode;

  const product = {
    id,
    name,
    vendor,
    description,
    options: options
      ? options
          .filter((options) => options.name !== 'Title')
          .map((options) => normalizeOptions(options))
      : [],
    variants: variants ? normalizeVariants(variants) : [],
    path: `/${handle}`,
    slug: handle.replace(/^\/+|\/+$/g, ''),
    images: normalizeProductImages(images),
    price: normalizePrice(priceRange.minVariantPrice),
    ...rest,
  };

  return product;
}
