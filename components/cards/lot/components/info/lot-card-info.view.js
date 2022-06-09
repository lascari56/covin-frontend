import React from 'react'

import * as S from './lot-card-info.styled'

export default function LotCardInfoView({data, options}) {
  return (
    <S.Container>
      {options?.map((item, index) => (
        <S.Item title={data[item.key]} icon={item.icon} key={index} />
      ))}
    </S.Container>
  )
}