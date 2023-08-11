export interface IProduct {
  sku: string;
  category: ProductCategory;
  name: string;
  description: string;
  price: number;
  sizes: ProductSize[];
  colors: HexColor[];
  tags: string[];
  rates: Rate[];
  images: string[];
}

export enum ProductCategory {
  Sofas = "Sofas",
  Beds = "Beds",
  Closets = "Closets",
  Tables = "Tables",
  Chairs = "Chairs",
}
export enum ProductSize {
  ExtraSmall = "XS",
  Small = "S",
  Medium = "M",
  Large = "L",
  ExtraLarge = "XL",
}

export type HexColor = `#${string}`;

export type Rate = 1 | 2 | 3 | 4 | 5;
