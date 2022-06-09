import React from 'react'

import {CabinetCard} from "@components/cabinet"

import NotificationSettingsAdd from './components/add'
import NotificationSettingsSocial from './components/social'
import NotificationSettingsSource from './components/source'

import * as S from './notification-settings.styled'

export default function NotificationSettingsView({className}) {
  return (
    <CabinetCard className={className} title="Notification Settings" icon="/images/notfication.svg">
      <NotificationSettingsAdd/>

      <NotificationSettingsSocial/>

      <NotificationSettingsSource/>
    </CabinetCard>
  )
}
