import React from 'react'

import CabinetTopLine from "./components/top-line"


import * as S from "./cabinet.styled"

export default function CabinetView({children, isFull, onLogout}) {
  return (
    <S.Container>
      <CabinetTopLine onLogout={onLogout} />

      <S.Body>
        <S.Sidebar full={isFull} />

        <S.Content full={isFull}>
          {children}
        </S.Content>
      </S.Body>
    </S.Container>
  )
}
