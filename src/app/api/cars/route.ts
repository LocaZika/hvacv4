import { sendRequest } from "@utils/api.utils";
import { NextRequest, NextResponse } from "next/server";
import queryString from "query-string";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const queryParams = Object.fromEntries(searchParams.entries());
  const isFilter = searchParams.has('brand') || searchParams.has('model') || searchParams.has('bodyStyle') || searchParams.has('transmission') || searchParams.has('mileage');
  let url = '/products';
  if (isFilter) {
    url = `${url}/filter?${queryString.stringify(queryParams)}`;
  }
  const isSearch = searchParams.has('q');
  if (isSearch) {
    url = `${url}/search?${queryString.stringify(queryParams)}`;
  }
  if (!isFilter && !isSearch) {
    url = `${url}?${queryString.stringify(queryParams)}`;
  }
  const res = await sendRequest<IBackendResponse<TCarItemMinData[]>>({url});
  return NextResponse.json(res);
}
