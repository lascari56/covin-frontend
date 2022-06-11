import React, {useMemo} from 'react'

import FilterCheckboxView from "./filter-checkbox.view"

export default function FilterCheckboxContainer({value, onChange, ...props}) {
  const values = useMemo(() => {
    const res = {};

    value?.map(item => res[item] = true)

    return res;
  }, [value])

  const handleAll = () => {
    onChange(props.value === "all" ? null : "all")
  }

  const handleChange = (item) => {
    const _value = [...value]

    const index = _value?.indexOf(item)

    if (index !== -1) {
      _value?.splice(index, 1)
    } else {
      _value.push(item)
    }

    onChange(_value)
  }

  return (
    <FilterCheckboxView {...props} values={values} onAll={handleAll} onChange={handleChange} />
  )
}
