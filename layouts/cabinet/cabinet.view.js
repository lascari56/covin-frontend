import React from 'react'

import CabinetTopLine from "./components/top-line"


import * as S from "./cabinet.styled"

export default function CabinetView({children, isFull}) {
  return (
    <S.Container>
      <CabinetTopLine />

      <S.Content full={isFull}>
        <S.Sidebar full={isFull} />

        {children}
      </S.Content>
    </S.Container>
  )
}
