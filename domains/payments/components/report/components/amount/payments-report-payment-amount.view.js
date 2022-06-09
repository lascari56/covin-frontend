import React from 'react'

import * as S from './payments-report-payment-amount.styled'

export default function PaymentsReportPaymentAmountView() {
  return (
    <S.Container>
      <S.Column>
        <S.Title>Amount</S.Title>

        <S.Description>For report purchase only</S.Description>
      </S.Column>

      <S.Payment>
        <S.Icon src="/images/apple-pay.svg"/>

        <S.Icon src="/images/google-pay.svg"/>

        <S.Icon src="/images/visa.svg"/>

        <S.Icon src="/images/mastercard.svg"/>
      </S.Payment>
    </S.Container>
  )
}
