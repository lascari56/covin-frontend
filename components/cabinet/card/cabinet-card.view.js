import React from 'react'

import * as S from "./cabinet-card.styled"

export default function CabinetCardView({className, children, title, icon}) {
  return (
    <S.Container className={className}>
      <S.Header>
        <S.Icon src={icon} />

        <S.Title>{title}</S.Title>
      </S.Header>

      <S.Content>
        {children}
      </S.Content>
    </S.Container>
  )
}
