import React from 'react';

import FilterRangeView from "./filter-range.view"

const FilterRangeContainer = ({onChange, ...props}) => {
  const handleChange = (value, index) => {
    const res = [...props.value]

    res[index] = value

    onChange(res)
  }

  return (
    <FilterRangeView {...props} onChange={handleChange} />
  );
}

export default FilterRangeContainer;
