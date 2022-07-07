import React from 'react';

import * as S from "./empty.styled"

const EmptyView = () => {
  return (
    <S.Container>
      <S.Title>Empty</S.Title>

      <S.Description>Сouldn't find anything</S.Description>
    </S.Container>
  );
}

export default EmptyView;
