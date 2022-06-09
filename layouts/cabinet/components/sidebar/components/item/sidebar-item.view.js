import React from 'react'

import Link from 'next/link'

import * as S from './sidebar-item.styled'

export default function SidebarItemView({data, theme, full, active}) {
  return (
    <Link href={data.route} passHref>
      <S.Container full={full} active={active}>
        <S.Icon src={data?.icon}/>

        <S.Title theme={theme} full={full}>{data?.title}</S.Title>

        <S.Indicator active={active} />
      </S.Container>
    </Link>
  )
}
