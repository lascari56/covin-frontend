import React from 'react';

import CarfaxTableRowReport from "./components/report"

import {TableLink} from "@components/table"

import * as S from "./carfax-table-row.styled"

const CarfaxTableRowView = ({data}) => {
  return (
    <tr>
      <td>
        <S.Item>
          <S.Date>{data?.date}</S.Date>
        </S.Item>
      </td>
      <td>
        <S.Item>
          {data?.vin}
        </S.Item>
      </td>
      <td>
        <S.Item>
          <CarfaxTableRowReport />
        </S.Item>
      </td>
      <td>
        <S.Item>
          <TableLink>Sticker</TableLink>
        </S.Item>
      </td>
    </tr>
  );
}

export default CarfaxTableRowView;
