import React from 'react';

import {TableLink} from "@components/table"

import * as S from "./payments-table-row.styled"

const PaymentsTableRowView = ({data, status}) => {
  return (
    <tr>
      <td>
        <S.Item>
          <S.Date>{data?.date}</S.Date>
          {/* <S.Date>{JSON.stringify(data)}</S.Date> */}
        </S.Item>
      </td>
      <td>
        <S.Item>
          <S.Balance>{data?.type || "Balance"}</S.Balance>
        </S.Item>
      </td>
      <td>
        <S.Item>
          <S.Amount>{data?.data?.amount ? `${data?.data?.amount} ${data?.data?.currency}` : "-"}</S.Amount>
        </S.Item>
      </td>
      <td>
        <S.Item>
          <S.Status status={status}>{status}</S.Status>
        </S.Item>
      </td>
      <td>
        <S.Item>
          {data?.info?.from ? (
            <S.Info>Period from <S.InfoDate>01.13.2022</S.InfoDate> to <S.InfoDate>02.12.2022</S.InfoDate></S.Info>
          ) : "-"}
        </S.Item>
      </td>
    </tr>
  );
}

export default PaymentsTableRowView;
