import React from 'react';

import * as S from "./lot-card-actions-item.styled"

import Icon from "@components/icon" 

const LotCardActionsItemView = ({className, icon, onClick}) => {
  return (
    <S.Container className={className} onClick={onClick}>
      <Icon icon={icon} size={24} />
    </S.Container>
  );
}

export default LotCardActionsItemView;
