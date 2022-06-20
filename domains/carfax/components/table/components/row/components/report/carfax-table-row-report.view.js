import React from 'react';

import {TableLink} from "@components/table"

import * as S from "./carfax-table-row-report.styled"

const CarfaxTableRowReportView = () => {
  return (
    <S.Container>
      <TableLink>View</TableLink>

      <S.Hr />

      <TableLink>PDF</TableLink>
    </S.Container>
  );
}

export default CarfaxTableRowReportView;
