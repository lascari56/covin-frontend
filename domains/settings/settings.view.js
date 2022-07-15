import React from 'react'

import { CabinetPage } from "@components/cabinet";

import SettingsPersonalInfo from './components/personal-info'

import * as S  from './settings.styled'

export default function SettingsView({user, onUpdatePersonalInfo}) {
  return (
    <CabinetPage>
      <SettingsPersonalInfo user={user} onSubmit={onUpdatePersonalInfo} />
    </CabinetPage>
    // <S.Container>
    //   <S.PersonalInfo user={user} onSubmit={onUpdatePersonalInfo} />

    //   <S.NotificationSetting/>
    // </S.Container>
  )
}
