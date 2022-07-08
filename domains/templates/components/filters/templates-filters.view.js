import React from 'react';

import * as S from "./templates-filters.styled"

const TemplatesFiltersView = () => {
  return (
    <S.Container>
      <S.AddButton title="New Template" to="/cabinet/templates/create" />

      <S.Title>Templates list</S.Title>

      <S.Card active />

      <S.Card />

      <S.Card />

      <S.Card />

      <S.Card />

      <S.Card />
    </S.Container>
  );
}

export default TemplatesFiltersView;
