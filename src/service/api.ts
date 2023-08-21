import { apis } from "service";

import { AxiosPromise, AxiosRequestConfig } from "axios";
const ALIAS = "food";

const API_URLS = {
  GET_CATEGORIES: `https://api.yelp.com/v3/categories`,
  GET_BUSINESS_SEARCH: `https://api.yelp.com/v3/categories/${ALIAS}`,
} as const;

export type GetCategoriesResponseType = Partial<{ categories: any[] }>;

export const getCategories = (
  payload: AxiosRequestConfig,
): AxiosPromise<GetCategoriesResponseType> =>
  apis.get(API_URLS.GET_CATEGORIES, {
    ...payload,
    params: { locale: "{{lang}}", ...payload?.params },
    headers: { Authorization: "Bearer {{token}}", ...payload?.headers },
  });

export type GetBusinessSearchResponseType = Partial<{
  category: {
    alias: string;
    title: string;
    parent_aliases: any[];
    country_whitelist: any[];
    country_blacklist: any[];
  };
}>;

export const getBusinessSearch = (
  payload: AxiosRequestConfig,
): AxiosPromise<GetBusinessSearchResponseType> =>
  apis.get(API_URLS.GET_BUSINESS_SEARCH, {
    ...payload,
    headers: {
      Authorization:
        "Bearer UpRY0R7coiXymbUoGcbUm8vebgyO7WaLBQR1O7jgRKp3yybGmOgCISB6_TziEcwhbGOCYJoXkNo_QMu0U3rZwWNrO5A3zhtMUOkwaVtnV7gNHl5ZPzWhbWVHWzfCZHYx",
      ...payload?.headers,
    },
  });
