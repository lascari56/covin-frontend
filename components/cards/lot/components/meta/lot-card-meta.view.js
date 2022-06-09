import React from 'react'

import * as S from "./lot-card-meta.styled"

export default function LotCardMetaView({className, type, label, value}) {
  return (
    <S.Container className={className} type={type}>
      <S.Label>{label}</S.Label>

      <S.Value>{value}</S.Value>
    </S.Container>
  )
}
