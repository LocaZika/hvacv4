import { QueryParamsContext } from "@/contexts/carsPage.context";
import queryString from "query-string";
import { useContext } from "react";

export default async function useApi(url: string){
  const { queryParams } = useContext(QueryParamsContext);
  let urlToDbServer = `${process.env.NEXT_PUBLIC_DB_SERVER}/${url}?${queryString.stringify(queryParams)}`;
  const res = await fetch(urlToDbServer, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
  });
  return res.json();
}
