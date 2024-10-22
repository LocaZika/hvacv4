'use client'
import CarItem from "@components/carItem/CarItem";
import { Grid } from "@mui/material";

export default function CarList({data}: {data: TCarItemMinData[]}) {
  const notFoundData = (): JSX.Element => (
    <Grid item xs={12} textAlign={'center'}>
      <p style={{fontSize: '2.4rem'}}>Not found cars matching the keyword</p>
    </Grid>
  );
  const foundData = (): JSX.Element => (
    <Grid container marginX={'-1.5rem'} width={'auto'}>
    {
      data.map(car => (
        <Grid key={car.id} item xs={12} md={4} lg={4} paddingX={'1.5rem'} marginBottom={'3rem'}>
          <CarItem data={car} />
        </Grid>
      ))
    }
    </Grid>
  );
  return data.length > 0 ? foundData() : notFoundData();
}
