import { removeProperty, removePropertyEmptyValue } from "@utils/object.utils";

export enum ECarsPageActionKind {
  updateCarList = 'updateCarList',
  updateQueryParams = 'updateQueryParams',
  updateTotalPages = 'updateTotalPages',
  updateFilterOptions = 'updateFilterOptions',
  updateSearchQuery = 'updateSearchQuery',
  clearFilterOptions = 'clearFilterOptions',
}
interface ICarsPageAction {
  type: ECarsPageActionKind,
  payload: Partial<ICarPageInitialState>,
}
 export interface ICarPageInitialState {
  carList: TCarItemMinData[];
  queryParams: IQueryParams;
  totalPages: number;
  filterOptions: IFilterQuery;
  searchQuery?: string;
}
export const carPageInitialState: ICarPageInitialState = {
  carList: [],
  queryParams: {
    page: 1,
    sortBy: 'ascending',
  },
  totalPages: 1,
  filterOptions: {},
};
export function carsPageReducer(state: ICarPageInitialState, action: ICarsPageAction): ICarPageInitialState {
  const { type, payload } = action;
  switch (type) {
    case ECarsPageActionKind.updateCarList:
      return {
        ...state,
        carList: payload.carList as TCarItemMinData[],
      };

    case ECarsPageActionKind.updateQueryParams:
      return {
        ...state,
        queryParams: payload.queryParams as IQueryParams,
      };
    
    case ECarsPageActionKind.updateTotalPages:
      return {
        ...state,
        totalPages: payload.totalPages as number,
      };
    
    case ECarsPageActionKind.updateSearchQuery: {
      const queryParams = removeProperty(state.queryParams, Object.keys(state.filterOptions));
      return {
        ...state,
        queryParams: { ...queryParams,  q: payload.searchQuery, page: 1 },
      };
    };
    
    case ECarsPageActionKind.updateFilterOptions: {
      let filterOptions = payload.filterOptions;
      let queryParams = { ...state.queryParams };
      queryParams = removeProperty(state.queryParams, ['q']);
      queryParams = {...queryParams,...filterOptions };
      const removedEmptyFilterOps = removePropertyEmptyValue(filterOptions);
      const removedEmptyQueryParams = removePropertyEmptyValue(queryParams);
      return {
        ...state,
        filterOptions: removedEmptyFilterOps as IFilterQuery,
        queryParams: { ...removedEmptyQueryParams, page: 1 },
      }
    };
    
    case ECarsPageActionKind.clearFilterOptions: {
      return {
        ...state,
        filterOptions: {},
        queryParams: { page: 1, sortBy: 'ascending' },
      }
    }
    default: throw new Error(`Invalid action`);
  }
}