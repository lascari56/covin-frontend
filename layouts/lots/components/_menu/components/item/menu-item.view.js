import React from 'react'

import * as S from "./menu-item.styled"

export default function MenuItemView({title, active}) {
  return (
    <S.Container active={active}>
      <S.Title active={active}>{title}</S.Title>
    </S.Container>
  )
}
