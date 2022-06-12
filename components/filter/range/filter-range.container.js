import React from 'react';

import FilterRangeView from "./filter-range.view"

const FilterRangeContainer = ({onChange, ...props}) => {
  const handleChange = (event, index) => {
    const _value = [...props.value]

    _value[index] = event.target.value

    onChange(_value)
  }

  return (
    <FilterRangeView {...props} onChange={handleChange} />
  );
}

export default FilterRangeContainer;
