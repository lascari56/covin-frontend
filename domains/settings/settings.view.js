import React from 'react'

import * as S  from './settings.styled'

export default function SettingsView() {
  return (
    <S.Container>
      <S.PersonalInfo/>

      <S.NotificationSetting/>
    </S.Container>
  )
}
