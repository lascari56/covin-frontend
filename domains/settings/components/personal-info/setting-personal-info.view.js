import React from 'react'

import {CabinetCard} from "@components/cabinet"

import * as S from './setting-personal-info.styled'

export default function SettingPersonalInfoView({className}) {
  return (
    <CabinetCard className={className} title="Personal info" icon="/images/user2.svg">
      <S.Content>
        <S.Group title="Personal" description="Your name, e-mail and phone">
          <S.Input placeholder="Email"/>

          <S.Input placeholder="Name"/>

          <S.Input placeholder="Phone"/>
        </S.Group>

        <S.Group title="Password" description="Your password settings">
          <S.Input placeholder="New password"/>

          <S.Input placeholder="Confirm password"/>
        </S.Group>
      </S.Content>

      <S.Action size="base" title="Save" theme="violet"/>
    </CabinetCard>
  )
}
