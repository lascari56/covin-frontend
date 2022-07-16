import React from 'react'

import {FiltersCreateIcon} from "@components/filters-create"

import * as S from "./templates-filters-card.styled"

export default function TemplatesFiltersCardView({className, title, active, onClick}) {
  return (
    <S.Container className={className} active={active} onClick={onClick}>
      <S.Title>{title}</S.Title>

      <FiltersCreateIcon name="delete"/>
    </S.Container>
  )
}
