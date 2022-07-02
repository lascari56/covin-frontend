import React from 'react'

import Icon from "@components/icon"

import * as S from './lot-card-content-item.styled'

export default function LotCardContentItemView({className, title, icon}) {
  return (
    <S.Container className={className}>
      <S.Left>
        <Icon icon={icon} width={21} height={16} />
      </S.Left>
      
      <S.Title>{title || "-"}</S.Title>
    </S.Container>
  )
}
