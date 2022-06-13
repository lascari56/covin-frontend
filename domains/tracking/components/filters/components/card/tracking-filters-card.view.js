import React from 'react'

import {FormSwitch} from "@components/form"

import * as S from "./tracking-filters-card.styled"

export default function TrackingFiltersCardView({className}) {
  return (
    <S.Container className={className}>
      <S.Header>
        <S.Title>Mazda CX-5 от 2017</S.Title>

        <FormSwitch />
      </S.Header>

      <S.Footer>
        <S.Icon />
      </S.Footer>
    </S.Container>
  )
}
