import React from 'react';

import * as S from "./lots-filters-header.styled"

const LotsFiltersHeaderView = () => {
  return (
    <S.Container>
      <S.Title>Filters</S.Title>

      <S.Reset>Reset all</S.Reset>
    </S.Container>
  );
}

export default LotsFiltersHeaderView;
