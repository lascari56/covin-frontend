import React from 'react';

import {Icon} from "@components"

import * as S from "./filters-create-icon.styled"

const FiltersCreateIconView = ({className, name}) => {
  return (
    <S.Container className={className}>
      <Icon name={name} />
    </S.Container>
  );
}

export default FiltersCreateIconView;
