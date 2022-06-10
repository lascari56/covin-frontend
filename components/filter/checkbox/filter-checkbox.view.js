import React from 'react'

import FilterGroup from "../group"

import FilterCheckboxItem from "./components/item"
import FilterCheckboxHeader from "./components/header"

import * as S from "./filter-checkbox.styled"

const items = [
  {value: "100 S Quat", count: 1},
  {value: "100 Wagon", count: 1},
  {value: "100 S Quat", count: 1},
  {value: "100 S Quat", count: 1},
  {value: "100 S Quat", count: 1},
  {value: "100 S Quat", count: 1},
  {value: "100 S Quat", count: 1},
  {value: "100 S Quat", count: 1},
]

export default function FilterCheckboxView({ title }) {
  return (
    <FilterGroup title={title}>
      <FilterCheckboxHeader />

      <S.Container>
        <S.Search isIcon={false} />

        <S.Content>
          {items?.map(item => (
            <FilterCheckboxItem data={item} />
          ))}
        </S.Content>
      </S.Container>
    </FilterGroup>
  )
}
