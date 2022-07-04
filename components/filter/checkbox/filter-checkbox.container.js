import React, {useMemo, useState} from 'react'

import FilterCheckboxView from "./filter-checkbox.view"

export default function FilterCheckboxContainer({value, options, ...props}) {
  const [search, setSearch] = useState("")

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

  const isAll = useMemo(() => {
    return renderOptions?.length === value?.length && renderOptions.length
  }, [renderOptions?.length, value?.length, renderOptions])

  const isEmpty = useMemo(() => {
    return !options?.length
  }, [options?.length])

  const handleChangeAll = () => {
    if (isAll) {
      props.onChange([])
    } else {
      const res = renderOptions?.map(item => item.value);

      props.onChange(res)
    }
  }

  const handleChangeSearch = (value) => {
    setSearch(value)
  }

  const handleClear = () => {
  }

  return (
    <FilterCheckboxView
      {...props}
      value={value}
      options={renderOptions}
      search={search}
      isAll={isAll}
      isEmpty={isEmpty}
      onChangeSearch={handleChangeSearch}
      onChangeAll={handleChangeAll}
      onClear={handleClear}
    />
  )
}
