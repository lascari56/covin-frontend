import React from 'react'

import FilterCheckboxInner from "../inner"

import * as S from "./filter-checkbox-header.styled"

export default function FilterCheckboxHeaderView() {
  return (
    <S.Container>
      <S.All>
        <FilterCheckboxInner />

        <S.AllLabel>Select all</S.AllLabel>
      </S.All>

      <S.Content>
        <S.Item>
          <S.Template>Template</S.Template>
        </S.Item>

        <S.Item>
          <S.SaveTemplate>Save template</S.SaveTemplate>
        </S.Item>
      </S.Content>
    </S.Container>
  )
}
