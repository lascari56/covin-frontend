import React, { useMemo, useEffect } from 'react';

import FilterRangeDateView from "./filter-range-date.view"

import moment from "moment"

const FilterRangeSelectContainer = ({min, onChange, ...props}) => {
  const handleChange = (value, key) => {
    const res = {...props.value}

    res[key] = value

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

      if (props.value?.max) {
        disabled = item.value > props.value?.max
      }

      return {...item, disabled}
    });
  }, [options, props.value?.max])

  const optionsMax = useMemo(() => {
    return options?.map(item => {
      let disabled = false;

      if (props.value?.min) {
        disabled = item.value < props.value?.min
      }

      return {...item, disabled}
    });
  }, [options, props.value?.min])


  useEffect(() => {
    const _value = {...props.value}

    if (_value?.min && _value?.max) {
      if (_value?.min > _value?.max) {
        _value.min = ""
      }
  
      if (_value?.max < _value?.min) {
        _value.max = ""
      }
  
      if (props.value?.min !== _value?.min || props.value?.max !== _value?.max) {
        onChange(_value)
      }
    }
  }, [props.value])

  return (
    <FilterRangeDateView {...props} optionsMin={optionsMin} optionsMax={optionsMax} onChange={handleChange} />
  );
}

export default FilterRangeSelectContainer;
