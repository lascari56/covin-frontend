import React from 'react'

import {Button} from "@components"

import * as S from './notification-settings-add.styled'

export default function NotificationSettingsAddView({ className }) {
  return (
    <S.Container className={className}>
        <S.Title>Add a source</S.Title>

      <S.Description>List of connected notifications</S.Description>

      <Button size="base" title="Add"  theme="violet"/>
    </S.Container>
  )
}
