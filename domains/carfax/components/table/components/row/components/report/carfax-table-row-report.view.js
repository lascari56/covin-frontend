import React from 'react';

import {TableLink} from "@components/table"

import * as S from "./carfax-table-row-report.styled"

const CarfaxTableRowReportView = ({data, onView}) => {
  return (
    <S.Container>
      <TableLink onClick={() => onView(data?.file)}>View</TableLink>

      {/* <S.Hr />

      <TableLink>PDF</TableLink> */}
    </S.Container>
  );
}

export default CarfaxTableRowReportView;
