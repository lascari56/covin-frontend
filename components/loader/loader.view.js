import React from 'react';

import { Rings } from  'react-loader-spinner'

import * as S from "./loader.styled"

const LotsFiltersView = () => {
  return (
    <S.Container>
      <Rings color="#00BFFF" height={80} width={80} />
    </S.Container>
  );
}

export default LotsFiltersView;
