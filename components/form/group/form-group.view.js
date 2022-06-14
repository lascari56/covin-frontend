import React from 'react'

import * as S from "./form-group.styled"

export default function FormFroupView({className, title, description, children}) {
  return (
    <S.Container className={className}>
      <S.Title>{title}</S.Title>

      <S.Description>{description}</S.Description>

      {children}
    </S.Container>
  )
}
