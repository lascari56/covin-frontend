import React from 'react';

import * as S from "./lots-filters-header.styled"

const LotsFiltersHeaderView = ({onReset}) => {
  return (
    <S.Container>
      <S.Title>Filters</S.Title>

      <S.Reset onClick={onReset}>Reset all</S.Reset>
    </S.Container>
  );
}

export default LotsFiltersHeaderView;
