import React from 'react';

import {Icon} from "@components"

import * as S from "./tracking-filters-card-icon.styled"

const TrackingFiltersCardIconView = ({className, name}) => {
  return (
    <S.Container className={className}>
      <Icon name={name} />
    </S.Container>
  );
}

export default TrackingFiltersCardIconView;
