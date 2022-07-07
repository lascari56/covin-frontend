import React from 'react'

import TemplatesFiltersCardIcon from "./components/icon"

import * as S from "./templates-filters-card.styled"

export default function TemplatesFiltersCardView({className, active}) {
  return (
    <S.Container className={className} active={active}>
      <S.Title>Mazda CX-5 от 2017</S.Title>

      <TemplatesFiltersCardIcon name="delete"/>
    </S.Container>
  )
}
