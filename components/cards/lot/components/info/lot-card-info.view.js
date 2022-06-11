import React from 'react'

import * as S from './lot-card-info.styled'

export default function LotCardInfoView({data}) {
  return (
    <S.Container>
      {data?.map((item, index) => (
        <S.Item title={item.value} icon={item.icon} key={index} />
      ))}
    </S.Container>
  )
}