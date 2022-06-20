import React from 'react'

import * as S from './payments.styled'

import PaymentsInfo from './components/info'

const LotsView = () => {
  return (
    <S.Container>
      <S.Content>
        <S.Report />

        <S.Subscription />
      </S.Content>

      <PaymentsInfo />

      <S.Table />
    </S.Container>
  );
};

export default LotsView;
