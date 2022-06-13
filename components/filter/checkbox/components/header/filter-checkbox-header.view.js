import React from 'react'

import FilterCheckboxInner from "../inner"

import * as S from "./filter-checkbox-header.styled"

export default function FilterCheckboxHeaderView({isAll, onChangeAll, onChangeTemplate}) {
  return (
    <S.Container>
      <S.All onClick={onChangeAll}>
        <FilterCheckboxInner active={isAll} />

        <S.AllLabel>Select all</S.AllLabel>
      </S.All>

      {!!onChangeTemplate && (
        <S.Content>
          <S.Item>
            <S.Template>Template</S.Template>
          </S.Item>

          <S.Item>
            <S.SaveTemplate>Save template</S.SaveTemplate>
          </S.Item>
        </S.Content>
      )}
    </S.Container>
  )
}
