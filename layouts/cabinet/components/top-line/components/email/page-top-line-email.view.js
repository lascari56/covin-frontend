import React from 'react'

import * as S from './page-top-line-email.styled'

export default function PageTopLineEmailView({value}) {
  return (
    <S.Container>
      <S.Icon src="/images/user.svg"/>

      <S.Title>{value}</S.Title>
    </S.Container>
  )
}
