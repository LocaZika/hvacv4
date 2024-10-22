export {};

declare global {
  interface IBackendResponse<T> {
    statusCode: number;
    totalPages?: number;
    page?: number;
    ok?: boolean;
    message?: string;
    error?: string | string[];
    access_token?: string;
    data: T;
  };

  interface IRequest {
    url: string;
    method?: 'GET' | 'POST' | 'PATCH' | 'DELETE';
    body?: {[key: string]: any};
    headers?: any;
    queryParams?: IQueryParams;
    nextOptions?: any;
  }
  interface IFilterQuery {
    brand?: string;
    model?: number;
    bodyStyle?: string;
    transmission?: 'auto' | 'manual';
    mileage?: number;
  }
  interface ISearchQuery {
    q?: string;
  }
  interface IQueryParams extends IFilterQuery extends ISearchQuery {
    page: number;
    sortBy: 'ascending' | 'descending';
  }
}