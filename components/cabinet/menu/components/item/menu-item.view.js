import React from 'react'

import Link from 'next/link'

import * as S from "./menu-item.styled"

export default function MenuItemView({data, active}) {
  return (
    <Link href={data?.route} passHref>
      <S.Container active={active}>
        <S.Title active={active}>{data?.label}</S.Title>
      </S.Container>
    </Link>
  )
}
