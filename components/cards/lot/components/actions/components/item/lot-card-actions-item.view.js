import React from 'react';

import * as S from "./lot-card-actions-item.styled"

const LotCardActionsItemView = ({className, src, onClick}) => {
  return (
    <S.Container className={className} onClick={onClick}>
      <S.Icon src={src} />
    </S.Container>
  );
}

export default LotCardActionsItemView;
