'use client'

import { Container, Grid } from "@mui/material";
import CarFilterForm from "./carFilterForm/CarFilterForm";
import CarList from "./carList/CarList";
import CarSearchForm from "./carSearchForm/CarSearchForm";
import CarSortForm from "./carSortForm/CarSortForm";
import carsPageStyle from "./cars.module.scss";
import Pagination from "@components/pagination/Pagination";
import { useEffect, useReducer } from "react";
import queryString from "query-string";
import { useRouter } from "next/navigation";
import { carPageInitialState, carsPageReducer, ECarsPageActionKind } from "./carsPage.reducer";

interface ICarsPage {
  carsPageRes: IBackendResponse<TCarspage>;
}

export default function CarsPage({carsPageRes}: ICarsPage) {
  const router = useRouter();
  const [{
    carList,
    queryParams,
    totalPages,
  }, dispatch] = useReducer(carsPageReducer, carPageInitialState);
  const carspage = carsPageRes.data;
  const fetchData = async (): Promise<void> => {
    const res = await fetch(`/api/cars?${queryString.stringify(queryParams)}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (res.ok) {
      const result: IBackendResponse<TCarItemMinData[]> = await res.json();
      dispatch({
        type: ECarsPageActionKind.updateCarList,
        payload: { carList: result.data } ,
      });
      dispatch({
        type: ECarsPageActionKind.updateTotalPages,
        payload: { totalPages: result.totalPages }
      });
    }
  };
  const handleSortByChange = (sortBy: TSortBy): void => {
    dispatch({
      type: ECarsPageActionKind.updateQueryParams,
      payload: { queryParams: { ...queryParams, sortBy } }
    });
  };
  const handlePageChange = (page: number): void => {
    dispatch({
      type: ECarsPageActionKind.updateQueryParams,
      payload: { queryParams: {...queryParams, page } }
    });
  };
  const handleSearch = (searchQuery: string): void => {
    dispatch({
      type: ECarsPageActionKind.updateSearchQuery,
      payload: { searchQuery },
    });
  }
  const handleFilter = (filterOptions: IFilterQuery): void => {
    dispatch({
      type: ECarsPageActionKind.updateFilterOptions,
      payload: { filterOptions },
    });
  }
  const handleClearFilterOptions = () => {
    dispatch({
      type: ECarsPageActionKind.clearFilterOptions,
      payload: {},
    });
  };
  useEffect(() => {
    router.replace(`/cars?${queryString.stringify(queryParams)}`);
    fetchData();
  }, [queryParams]);
  return (
    <section className={`${carsPageStyle['container']} spad`}>
      <Container>
        <Grid container width={'auto'} marginX={'-1.5rem'}>
          <Grid item xs={12} lg={3} paddingX={'1.5rem'}>
            <div className={carsPageStyle['sidebar']}>
              <CarSearchForm handleSearch={handleSearch} />
              <CarFilterForm data={carspage.filterForm} handleFilter={handleFilter} handleClearFilterOptions={handleClearFilterOptions} />
            </div>
          </Grid>
          <Grid item xs={12} lg={9} paddingX={'1.5rem'}>
            <div className={carsPageStyle['sort']}>
              <CarSortForm handleSortByChange={handleSortByChange} />
            </div>
            <div className={carsPageStyle['cars']}>
              <CarList data={carList} />
            </div>
            <div className={carsPageStyle['pagination']}>
              <Pagination totalPages={totalPages} handlePageChange={handlePageChange} />
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}
