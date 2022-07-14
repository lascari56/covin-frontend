import React from 'react';

import moment from "moment"

import * as S from "./logs-item.styled"

const LogsItemView = ({data, fileLotsLink, fileLotsSeledLink, onOpenFile}) => {
  return (
    // <S.Container>
      <S.Content>
        <td>
          <S.Item>
            <S.Date style={{width: 80}}>{moment(data?.date).format('DD.MM hh:mm')}</S.Date>
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

        <td>
          <S.Item>
            <S.Message>{data?.api}</S.Message>
          </S.Item>
        </td>

        <td>
          <S.Item>
            <S.Message>{data?.client}</S.Message>
          </S.Item>
        </td>

        <td>
          <S.Item>
            <S.Message>{data?.vin}</S.Message>
          </S.Item>
        </td>

        <td>
          {fileLotsLink && 
            <S.Item>
              <S.Action
                size="small"
                title="View Lots"
                onClick={onOpenFile}
              />
            </S.Item>
          }
          
          {fileLotsSeledLink && 
            <S.Item style={{marginTop: 10}}>
              <S.Action
                size="small"
                title="View Seled"
                onClick={() => onOpenFile(true)}
              />
            </S.Item>
          }
        </td>
      </S.Content>
    // </S.Container>
  );
}

export default LogsItemView;
