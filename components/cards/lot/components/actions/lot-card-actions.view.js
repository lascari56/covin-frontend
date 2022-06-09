import React from 'react'

import * as S from './lot-card-actions.styled'

export default function LotCardActionsView() {
  return (
    <S.Container>
      <S.Item >
        <S.Icon src="/images/favorite.svg"/>
      </S.Item>

      <S.Item>
        <S.Icon src="/images/сomment.svg"/>
      </S.Item>

      <S.Item>
        <S.Icon src="/images/hide.svg"/>
      </S.Item>

      <S.Item>
        <S.Icon src="/images/notification.svg"/>
      </S.Item>
    </S.Container>
  )
}
