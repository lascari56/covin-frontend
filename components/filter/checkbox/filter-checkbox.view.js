import React from 'react'

import FilterGroup from "../group"

import FilterCheckboxItem from "./components/item"
import FilterCheckboxHeader from "./components/header"

import * as S from "./filter-checkbox.styled"


export default function FilterCheckboxView({ title, options, value, onChange, onAll }) {
  return (
    <FilterGroup title={title}>
      <FilterCheckboxHeader value={value} onAll={onAll} />

      <S.Container>
        <S.Search isIcon={false} />

        <S.Content>
          {options?.map(item => (
            <FilterCheckboxItem data={item} />
          ))}
        </S.Content>
      </S.Container>
    </FilterGroup>
  )
}
