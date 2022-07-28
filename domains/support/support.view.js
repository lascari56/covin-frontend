import React from 'react'

import {Button} from "@components"

import { CabinetPage, CabinetCard } from "@components/cabinet";

import * as S from './support.styled'

export default function SupportView() {
  return (
    <CabinetPage>
      <S.Container>
        <S.Content>
          <S.Title>Do you have any questions or suggestions?</S.Title>

          <S.Description>Call to us +18882536688</S.Description>

          <S.Or>Or</S.Or>

          <Button title="Message Us" target="_blank" to="http://m.me/covinpro" />
        </S.Content>
      </S.Container>
    </CabinetPage>
  )
}
