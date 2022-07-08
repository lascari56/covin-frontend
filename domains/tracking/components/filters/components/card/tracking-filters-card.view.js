import React from 'react'

import * as S from "./tracking-filters-card.styled"

export default function TrackingFiltersCardView({className, active}) {
  return (
    <S.Container className={className} active={active}>
      <S.Header>
        <S.Title>Mazda CX-5 от 2017</S.Title>
      </S.Header>

      <S.Footer>
        <S.Icon name="copy" />

        <S.Icon name="notification" />

        <S.Icon name="delete"/>
      </S.Footer>
    </S.Container>
  )
}
