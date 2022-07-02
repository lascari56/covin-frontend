import React from 'react'

import CabinetTopLine from "./components/top-line"


import * as S from "./cabinet.styled"

export default function CabinetView({children, isFull, user, onLogout}) {
  return (
    <S.Container>
      <CabinetTopLine user={user} onLogout={onLogout} />

      <S.Body>
        <S.Sidebar full={isFull} />

        <S.Content full={isFull}>
          {children}
        </S.Content>
      </S.Body>
    </S.Container>
  )
}
