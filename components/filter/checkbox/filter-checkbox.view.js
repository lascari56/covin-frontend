import PropTypes from "prop-types"

import React from 'react'

import FilterGroup from "../group"

import FilterCheckboxItem from "./components/item"
import FilterCheckboxHeader from "./components/header"

import * as S from "./filter-checkbox.styled"

function FilterCheckboxView({ 
  title, 
  options, 
  isSearch, 
  isAll, 
  values, 
  search, 
  onChangeSearch, 
  onChange, 
  onChangeAll
 }) {
  return (
    <FilterGroup title={title}>
      <FilterCheckboxHeader isAll={isAll} onChangeAll={onChangeAll} />

      <S.Container>
        {isSearch && <S.Search isIcon={false} value={search} onChange={onChangeSearch} />}
        
        <S.Content>
          {options?.map(item => (
            <FilterCheckboxItem data={item} active={values[item.value]} onClick={() => onChange(item.value)} />
          ))}
        </S.Content>
      </S.Container>
    </FilterGroup>
  )
}

FilterCheckboxView.defaultProps = {
  isSearch: true
}

export default FilterCheckboxView;