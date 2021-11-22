export interface ProductImages {
  url: string;
  alt?: string;
}

export interface ProductPrice {
  value: number;
  currencyCode: 'USD' | 'EUR' | 'BR' | string;
}

export interface ProductOptionValues {
  label: string;
  hexColor?: string;
}

export interface ProductOption {
  id: string;
  displayName: string;
  values: Array<ProductOptionValues>;
}

export interface ProductVariant {
  id: string;
  name: string;
  options: ProductOption[];
}

export interface Product {
  id: string;
  name: string;
  vendor: string;
  description: string;
  path: string;
  slug: string;
  price: ProductPrice;
  images: ProductImages[];
  options: ProductOption[];
  variants: ProductVariant[];
}
