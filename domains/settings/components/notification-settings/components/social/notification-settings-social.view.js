import React from 'react'

import * as S from './notification-settings-social.styled'

export default function NotificationSettingsSocialView() {
  return (
    <S.Container>
      <S.Social>
          <S.Icon src="/images/telegram.svg"/>

          <S.Title>Telegram</S.Title>

          <S.Status>(active)</S.Status>

          <S.Trash src="/images/trash.svg"/>
      </S.Social>

      <S.Social>
          <S.Icon src="/images/messenger.svg"/>

          <S.Title>Facebook Massanger</S.Title>

          <S.Status>(active)</S.Status>

          <S.Trash src="/images/trash.svg"/>
      </S.Social>
    </S.Container>
  )
}
