import React from 'react';

import FilterRangeView from "./filter-range.view"

const FilterRangeContainer = ({onChange, ...props}) => {
  const handleChange = (value, key) => {
    const res = {...props.value}

    res[key] = value

    onChange(res)
  }

  return (
    <FilterRangeView {...props} onChange={handleChange} />
  );
}

export default FilterRangeContainer;
