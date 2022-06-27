import React, {useEffect, useRef} from 'react'

import * as S from "./form-input.styled"

export default function FormInputView({ className, autofocus, label, size, theme, onChange, ...props}) {
  const innerRef = useRef()

  useEffect(() => {
    if (autofocus) {
      innerRef.current?.focus()
    }
  }, [autofocus])

  return (
    <S.Container className={className}>
      {!!label && <S.Label>{label}</S.Label>}

      <S.Input {...props} ref={innerRef} size={size} theme={theme} onChange={event => onChange(event.target.value)} />
    </S.Container>
  )
}
