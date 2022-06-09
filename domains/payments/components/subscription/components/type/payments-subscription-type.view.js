import React from 'react'

import * as S from './payments-subscription-type.styled'

export default function PaymentsSubscriptionTypeView({ className }) {
  return (
    <S.Container className={className}>
      <S.Title>Package type:</S.Title>

      <S.Type>Free</S.Type>
    </S.Container>
  )
}
