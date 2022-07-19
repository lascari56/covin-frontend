import React from 'react'

import * as S from './payments.styled'

import PaymentsInfo from './components/info'

const LotsView = ({data, page, pageCount, loading, onChangePage}) => {
  return (
    <S.Container>
      <S.Content>
        <S.Report />

        <S.Subscription />
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
