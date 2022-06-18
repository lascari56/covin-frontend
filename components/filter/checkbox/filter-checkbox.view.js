import PropTypes from "prop-types"

import React from 'react'

import {FormCheckbox} from "components/form"

import FilterGroup from "../group"

import FilterCheckboxHeader from "./components/header"

import * as S from "./filter-checkbox.styled"

function FilterCheckboxView({ 
  value,
  options, 
  isSearch, 
  isAll, 
  isEmpty,
  search, 
  disabled,
  onChangeSearch, 
  onChange, 
  onChangeAll,
  onChangeTemplate,
  ...props
 }) {
  return (
    <FilterGroup {...props} disabled={disabled || isEmpty}>
      <FilterCheckboxHeader isAll={isAll} onChangeAll={onChangeAll} onChangeTemplate={onChangeTemplate} />

      <S.Container>
        {isSearch && <S.Search isIcon={false} empty={isEmpty} value={search} onChange={onChangeSearch} />}
        
        <S.Content>
          <FormCheckbox value={value} options={options} onChange={onChange} />
        </S.Content>
        
      </S.Container>
    </FilterGroup>
  )
}

FilterCheckboxView.defaultProps = {
  isSearch: true,
  isAll: true
}

export default FilterCheckboxView;