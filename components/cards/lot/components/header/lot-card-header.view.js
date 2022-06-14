import React from 'react'

import * as S from './lot-card-header.styled'

export default function LotCardHeaderView({data, date}) {
  return (
    <S.Container type={data?.type}>
      <S.Logo src={data?.site === "1" ? "/images/copart-logo.png" : "/images/iaai-logo.png"} site={data?.site} />

      <S.Title type={data?.type}>
        {data?.title}

        <S.Link><a href="#">(view all photo)</a></S.Link>

        {data?.type === "hide" && <S.Hide>(hide)</S.Hide>}
      </S.Title>

      {!!data?.price_new && <S.BuyButton theme="green" size="small" title={`Buy It Now for ${data?.price_new} $`} />}

      <S.CalendarIcon src="/images/calendar.svg/"/>

      <S.Date>{data?.auction_date_api || "Future"}</S.Date>
    </S.Container>
  )
}
