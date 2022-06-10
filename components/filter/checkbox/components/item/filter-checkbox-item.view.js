import React from 'react'

import FilterCheckboxInner from "../inner"

import * as S from "./filter-checkbox-item.styled"

export default function filterCheckboxItemView({data}) {
  return (
    <S.Container>
      <FilterCheckboxInner />

      <S.Label>{data?.value}</S.Label>

      <S.Count>({data?.count})</S.Count>
    </S.Container>
  )
}
