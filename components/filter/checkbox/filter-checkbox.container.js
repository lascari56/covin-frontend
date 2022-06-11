import React, {useMemo, useState} from 'react'

import FilterCheckboxView from "./filter-checkbox.view"

export default function FilterCheckboxContainer({value, onChange, ...props}) {
  const [search, setSearch] = useState("")

  const values = useMemo(() => {
    const res = {};

    value?.map(item => res[item] = true)

    return res;
  }, [value])


  const isAll = useMemo(() => {
    return props.options?.length === value?.length
  }, [props.options?.length])

  const handleChangeAll = () => {
    if (isAll) {
      onChange([])
    } else {
      const res = props?.options?.map(item => item.value);

      onChange(res)
    }
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
    <FilterCheckboxView
      {...props}
      values={values}
      search={search}
      isAll={isAll}
      onChangeSearch={setSearch}
      onChangeAll={handleChangeAll}
      onChange={handleChange}
    />
  )
}
