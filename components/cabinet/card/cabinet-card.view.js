import React from 'react'

import * as S from "./cabinet-card.styled"

export default function CabinetCardView({className, children, title, icon, IconComponent}) {
  return (
    <S.Container className={className}>
      <S.Header>
        {/* {!!icon && <S.Icon src={icon} />} */}
        
        {!!IconComponent && <S.Icon>{IconComponent}</S.Icon>}

        <S.Title>{title}</S.Title>
      </S.Header>

      <S.Content>
        {children}
      </S.Content>
    </S.Container>
  )
}
