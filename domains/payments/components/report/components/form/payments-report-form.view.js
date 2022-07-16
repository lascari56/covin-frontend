import React from 'react'

import * as S from './payments-report-form.styled'


export default function PaymentsReportFormView({formik}) {
  return (
    <S.Container>
      <S.Input 
        size="big"
        type="number"
        placeholder="0"
        isValid={!formik.touched.amount || !formik.errors.amount}
        value={formik.values.amount}
        onChange={value => formik.setFieldValue('amount', value)}
      />

      <S.Action title="Pay" theme="outline" onClick={formik.handleSubmit} />
    </S.Container>
  )
}
