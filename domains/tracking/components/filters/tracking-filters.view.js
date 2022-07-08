import React from 'react';

import * as S from "./tracking-filters.styled"

const TrackingFiltersView = () => {
  return (
    <S.Container>
      <S.AddButton title="New Tracking" to="/cabinet/tracking/create" />

      <S.Title>Tracking list</S.Title>

      <S.Card active />

      <S.Card />

      <S.Card />

      <S.Card />

      <S.Card />

      <S.Card />
    </S.Container>
  );
}

export default TrackingFiltersView;
