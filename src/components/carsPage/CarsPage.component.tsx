'use client'

import { Container, Grid } from "@mui/material";
import CarFilterForm from "./carFilterForm/CarFilterForm";
import CarList from "./carList/CarList";
import CarSearchForm from "./carSearchForm/CarSearchForm";
import CarSortForm from "./carSortForm/CarSortForm";
import carsPageStyle from "./cars.module.scss";
import Pagination from "@components/pagination/Pagination";
import { useEffect, useState } from "react";
import queryString from "query-string";
import { useRouter } from "next/navigation";
import { removeProperty, removePropertyEmptyValue } from "@utils/object.utils";

interface ICarsPage {
  carsPageRes: IBackendResponse<TCarspage>;
}

export default function CarsPage({carsPageRes}: ICarsPage) {
  const router = useRouter();
  const [carsList, setCarsList] = useState<TCarItemMinData[]>([]);
  const [queryParams, setQueryParams] = useState<IQueryParams>({
    page: 1,
    sortBy: "ascending",
  });
  const [totalPages, setTotalPages] = useState<number>(1);
  const [filterOptions, setFilterOptions] = useState<IFilterQuery>({});
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
      setCarsList(result.data);
      setTotalPages(result.totalPages ?? 1);
    }
  };
  const handleSortByChange = (sortBy: TSortBy): void => {
    setQueryParams({...queryParams, sortBy });
  };
  const handlePageChange = (page: number): void => {
    setQueryParams({...queryParams, page });
  };
  const handleSearch = (searchQuery: string): void => {
    const newQueryObj = removeProperty<IQueryParams>(queryParams, Object.keys(filterOptions));
    const searchQueryObj = {...newQueryObj, q: searchQuery};
    setQueryParams(searchQueryObj);
  }
  const handleFilter = (filterOptions: IFilterQuery): void => {
    const queryObj = {...queryParams, ...filterOptions};
    let filterQueryObj = removeProperty<IQueryParams>(queryObj, ['q']);
    filterQueryObj = removePropertyEmptyValue<IQueryParams>(filterQueryObj);
    setFilterOptions(filterQueryObj);
    setQueryParams(filterQueryObj);
  }
  console.log('>>Query params: ', queryParams);
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
              <CarFilterForm data={carspage.filterForm} handleFilter={handleFilter} />
            </div>
          </Grid>
          <Grid item xs={12} lg={9} paddingX={'1.5rem'}>
            <div className={carsPageStyle['sort']}>
              <CarSortForm handleSortByChange={handleSortByChange} />
            </div>
            <div className={carsPageStyle['cars']}>
              <CarList data={carsList} />
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
