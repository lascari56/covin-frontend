import React from 'react'

import {Icon} from "@components"

import * as S from './lot-card-commentary.styled'

export default function LotCardCommentaryView({value, onRemove}) {
  return (
    <S.Container>
      <S.Content>
        <S.Title>Commentary</S.Title>

        <S.Description>{value}</S.Description>
      </S.Content>

      <S.Close onClick={onRemove}>
        <Icon name="close" size={16} />
      </S.Close>
    </S.Container>
  )
}
