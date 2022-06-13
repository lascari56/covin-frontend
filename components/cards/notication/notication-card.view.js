import React from 'react';

import * as S from "./notication-card.styled"

const NoticationCardView = ({className}) => {
  return (
    <S.Container className={className}>
      <S.Title>Send notification if:</S.Title>
    </S.Container>
  );
}

export default NoticationCardView;
