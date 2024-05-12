export interface Products {
  title: string;
  category: string;
  style: string;
  price: number;
  productRating: number;
  mainImage: string;
  priceDiscount?: number;
  images?: {
    one: string;
    two: string;
    three: string;
    four: string;
    five: string;
  }[];
}