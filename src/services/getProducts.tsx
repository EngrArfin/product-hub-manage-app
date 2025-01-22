import axios from "axios";
import { TProduct, TProductDetails, TService, TServiceDetails } from "../types";

const BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "https://product-hub-online.vercel.app";

export const getProducts = async (): Promise<TProduct[]> => {
  try {
    const res = await axios.get<{ products: TProduct[] }>(
      `${BASE_URL}/products/api/get`
    );

    console.log("Fetched products:", res.data);

    if (res.status !== 200 || !res.data.products) {
      throw new Error(`Failed to fetch products: ${res.statusText}`);
    }

    return res.data.products;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};

export const getProductsDetails = async (
  id: string
): Promise<TProductDetails> => {
  try {
    const res = await axios.get(`${BASE_URL}/services/api/${id}`);

    console.log("Fetched products details:", res.data);

    if (res.status !== 200) {
      throw new Error(`Failed to fetch products details: ${res.statusText}`);
    }

    return res.data as TProductDetails;
  } catch (error) {
    console.error(`Error fetching products details for ID ${id}:`, error);
    return {} as TProductDetails;
  }
};

export const getServices = async (): Promise<TService[]> => {
  try {
    const res = await axios.get<{ services: TService[] }>(
      `${BASE_URL}/services/api/get-all`
    );

    console.log("Fetched services:", res.data);

    if (res.status !== 200 || !res.data.services) {
      throw new Error(`Failed to fetch services: ${res.statusText}`);
    }

    return res.data.services;
  } catch (error) {
    console.error("Error fetching services:", error);
    return [];
  }
};

export const getServicesDetails = async (
  id: string
): Promise<TServiceDetails> => {
  try {
    const res = await axios.get(`${BASE_URL}/services/api/${id}`);

    console.log("Fetched service details:", res.data);

    if (res.status !== 200) {
      throw new Error(`Failed to fetch service details: ${res.statusText}`);
    }

    return res.data as TServiceDetails;
  } catch (error) {
    console.error(`Error fetching service details for ID ${id}:`, error);
    return {} as TServiceDetails;
  }
};
