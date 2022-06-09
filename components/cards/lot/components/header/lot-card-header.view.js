import Link from 'next/link'
import React from 'react'

import * as S from './lot-card-header.styled'

export default function LotCardHeaderView({data}) {
  return (
    <S.Container type={data?.type}>
      <S.Logo src="/images/company-logo.png"/>

      <S.Title type={data?.type}>
        {data?.year} {data?.make} {data?.model} {data?.series}

        <S.Link><a href="#">(view all photo)</a></S.Link>

        {data?.type === "hide" && <S.Hide>(hide)</S.Hide>}
      </S.Title>

      <S.BuyButton theme="green" size="small" title="Buy It Now for 58 623 $" />

      <S.CalendarIcon src="/images/calendar.svg/"/>

      <S.Date>13 Feb, 07:29 PM</S.Date>
    </S.Container>
  )
}
