import React from 'react'

import {Icon} from "@components"

import * as S from './page-top-line-balance.styled'

export default function PageTopLineBalanceView() {
  return (
    <S.Container>
      <S.Icon src="/images/payments2.svg"/>

      <S.Title>Your balance:</S.Title>

      <S.Balance>0 $</S.Balance>

      <S.Add>
        <Icon name="plus" size={14} />  
      </S.Add>
    </S.Container>
  )
}
