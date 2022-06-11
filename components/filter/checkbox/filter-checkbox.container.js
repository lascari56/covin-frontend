import React, {useMemo} from 'react'

import FilterCheckboxView from "./filter-checkbox.view"

export default function FilterCheckboxContainer({value, onChange, ...props}) {
  const values = useMemo(() => {
    const res = {};

    
  }, [value])

  const handleAll = () => {
    onChange(props.value === "all" ? null : "all")
  }

  const handleChange = (value) => {
    onChange([value])
  }

  return (
    <FilterCheckboxView {...props} onAll={handleAll} onChange={handleChange} />
  )
}
