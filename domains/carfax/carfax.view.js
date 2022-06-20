import React from 'react'

import { CabinetPage } from "@components/cabinet";

import {Table} from "@components"

import * as S from "./carfax.styled"

export default function СarfaxView() {
  return (
    <CabinetPage>
      <S.Form />

      <Table />
    </CabinetPage>
  )
}
