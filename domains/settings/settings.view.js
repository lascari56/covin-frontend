import React from 'react'

import * as S  from './settings.styled'

export default function SettingsView({user}) {
  return (
    <S.Container>
      <S.PersonalInfo user={user} />

      <S.NotificationSetting/>
    </S.Container>
  )
}
