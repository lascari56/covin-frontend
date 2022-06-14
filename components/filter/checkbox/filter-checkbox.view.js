import PropTypes from "prop-types"

import React from 'react'

import {FormCheckbox} from "components/form"

import FilterGroup from "../group"

import FilterCheckboxHeader from "./components/header"

import * as S from "./filter-checkbox.styled"

function FilterCheckboxView({ 
  title, 
  value,
  options, 
  isSearch, 
  isAll, 
  search, 
  onChangeSearch, 
  onChange, 
  onChangeAll,
  onChangeTemplate
 }) {
  return (
    <FilterGroup title={title}>
      {(isAll || !!onChangeTemplate) && <FilterCheckboxHeader isAll={isAll} onChangeAll={onChangeAll} onChangeTemplate={onChangeTemplate} />}

      <S.Container>
        {isSearch && <S.Search isIcon={false} value={search} onChange={onChangeSearch} />}
        
        <S.Content>
          <FormCheckbox value={value} options={options} onChange={onChange} />
          {/* {options?.map(item => (
            <FilterCheckboxItem data={item} active={values[item.value]} key={item.value} onClick={() => onChange(item.value)} />
          ))} */}
        </S.Content>
      </S.Container>
    </FilterGroup>
  )
}

FilterCheckboxView.defaultProps = {
  isSearch: true
}

export default FilterCheckboxView;