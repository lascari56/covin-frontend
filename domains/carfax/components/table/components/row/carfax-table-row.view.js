import React from 'react';
import moment from 'moment';

import CarfaxTableRowReport from "./components/report"

import {TableLink} from "@components/table"

import * as S from "./carfax-table-row.styled"

const CarfaxTableRowView = ({data, type, onView}) => {
  return (
    <tr>
      <td>
        <S.Item>
          <S.Date>{moment(data?.date).format("DD.MM.YYYY")}</S.Date>
        </S.Item>
      </td>
      
      <td>
        <S.Item>
          {data?.vin}
        </S.Item>
      </td>

      {data?.file && <td>
        <S.Item>
          <CarfaxTableRowReport data={data} />
        </S.Item>
      </td>}

      {type === "carfax" && !!data?.bonusSticker && <td>
        <S.Item onClick={() => onView(data?.bonusSticker)}>
          <TableLink>Sticker</TableLink>
        </S.Item>
      </td>}
    </tr>
  );
}

export default CarfaxTableRowView;
