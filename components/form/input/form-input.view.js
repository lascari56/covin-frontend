import React from 'react'

import * as S from "./form-input.styled"

export default function FormInputView({ className, label, size, theme, onChange, ...props}) {
  return (
    <S.Container className={className}>
      {!!label && <S.Label>{label}</S.Label>}

      <S.Input {...props} size={size} theme={theme} onChange={event => onChange(event.target.value)} />
    </S.Container>
  )
}
