import React from 'react'

import { CabinetPage } from "@components/cabinet";

import PaymentsInfo from './components/info'

import * as S from './payments.styled'

const LotsView = ({data, page, pageCount, loading, onChangePage}) => {
  return (
    <S.Container>
      <S.Content>
        <S.Report />

        {/* <S.Subscription /> */}
      </S.Content>

      <PaymentsInfo />

      <S.Table
        data={data.data}
        page={page}
        total={data?.total}
        pageCount={pageCount}
        loading={loading}
        onChangePage={onChangePage}
      />
    </S.Container>
  );
};

export default LotsView;
