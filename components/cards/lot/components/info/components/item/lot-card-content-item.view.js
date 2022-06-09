import React from 'react'

import * as S from './lot-card-content-item.styled'

export default function LotCardContentItemView({className, title, icon}) {
  return (
    <S.Container className={className}>
      <S.Left>
        <S.Icon src={icon}/>
      </S.Left>
      
      <S.Title>{title || "-"}</S.Title>
    </S.Container>
  )
}
