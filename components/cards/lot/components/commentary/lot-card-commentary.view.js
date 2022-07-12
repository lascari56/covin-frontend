import React from 'react'

import * as S from './lot-card-commentary.styled'

export default function LotCardCommentaryView({value}) {
  return (
    <S.Container>
      <S.Title>Commentary</S.Title>

      <S.Description>{value}</S.Description>
    </S.Container>
  )
}
