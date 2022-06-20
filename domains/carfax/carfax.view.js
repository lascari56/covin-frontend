import React from 'react'

import { CabinetPage } from "@components/cabinet";

import CarfaxTable from "./components/table"

import * as S from "./carfax.styled"

export default function СarfaxView() {
  return (
    <CabinetPage>
      <S.Form />

      <CarfaxTable />
    </CabinetPage>
  )
}
