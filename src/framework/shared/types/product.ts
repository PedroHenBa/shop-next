export interface ProductImages {
  url: string;
  alt?: string;
}

export interface ProductPrice {
  value: number;
  currencyCode: 'USD' | 'EUR' | 'BR' | string;
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
}
