import React from 'react';

import { ThreeCircles } from  'react-loader-spinner'

import * as S from "./loader.styled"

const LotsFiltersView = ({isBackground}) => {
  return (
    <S.Container isBackground={isBackground}>
      <S.Loader>
        <ThreeCircles color="#00BFFF" width={40} height={40} />
      </S.Loader>
    </S.Container>
  );
}

export default LotsFiltersView;
