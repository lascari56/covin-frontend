import React from 'react'

import * as S from "./cabinet-page.styled"

export default function CabinetPageView({children, TopComponent, LeftComponent}) {
  return (
    <S.Container>
      {!!LeftComponent && <S.Left>{LeftComponent}</S.Left>}
      
      <S.Content>
        {TopComponent}

        <S.Children>
          {children}
        </S.Children>
      </S.Content>
    </S.Container>
  )
}
