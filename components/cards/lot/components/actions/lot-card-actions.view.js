import React from 'react'

import LotCardActionsItem from "./components/item"

import * as S from './lot-card-actions.styled'

export default function LotCardActionsView({showNotification, onChangeShowNotification}) {
  return (
    <S.Container>
      <S.Item >
        <LotCardActionsItem src="/images/favorite.svg" />
      </S.Item>

      <S.Item>
        <LotCardActionsItem src="/images/сomment.svg" />
      </S.Item>

      <S.Item>
        <LotCardActionsItem src="/images/hide.svg" />
      </S.Item>

      <S.Item>
        <LotCardActionsItem src="/images/notification.svg" onClick={() => onChangeShowNotification(!showNotification)} />

        {!!showNotification && <S.Notification />}
      </S.Item>

      
    </S.Container>
  )
}
