import { SetStateAction, SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

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

export interface User {
  user?: any;
  _id: string;
  name: string;
  email: string;
  password: string;
  phone: string;
  address: string;
  token?: string;
  role: string /*  "admin" | "user" */;
  __v: number;
}
