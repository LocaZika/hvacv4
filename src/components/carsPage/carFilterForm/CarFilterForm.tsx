import PriceRange from '@components/priceRange/PriceRange';
import Select from '@components/select/Select';
import carFilterStyle from './carfilterForm.module.scss';
import { FormEvent, useState } from 'react';

export default function CarFilterForm({data, handleFilter}: {data: TCarFilterForm, handleFilter: (filterOptions: IFilterQuery) => void}) {
  const [filterOptions, setFilterOptions] = useState<IFilterQuery>({});
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    handleFilter(filterOptions);
  };
  const handleResetFilter = (e: FormEvent) => {
    e.preventDefault();
    setFilterOptions({});
    handleFilter({});
  }
  return (
    <div className={carFilterStyle['container']}>
      <h5>car filter</h5>
      <form onSubmit={handleSubmit}>
        {
          data.map(({id, label, name, options}) => (
            <Select
              key={id}
              label={label}
              name={name}
              values={options}
              handleFilterOption={setFilterOptions}
              filterOptions={filterOptions}
              hideLabel
              className={carFilterStyle['select']}
              classes={{
                select: carFilterStyle['item'],
              }}
            />
          ))
        }
        <div className={carFilterStyle['price-range']}>
          <PriceRange min={0} max={1200} values={[400, 800]} />
        </div>
        <div className={carFilterStyle['btn']}>
          <button type="submit">Filter car</button>
        </div>
      </form>
      <div className={carFilterStyle['btn']}>
        <button type="button" onClick={handleResetFilter}>reset filter</button>
      </div>
    </div>
  )
}
