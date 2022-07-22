import React from 'react'

import {Icon} from "@components"

import * as S from './lot-card-commentary.styled'

export default function LotCardCommentaryView({value, onChangeValue, onRemove, onSubmitCommentary}) {
  return (
    <S.Container>
      <S.Content>
        <S.Title>Comment:</S.Title>

        <S.Input
          value={value}
          onChange={(data) => onChangeValue(data.target.value)}
          onKeyDown={(e) => e.key === "Enter" && onSubmitCommentary(value)}
        />
      </S.Content>

      <S.Close onClick={onRemove}>
        <Icon name="close" size={16} />
      </S.Close>
    </S.Container>
  )
}
