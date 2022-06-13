import React from 'react'

import Moment from 'react-moment';

import * as S from './lot-card-header.styled'

export default function LotCardHeaderView({data}) {
  return (
    <S.Container type={data?.type}>
      <S.Logo src="/images/company-logo.png"/>

      <S.Title type={data?.type}>
        {data?.title}

        <S.Link><a href="#">(view all photo)</a></S.Link>

        {data?.type === "hide" && <S.Hide>(hide)</S.Hide>}
      </S.Title>

      <S.BuyButton theme="green" size="small" title={`Buy It Now for ${data?.cost_priced} $`} />

      <S.CalendarIcon src="/images/calendar.svg/"/>

      <S.Date>
        <Moment date={data?.auction_date} format="DD MMM, hh:mm A" />
      </S.Date>
    </S.Container>
  )
}
