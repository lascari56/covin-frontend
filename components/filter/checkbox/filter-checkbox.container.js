import React, {useMemo, useState} from 'react'

import FilterCheckboxView from "./filter-checkbox.view"

export default function FilterCheckboxContainer({value, options, onChange, ...props}) {
  const [search, setSearch] = useState("")

  const values = useMemo(() => {
    const res = {};

    value?.map(item => res[item] = true)

    return res;
  }, [value])

  const isAll = useMemo(() => {
    return options?.length === value?.length
  }, [options?.length, value?.length])

  const renderOptions = useMemo(() => {
    if (!search) {
      return options
    }

    return options?.filter(item => {
      const _value = item?.value?.toLowerCase();
      const _search = search?.toLowerCase()

      return _value?.indexOf(_search) !== -1
    })
  }, [search, options])

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

  

  const handleChangeSearch = (event) => {
    setSearch(event.target.value)
  }

  return (
    <FilterCheckboxView
      {...props}
      options={renderOptions}
      values={values}
      search={search}
      isAll={isAll}
      onChangeSearch={handleChangeSearch}
      onChangeAll={handleChangeAll}
      onChange={handleChange}
    />
  )
}
