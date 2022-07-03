import React from 'react'

import * as S  from './settings.styled'

export default function SettingsView({user, onUpdatePersonalInfo}) {
  return (
    <S.Container>
      <S.PersonalInfo user={user} onSubmit={onUpdatePersonalInfo} />

      <S.NotificationSetting/>
    </S.Container>
  )
}
