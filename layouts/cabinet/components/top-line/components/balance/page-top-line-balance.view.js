import React from 'react'

import * as S from './page-top-line-balance.styled'

export default function PageTopLineBalanceView() {
  return (
    <S.Container>
      <S.Icon src="/images/payments2.svg"/>

      <S.Title>Your balance:</S.Title>

      <S.Balance>0 $</S.Balance>

      <S.Add src="/images/plus.svg"/>
    </S.Container>
  )
}
