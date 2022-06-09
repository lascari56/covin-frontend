import React from 'react'

import CabinetTopLine from "./components/top-line"
import CabinetSidebar from "./components/sidebar"

import * as S from "./cabinet.styled"

export default function CabinetView({children, isFull}) {
  return (
    <S.Container>
      <CabinetTopLine />

      <S.Content>
        <CabinetSidebar full={isFull} />

        {children}
      </S.Content>
    </S.Container>
  )
}
