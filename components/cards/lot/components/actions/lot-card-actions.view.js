import React from 'react'

import LotCardActionsItem from "./components/item"

import * as S from './lot-card-actions.styled'

import FavoriteSVG from "./images/favorite"
import CommentSVG from "./images/сomment"
import HideSVG from "./images/hide"
import NotificationVG from "./images/notification"

export default function LotCardActionsView({showNotification, onChangeShowNotification}) {
  return (
    <S.Container>
      <S.Item >
        <LotCardActionsItem icon={FavoriteSVG} />
      </S.Item>

      <S.Item>
        <LotCardActionsItem icon={CommentSVG} />
      </S.Item>

      <S.Item>
        <LotCardActionsItem icon={HideSVG} />
      </S.Item>

      <S.Item>
        <LotCardActionsItem icon={NotificationVG} onClick={() => onChangeShowNotification(!showNotification)} />

        {!!showNotification && <S.Notification />}
      </S.Item>

      
    </S.Container>
  )
}
