import React from 'react'

import * as S from './payments-report-form.styled'


export default function PaymentsReportFormView() {
  return (
    <S.Container>
      <S.Input size="big" type="number" placeholder="0" />

      <S.Action title="Pay" theme="outline" />
    </S.Container>
  )
}
