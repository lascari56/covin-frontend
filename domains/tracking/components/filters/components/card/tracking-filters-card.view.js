import React from 'react'

import * as S from "./tracking-filters-card.styled"

export default function TrackingFiltersCardView({className, active, title, onClick}) {
  return (
    <S.Container className={className} active={active} onClick={onClick}>
      <S.Header>
        <S.Title>{title}</S.Title>
      </S.Header>

      <S.Footer>
        <S.Icon name="copy" />

        <S.Icon name="notification" />

        <S.Icon name="delete"/>
      </S.Footer>
    </S.Container>
  )
}
