import React from 'react'

import * as S from './payments-info.styled'

export default function PaymentsInfoView() {
  return (
    <S.Container>
      <S.Title>Return and exchange</S.Title>

      <S.Description>The report cannot be returned If there was an error when buying a report and you did not receive a report, the money is returned to your balance.</S.Description>
    </S.Container>
  )
}
