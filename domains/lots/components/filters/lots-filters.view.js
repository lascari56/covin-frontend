import React from 'react';

import LotsFiltersHeader from "./components/header"

import * as S from "./lots-filters.styled"

const LotsFiltersView = () => {
  return (
    <S.Container>
      <LotsFiltersHeader />

      <S.Footer>
        <S.Action theme="outline" title="Save New Order" />

        <S.Action title="OK" />
      </S.Footer>
    </S.Container>
  );
}

export default LotsFiltersView;
