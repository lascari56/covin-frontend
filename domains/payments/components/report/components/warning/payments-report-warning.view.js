import React from 'react'

import * as S from './payments-report-warning.styled'

export default function PaymentsReportWarningView() {
  return (
    <S.Container>
        <S.Description>This balance is only used to purchase reports.</S.Description>

        <S.Description>Not for Premium subscription!</S.Description>
    </S.Container>
  )
}
