import React from 'react';

import * as S from "./empty.styled"

const EmptyView = ({ title, description }) => {
  return (
    <S.Container>
      <S.Title>{title}</S.Title>

      <S.Description>{description}</S.Description>
    </S.Container>
  );
}

EmptyView.defaultProps = {
  title: "Empty",
  description: `Сouldn\'t find anything`
}

export default EmptyView;
