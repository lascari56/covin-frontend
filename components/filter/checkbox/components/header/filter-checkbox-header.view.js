import React from 'react'

import FilterCheckboxInner from "../inner"

import * as S from "./filter-checkbox-header.styled"

export default function FilterCheckboxHeaderView({value, onAll}) {
  return (
    <S.Container>
      <S.All onClick={onAll}>
        <FilterCheckboxInner active={value === "all"} />

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
