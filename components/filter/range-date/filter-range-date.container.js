import React, { useMemo } from 'react';

import FilterRangeDateView from "./filter-range-date.view"

import moment from "moment"

const FilterRangeSelectContainer = ({min, onChange, ...props}) => {
  const handleChange = (value, index) => {
    const res = [...props.value]

    res[index] = value

    onChange(res)
  }

  const options = useMemo(() => {
    const res = [];

    const dateEnd = +moment().format("YYYY")

    for (let i = min; i <= dateEnd; i++) {
      res.push({label: `${i}`, value: `${i}`})
    }

    return res;
  }, [min])

  const optionsMin = useMemo(() => {
    return options?.map(item => {
      let disabled = false;

      if (props.value[1]) {
        disabled = item.value > props.value[1]
      }

      return {...item, disabled}
    });
  }, [options, props.value[1]])

  const optionsMax = useMemo(() => {
    return options?.map(item => {
      let disabled = false;

      if (props.value[0]) {
        disabled = item.value > props.value[0]
      }

      return {...item, disabled}
    });
  }, [options, props.value[0]])

  return (
    <FilterRangeDateView {...props} optionsMin={optionsMin} optionsMax={optionsMax} onChange={handleChange} />
  );
}

export default FilterRangeSelectContainer;
