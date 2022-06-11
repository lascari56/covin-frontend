import React from 'react'

import * as S from "./filter-group.styled"

export default function FilterGroupView({title, children, show, onChange}) {
  return (
    <S.Container>
      <S.Header onClick={() => onChange(!show)}>
        <S.Title>{title}</S.Title>

        <S.Arrow src="/images/arrow.svg" active={show} />
      </S.Header>
      
      {show && (
        <S.Content>
          {children}
        </S.Content>
      )}
    </S.Container>
  )
}
