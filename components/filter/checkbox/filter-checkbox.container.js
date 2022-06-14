import React, {useMemo, useState} from 'react'

import FilterCheckboxView from "./filter-checkbox.view"

export default function FilterCheckboxContainer({value, options, ...props}) {
  const [search, setSearch] = useState("")

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
      props.onChange([])
    } else {
      const res = options?.map(item => item.value);

      props.onChange(res)
    }
  }

  const handleChangeSearch = (value) => {
    setSearch(value)
  }

  return (
    <FilterCheckboxView
      {...props}
      value={value}
      options={renderOptions}
      search={search}
      isAll={isAll}
      onChangeSearch={handleChangeSearch}
      onChangeAll={handleChangeAll}
    />
  )
}
