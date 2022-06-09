import React from 'react'

import * as S from "./form-input.styled"

export default function FormInputView({ className, ...props}) {
  return (
    <S.Container className={className}>
      <S.Input {...props} />
    </S.Container>
  )
}
