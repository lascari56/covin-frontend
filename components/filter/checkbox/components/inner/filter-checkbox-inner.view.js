import React from 'react'

import * as S from "./filter-checkbox-inner.styled"

export default function FilterCheckboxInnerView({active, ...props}) {
  return (
    <S.Container active={active} {...props} />
  )
}
