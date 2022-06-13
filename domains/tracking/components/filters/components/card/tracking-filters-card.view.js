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
        <S.Icon name="copy" />

        <S.Icon name="copy" />

        <S.Icon name="notification" />

        <S.Icon name="delete"/>
      </S.Footer>
    </S.Container>
  )
}
