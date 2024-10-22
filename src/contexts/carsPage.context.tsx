import { createContext } from "react";

interface ICarsListContext {
  carsList: TCarItemMinData[],
  setCarsList: (newCarsList: TCarItemMinData[]) => void;
}

export const CarsListContext = createContext<ICarsListContext>({
  carsList: [],
  setCarsList: () => {},
});

export const PaginationContext = createContext<number>(1);

export interface IQueryParams {
  sortBy: 'ascending' | 'descending';
  brand?: string;
  model?: number;
  bodyStyle?: string;
  transmission?: 'auto' | 'manual';
  mileage?: number;
}
interface IQueryParamsContext {
  queryParams: IQueryParams,
  setQueryParams: (newQueryParams: IQueryParams) => void;
}

export const QueryParamsContext = createContext<IQueryParamsContext>({
  queryParams: {
    sortBy: 'ascending',
  },
  setQueryParams: () => {},
});