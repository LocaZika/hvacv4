'use client'
import { useEffect, useState } from 'react';
import priceRangeStyle from './priceRangeStyle.module.scss';
import { toCurrency } from '@utils/number.utils';
import { Slider } from '@mui/material';

const priceRangeText = (values: number[]): string => `${toCurrency(values[0])} - ${toCurrency(values[1])}`;
type TPriceValues = number[];
interface IPriceRange {
  min: number,
  max: number,
  values?: TPriceValues,
}
export default function PriceRange({min, max, values}: IPriceRange) {
  const [value, setValue] = useState<TPriceValues>([min, max]);
  const handleChange = (e: Event, newValue: number | number[]): void => {
    setValue(newValue as TPriceValues);
  }  
  useEffect(() => {
    if (values){
      setValue(values);
    }
  }, []);
  return (
    <div className={priceRangeStyle['container']}>
      <span className={priceRangeStyle['text']}>
        price range:&nbsp;
        <span className={priceRangeStyle['text__range']}>{priceRangeText(value)}</span>
      </span>
      <Slider 
        value={value}
        min={min}
        max={max}
        onChange={handleChange}
        className={priceRangeStyle['slider']}
        name='price'
        classes={{
          rail: priceRangeStyle['slider__rail'],
          track: priceRangeStyle['slider__track'],
          thumb: priceRangeStyle['slider__thumb'],
        }}
      />
    </div>
  )
}
