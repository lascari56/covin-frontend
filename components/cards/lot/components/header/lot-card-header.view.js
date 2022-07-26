import React from 'react'

import * as S from './lot-card-header.styled'

export default function LotCardHeaderView({data, date, onFull}) {
  return (
    <S.Container isHidden={!!data?.hidden}>
      <S.Logo src={data?.site === "1" ? "/images/copart-logo.png" : "/images/iaai-logo.png"} site={data?.site} />

      <S.Title isHidden={!!data?.hidden}>
        {data?.title}

        <S.Link onClick={onFull}>(HD Photo)</S.Link>

        {!!data?.hidden && <S.Hide>(hide)</S.Hide>}
      </S.Title>

      {!!data?.price_new && (
        <S.BuyNow>
          <S.BuyNowLabel>Buy It Now for {data?.price_new} $</S.BuyNowLabel>
        </S.BuyNow>
      )}

      <S.CalendarIcon src="/images/calendar.svg/"/>

      <S.Date theme={date?.theme}>{date?.value}</S.Date>
    </S.Container>
  )
}
