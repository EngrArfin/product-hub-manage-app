import { SetStateAction, SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export interface TProduct {
  _id: string;
  id: number;
  title: string;
  price: number;
  photo: {
    thumbnail: string;
    cover?: string;
  };
  thumbnail: string;
  cover: string;
  quantity: number;
  stock: number;
  discount: number;
  __v: number;
}

export interface TProductDetails {
  product: SetStateAction<TProduct>;
  _id: string;
  title: string;
  description: string;
  img: string;
  price: number;
  stock: number;
  discount: number;
  reviews: string[];
}

export interface TService {
  _id: string;
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  ratings: number;
}

export interface TServiceDetails {
  service: SetStateAction<TService>;
  _id: string;
  title: string;
  description: string;
  img: string;
  price: number;
  ratings: number;
  reviews: string[];
}

export type TProductCardProps = {
  _id: string;
  id: string;
  productName: string;
  productId: string;
  name: string;
  rating: number;
  brand: string;
  availableQuantity: number;
  price: number;
  image: string;
  quantity: number;
  description: string;
};
