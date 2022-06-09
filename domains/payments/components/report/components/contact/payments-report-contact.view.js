import React from 'react'

import * as S from './payments-report-contact.styled'

export default function PaymentsReportContactView({className}) {
  return (
    <S.Container className={className}>
      <S.Title>Our contact</S.Title>

      <S.Contact>
        <S.Icon src="/images/telephone.svg"/>

        <S.Number>+1 888 2536688</S.Number>
      </S.Contact>
    </S.Container>
  )
}
