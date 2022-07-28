import React from 'react'

import * as S from "./cabinet-card.styled"

export default function CabinetCardView({className, children, title, IconComponent, RightComponent}) {
  return (
    <S.Container className={className}>
      {!!title && (
        <S.Header>
          {!!IconComponent && <S.Icon>{IconComponent}</S.Icon>}

          <S.Title>{title}</S.Title>

          {RightComponent}
        </S.Header>
      )}

      <S.Content>
        {children}
      </S.Content>
    </S.Container>
  )
}
