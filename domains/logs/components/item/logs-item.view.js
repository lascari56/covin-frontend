import React from 'react';

import moment from "moment"

import * as S from "./logs-item.styled"

const LogsItemView = ({data, fileLotsLink, onOpenFile}) => {
  return (
    <S.Container>
      <td>
        <S.Item>
          <S.Date>{moment(data?.date).format('DD.MM.YYYY hh:mm:ss')}</S.Date>
        </S.Item>
      </td>

      <td>
        <S.Item>
          <S.Status status={data?.status}>{data?.status}</S.Status>
        </S.Item>
      </td>

      <td>
        <S.Item>
          <S.Message>{data?.message}</S.Message>
        </S.Item>
      </td>

      {fileLotsLink && <td>
        <S.Item>
          <S.Action
            size="small"
            title="View File"
            onClick={onOpenFile}
          />
        </S.Item>
      </td>}
    </S.Container>
  );
}

export default LogsItemView;
