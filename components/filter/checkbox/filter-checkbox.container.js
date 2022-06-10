import React from 'react'

import FilterCheckboxView from "./filter-checkbox.view"

export default function FilterCheckboxContainer({onChange, ...props}) {
  const handleAll = () => {
    onChange(props.value === "all" ? null : "all")
  }

  return (
    <FilterCheckboxView {...props} onAll={handleAll} />
  )
}
