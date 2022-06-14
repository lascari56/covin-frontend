import React from 'react'

import FromCheckboxItemInner from "./components/inner"

import * as S from "./form-checkbox-item.styled"

export default function FormCheckboxItemView({className, label, count, active, LeftComponent, onClick}) {
  return (
    <S.Container className={className} onClick={onClick}>
      <FromCheckboxItemInner active={active} />

      {!!LeftComponent && <S.Left>{LeftComponent}</S.Left>}

      <S.Label active={active}>
        {label}

        {count !== undefined && <S.Count>({count})</S.Count>}
      </S.Label>
    </S.Container>
  )
}
