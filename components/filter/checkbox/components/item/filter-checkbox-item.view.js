import React from 'react'

import FilterCheckboxInner from "../inner"

import * as S from "./filter-checkbox-item.styled"

export default function filterCheckboxItemView({data, active, onClick}) {
  return (
    <S.Container onClick={onClick}>
      <FilterCheckboxInner active={active} />

      <S.Label>{data?.value}</S.Label>

      <S.Count>({data?.count})</S.Count>
    </S.Container>
  )
}
