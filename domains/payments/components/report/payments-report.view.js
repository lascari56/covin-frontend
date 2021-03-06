import React from 'react'

import {CabinetCard} from "@components/cabinet"

import PaymentsReportAmount from './components/amount'
import PaymentsReportForm from './components/form'
import PaymentsReportWarning from './components/warning'

import * as S from './payments-report.styled'

export default function PaymentsReportView({ className, formik, data }) {
  return (
    <CabinetCard className={className} title="Buy Report" icon="/images/payments2.svg">
      <PaymentsReportAmount/>

      <PaymentsReportForm formik={formik} />

      <PaymentsReportWarning/>

      <S.Contact/>
    </CabinetCard>
  )
}
