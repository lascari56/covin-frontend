import React from 'react'

import * as S from "./filter-checkbox-header.styled"

export default function FilterCheckboxHeaderView({isAll, onChangeAll, onChangeTemplate}) {
  return (
    <S.Container>
      <S.CheckboxItem 
        active={isAll}
        LeftComponent={<S.AllLabel>Select all</S.AllLabel>}
        onClick={onChangeAll}
      />

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
