import React from 'react'

import Moment from 'react-moment';

import * as S from './lot-card-header.styled'

export default function LotCardHeaderView({data, date}) {
  return (

    
    <S.Container type={data?.type}>
      <S.Logo src={data?.site === "1" ? "/images/copart-logo.png" : "/images/iaai-logo.png"} site={data?.site} />

      <S.Title type={data?.type}>
        {data?.year} {data?.make} {data?.model} {data?.series}

        <S.Link><a href="#">(view all photo)</a></S.Link>

        {data?.type === "hide" && <S.Hide>(hide)</S.Hide>}
      </S.Title>

      {!!data?.price_new && <S.BuyButton theme="green" size="small" title={`Buy It Now for ${data?.price_new} $`} />}

      {!!date && (
        <>
          <S.CalendarIcon src="/images/calendar.svg/"/>

          <S.Date>{date}</S.Date>
        </>
      )}
    </S.Container>
  )
}
